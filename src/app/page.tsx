"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false);
  const router = useRouter();


  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await signIn("wso2is", {
        redirect: false,
        callbackUrl: "/gestor",
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      if (result?.url) {
        router.push(result.url);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("Este utilizador não existe!");
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
        // Redirecionar para o logout do WSO2 IS após esconder a mensagem de erro
        const logoutUrl = `https://id.gov.ao/oidc/logout?post_logout_redirect_uri=${encodeURIComponent(
          process.env.NEXT_PUBLIC_NEXTAUTH_URL || ""
        )}`;
        window.location.href = logoutUrl;
      }, 5000);
    }
  };
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS 14 Starter</h1>
      <p>
        <Link className="text-indigo-600" href="/" title="inicio">
          inicio
        </Link>{" "}
        /{" "}
        <Link href="/about" title="sobre">
          sobre
        </Link>
      </p>

      <button onClick={handleSubmit}>Login</button>
    </main>
  );
}
