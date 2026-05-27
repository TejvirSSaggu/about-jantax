const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";
const ENDPOINT = "https://api.web3forms.com/submit";

type SubmitResult = { ok: boolean; dryRun: boolean };

async function post(payload: Record<string, string>): Promise<SubmitResult> {
  if (!ACCESS_KEY) {
    console.warn("NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY not set — dry-run mode");
    return { ok: true, dryRun: true };
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ access_key: ACCESS_KEY, ...payload }),
  });
  return { ok: res.ok, dryRun: false };
}

export function submitWaitlist(email: string, source: string) {
  return post({
    subject: "JantaX waitlist signup",
    email,
    source,
    from_name: "JantaX waitlist",
    botcheck: "",
  });
}

export function submitFoundersMessage(name: string, email: string, message: string) {
  return post({
    subject: "JantaX — message for founders",
    name,
    email,
    message,
    from_name: "JantaX founders form",
    botcheck: "",
  });
}
