"use client";

import TanStackProvider from '@/providers/TanStackProvider';
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function Providers({ children }) {

  return (
    <TanStackProvider>
        <SessionProvider>
            <Toaster position="top-center" reverseOrder={false} />
            {children}
        </SessionProvider>
    </TanStackProvider>
  );
}
