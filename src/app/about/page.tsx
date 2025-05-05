import { useTranslations } from "next-intl";
import Link from "next/link";

export default function About() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS 15 Starter</h1>
      <p>
        <Link href="/" title="inicio">
          inicio
        </Link>{" "}
        /{" "}
        <Link className="text-indigo-600" href="/about" title="sobre">
          sobre
        </Link>
      </p>
    </main>
  );
}
