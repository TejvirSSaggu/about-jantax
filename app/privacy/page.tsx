import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { PrivacyBody } from "@/components/legal/PrivacyBody";

export const metadata: Metadata = {
  title: "Privacy Policy — JantaX",
  description: "How JantaX collects, uses, shares and keeps personal information, and your choices.",
  alternates: { canonical: "https://janta-x.com/privacy" },
};

export default function Page() {
  return (
    <LegalPage title="Privacy Policy">
      <PrivacyBody />
    </LegalPage>
  );
}
