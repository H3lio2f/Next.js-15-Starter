import { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { serialize } from 'cookie';
import { api } from "@/services/axios";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "Credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        code: { label: "Code", type: "text" },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.code) {
          return null;
        }

        const { email, code } = credentials;

        const token = await api
          .post("/auth/login/otp", { email, otp: code })
          .then((response) => {
            return response.data.access_token;
          })
          .catch((error) => {
            if (error instanceof AxiosError && error.response?.data.message) {
              throw new Error(error.response?.data.message);
            } else {
              throw new Error(error);
            }
          });

        // eslint-disable-next-line no-undef
        const decoded: any = jwtDecode(token);

        return {
          id: decoded.sub,
          email,
          profile: decoded.profileId,
          name: decoded?.firstName + " " + decoded?.lastName,
          access_token: token
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }: any) {
      if (account?.provider === "Credentials" && user) {
        const decoded: any = jwtDecode(user.access_token);

        token.access_token = user.access_token;
        token.id = decoded.sub;
        token.name = `${decoded.firstName ?? ""} ${decoded.lastName ?? ""}`;
        token.email = decoded.email;
        token.profile = decoded.role;
        return { ...token, ...user };
      }

      return token;
    },
    async session({ session, token }: any) {
      if (!token.access_token) {
        return null;
      }

      const decoded: any = jwtDecode(token.access_token);
      session.user = {
        id: token.id,
        email: token.email,
        name: decoded.firstName + " " + decoded.lastName,
        profile: decoded.role,
        access_token: token.access_token,
      };
      return session;
    },
  },
  events: {
    async signIn({ user, account }: any) {
      if (account?.provider === "wso2is" && user) {
        const serializedCookie = serialize(
          "next-auth.session-token",
          account.access_token,
          {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 1 * 24 * 60 * 60, // 1 day
            path: "/",
          }
        );
        api.defaults.headers["Cookie"] = serializedCookie;
      }
    },
  },
  pages: {
    signIn: "/entrar",
    signOut: "/",
    error: "/error",
  },
};

const handler = NextAuth(authOptions as AuthOptions);
export { handler as GET, handler as POST };
