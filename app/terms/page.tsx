import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { TermsBody } from "@/components/legal/TermsBody";

export const metadata: Metadata = {
  title: "Terms of Service — JantaX",
  description: "The agreement for using JantaX: tickets, deals, RSVPs, hosting, refunds and our responsibilities.",
  alternates: { canonical: "https://janta-x.com/terms" },
};

export default function Page() {
  return (
    <LegalPage title="Terms of Service">
      <TermsBody />
    </LegalPage>
  );
}
