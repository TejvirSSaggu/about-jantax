import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { SmsTermsBody } from "@/components/legal/SmsTermsBody";

export const metadata: Metadata = {
  title: "SMS Terms — JantaX",
  description: "What JantaX texts you, how you agreed, and how to stop (reply STOP) or get help (reply HELP).",
  alternates: { canonical: "https://janta-x.com/sms-terms" },
};

export default function Page() {
  return (
    <LegalPage title="SMS Terms">
      <SmsTermsBody />
    </LegalPage>
  );
}
