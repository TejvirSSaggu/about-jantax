"use client";

import { useState } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check } from "lucide-react";
import { submitFoundersMessage } from "@/lib/forms";

export function FoundersDialog({
  open,
  onOpenChange,
  source,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  source: "hero" | "final-cta";
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !message.trim()) {
      setStatus("err");
      return;
    }
    setStatus("loading");
    const r = await submitFoundersMessage(name, email, `[${source}] ${message}`);
    setStatus(r.ok ? "ok" : "err");
    if (r.ok) {
      setTimeout(() => {
        onOpenChange(false);
        setName(""); setEmail(""); setMessage(""); setStatus("idle");
      }, 2500);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-ink border border-white/10 text-white sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display font-light text-2xl">Talk to the founders</DialogTitle>
          <DialogDescription className="text-white/55 text-sm">
            Pitch us your event, ask a question, or share your vision. We read every message.
          </DialogDescription>
        </DialogHeader>

        {status === "ok" ? (
          <div className="flex flex-col items-center text-center py-6 gap-3">
            <div className="w-12 h-12 rounded-full bg-success/15 text-success flex items-center justify-center">
              <Check size={20} />
            </div>
            <p className="text-white">Message sent. We&apos;ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="space-y-3 mt-2">
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required disabled={status === "loading"} className="bg-white/5 border-white/10" />
            <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" required disabled={status === "loading"} className="bg-white/5 border-white/10" />
            <Textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="What's on your mind?" rows={5} required disabled={status === "loading"} className="bg-white/5 border-white/10" />
            {status === "err" && <p className="text-rose text-xs">Please fill in all fields with a valid email.</p>}
            <Button type="submit" disabled={status === "loading"} className="w-full rounded-full bg-gradient-to-br from-pink to-[#c44d9a] text-white">
              {status === "loading" ? "Sending..." : "Send message →"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
