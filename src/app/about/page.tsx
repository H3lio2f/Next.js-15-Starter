import { useTranslations } from "next-intl";
import Link from "next/link";

export default function About() {
  const translate = useTranslations("menu");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS 14 Starter</h1>
      <p>
        <Link href="/" title="inicio">
          {translate("inicio")}{" "}
        </Link>{" "}
        /{" "}
        <Link className="text-indigo-600" href="/about" title="sobre">
          {translate("sobre")}
        </Link>
      </p>
    </main>
  );
}
