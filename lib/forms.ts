// Marketing form submissions go to our own API, which persists them to the
// marketing_submissions table and emails the team. This replaced web3forms so
// the leads live in our database rather than a third party's inbox.
const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "https://api.janta-x.com";
const ENDPOINT = `${API_BASE}/api/forms`;

type SubmitResult = { ok: boolean; dryRun: boolean };

type Payload = {
  kind: "waitlist" | "demo" | "message";
  email: string;
  name?: string;
  organization?: string;
  message?: string;
  source?: string;
};

async function post(payload: Payload): Promise<SubmitResult> {
  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      // No cookies needed — these are anonymous submissions, and omitting
      // credentials keeps the request a simple CORS POST.
      body: JSON.stringify({ botcheck: "", ...payload }),
    });
    return { ok: res.ok, dryRun: false };
  } catch (err) {
    // Network failure or CORS rejection — the dialogs surface this as an error
    // rather than silently swallowing the submission.
    console.error("form submission failed", err);
    return { ok: false, dryRun: false };
  }
}

export function submitWaitlist(email: string, source: string) {
  return post({ kind: "waitlist", email, source });
}

export function submitTeamMessage({
  name,
  email,
  message,
  kind = "message",
  organization,
  source,
}: {
  name: string;
  email: string;
  message: string;
  kind?: "message" | "demo";
  organization?: string;
  source?: string;
}) {
  // Organization and source are their own columns now rather than being
  // stuffed into the message body as they were for web3forms.
  return post({ kind, name, email, message, organization, source });
}
