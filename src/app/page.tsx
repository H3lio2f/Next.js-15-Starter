"use client";

import Link from "next/link";

export default function Home() {
 
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS 15 Starter</h1>
      <p>
        <Link className="text-indigo-600" href="/" title="inicio">
          inicio
        </Link>{" "}
        /{" "}
        <Link href="/about" title="sobre">
          sobre
        </Link>
      </p>
    </main>
  );
}
