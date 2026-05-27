"use client";

import { useState } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check } from "lucide-react";
import { submitWaitlist } from "@/lib/forms";

export function WaitlistDialog({
  open,
  onOpenChange,
  source,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  source: "hero" | "final-cta";
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setStatus("err");
      return;
    }
    setStatus("loading");
    const r = await submitWaitlist(email, source);
    setStatus(r.ok ? "ok" : "err");
    if (r.ok) {
      setTimeout(() => {
        onOpenChange(false);
        setEmail(""); setStatus("idle");
      }, 2500);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-ink border border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display font-light text-2xl">Join the waitlist</DialogTitle>
          <DialogDescription className="text-white/55 text-sm">
            Be the first to know when JantaX opens to your city. No spam — just one launch email.
          </DialogDescription>
        </DialogHeader>

        {status === "ok" ? (
          <div className="flex flex-col items-center text-center py-6 gap-3">
            <div className="w-12 h-12 rounded-full bg-success/15 text-success flex items-center justify-center">
              <Check size={20} />
            </div>
            <p className="text-white">You&apos;re in. We&apos;ll be in touch.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-3 mt-2">
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@yourevent.com"
              required
              disabled={status === "loading"}
              className="bg-white/5 border-white/10"
            />
            {status === "err" && (
              <p className="text-rose text-xs">Please use a valid email.</p>
            )}
            <Button
              type="submit"
              disabled={status === "loading"}
              className="w-full rounded-full bg-gradient-to-br from-pink to-[#c44d9a] text-white"
            >
              {status === "loading" ? "Joining..." : "Join waitlist →"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
