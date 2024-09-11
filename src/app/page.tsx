import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const translate = useTranslations("menu");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Next JS 14 Starter</h1>
      <p>
        <Link className="text-indigo-600" href="/" title="inicio">
          {translate("inicio")}{" "}
        </Link>{" "}
        /{" "}
        <Link href="/about" title="sobre">
          {translate("sobre")}
        </Link>
      </p>
    </main>
  );
}
