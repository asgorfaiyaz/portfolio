"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Copy,
  Mail,
  Phone,
  PhoneCall,
  Send,
  Terminal,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const EMAIL_ADDRESS = "asgorfaiyaz@gmail.com";
const PHONE_NUMBER = "01889445355";
const TEL_URI = "tel:+8801889445355";
const WHATSAPP_URI = "https://wa.me/8801889445355";

const INQUIRY_TYPES = [
  "Full-time Role",
  "Frontend / React Engineering",
  "Full Stack Web Application",
  "Architectural Consulting",
  "Other Collaboration",
];

export function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">(
    "idle",
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: INQUIRY_TYPES[0],
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL_ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_NUMBER);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = PHONE_NUMBER;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormState("submitting");

    // Simulate sending with clean visual receipt
    setTimeout(() => {
      setFormState("success");
    }, 700);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: INQUIRY_TYPES[0],
      message: "",
    });
    setFormState("idle");
  };

  const mailtoHref = `mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(
    `[Portfolio Inquiry: ${formData.inquiryType}] from ${formData.name || "Colleague"}`,
  )}&body=${encodeURIComponent(
    `Hi Faiyaz,\n\n${formData.message}\n\nBest regards,\n${formData.name} (${formData.email}${formData.phone ? `, Phone: ${formData.phone}` : ""})`,
  )}`;

  return (
    <section
      id="contact"
      className="border-t border-border/60 pt-20 pb-12 sm:pt-10 sm:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <Badge
            variant="outline"
            className="border-border bg-surface-raised/80 px-3 py-1 text-xs text-foreground-muted"
          >
            <Terminal className="size-3.5 text-foreground-subtle" />
            <span>04 / Contact &amp; Connect</span>
          </Badge>
        </div>

        {/* Two-Column Grid: Left (Info & Direct Channels) + Right (Terminal Form) */}
        <div className="mt-5 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Contact & Status (5 cols on lg) */}
          <div className="space-y-6 lg:col-span-5">
            {/* Quick Email Card */}
            <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-7 backdrop-blur-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                  Direct Email
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-status-online">
                  <span className="size-2 rounded-full bg-status-online animate-pulse" />
                  <span>Verified Channel</span>
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-border-subtle bg-surface-raised/80 p-3.5 font-mono text-xs sm:text-sm text-foreground">
                <div className="flex items-center gap-2.5 truncate">
                  <Mail className="size-4 shrink-0 text-foreground-subtle" />
                  <span className="truncate select-all">{EMAIL_ADDRESS}</span>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="xs"
                  onClick={handleCopyEmail}
                  className="shrink-0 gap-1.5 text-xs text-foreground-muted hover:text-foreground cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="size-3 text-status-online" />
                      <span className="text-status-online font-mono">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className={buttonVariants({
                    variant: "default",
                    size: "default",
                    className: "w-full justify-center gap-2 font-medium",
                  })}
                >
                  <Send className="size-3.5" />
                  <span>Compose via Email App</span>
                  <ArrowUpRight className="size-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Quick Phone & WhatsApp Card */}
            <div className="rounded-2xl border border-border bg-card/60 p-6 sm:p-7 backdrop-blur-xs space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-foreground-subtle">
                  Phone &amp; WhatsApp
                </span>
                <span className="flex items-center gap-1.5 text-[11px] font-mono text-status-online">
                  <span className="size-2 rounded-full bg-status-online animate-pulse" />
                  <span>Direct Line</span>
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-border-subtle bg-surface-raised/80 p-3.5 font-mono text-xs sm:text-sm text-foreground">
                <div className="flex items-center gap-2.5 truncate">
                  <Phone className="size-4 shrink-0 text-foreground-subtle" />
                  <span className="truncate select-all">{PHONE_NUMBER}</span>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="xs"
                  onClick={handleCopyPhone}
                  className="shrink-0 gap-1.5 text-xs text-foreground-muted hover:text-foreground cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="size-3 text-status-online" />
                      <span className="text-status-online font-mono">
                        Copied!
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3" />
                      <span>Copy</span>
                    </>
                  )}
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={TEL_URI}
                  className={buttonVariants({
                    variant: "default",
                    size: "default",
                    className: "justify-center gap-2 font-medium text-xs sm:text-sm",
                  })}
                >
                  <PhoneCall className="size-3.5" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={WHATSAPP_URI}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "outline",
                    size: "default",
                    className:
                      "justify-center gap-2 font-medium border-border text-xs sm:text-sm",
                  })}
                >
                  <FaWhatsapp className="size-3.5 text-status-online" />
                  <span>WhatsApp</span>
                  <ArrowUpRight className="size-3 opacity-60" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Message Form (7 cols on lg) */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-xs shadow-xl">
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between border-b border-border-subtle bg-surface-overlay/80 px-4 py-3 text-xs text-foreground-subtle font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-foreground-subtle/30" />
                  <span className="size-2 rounded-full bg-foreground-subtle/30" />
                  <span className="size-2 rounded-full bg-foreground-subtle/30" />
                </div>
                <span className="text-[11px] truncate">
                  faiyaz.dev/send-message.ts
                </span>
                <Terminal className="size-3 text-foreground-subtle/50" />
              </div>

              {/* Form Content / Success Confirmation */}
              <div className="p-6 sm:p-8">
                {formState === "success" ? (
                  <div className="space-y-6 py-6 text-center">
                    <div className="mx-auto flex size-12 items-center justify-center rounded-full border border-status-online/30 bg-status-online/10 text-status-online">
                      <Check className="size-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">
                        Message Dispatch Acknowledged
                      </h3>
                      <p className="mx-auto max-w-md text-sm text-foreground-muted leading-relaxed">
                        Thank you,{" "}
                        <span className="font-semibold text-foreground">
                          {formData.name}
                        </span>
                        . Your inquiry regarding{" "}
                        <span className="font-mono text-xs text-foreground underline decoration-status-online/50">
                          {formData.inquiryType}
                        </span>{" "}
                        has been noted. I typically respond within 24 hours.
                      </p>
                    </div>

                    {/* Quick Fallback to Native Mail Client */}
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={mailtoHref}
                        className={buttonVariants({
                          variant: "default",
                          size: "sm",
                          className: "gap-1.5 font-medium",
                        })}
                      >
                        <Send className="size-3.5" />
                        <span>Open in Email Client to Send Directly</span>
                        <ArrowUpRight className="size-3" />
                      </a>

                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={handleResetForm}
                        className="border-border text-foreground-muted hover:text-foreground cursor-pointer"
                      >
                        Send Another Note
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="font-mono text-xs font-medium text-foreground-muted"
                        >
                          Name <span className="text-status-online">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full rounded-lg border border-border bg-surface-raised/70 px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle/50 outline-none transition-colors focus:border-border-hover focus:bg-surface-raised"
                        />
                      </div>

                      {/* Email Field */}
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="font-mono text-xs font-medium text-foreground-muted"
                        >
                          Email <span className="text-status-online">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          className="w-full rounded-lg border border-border bg-surface-raised/70 px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle/50 outline-none transition-colors focus:border-border-hover focus:bg-surface-raised"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Phone Field (Optional) */}
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="font-mono text-xs font-medium text-foreground-muted"
                        >
                          Your Phone Number{" "}
                          <span className="text-foreground-subtle">(Optional)</span>
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+880 1889-445355"
                          className="w-full rounded-lg border border-border bg-surface-raised/70 px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle/50 outline-none transition-colors focus:border-border-hover focus:bg-surface-raised"
                        />
                      </div>

                      {/* Inquiry / Subject Type */}
                      <div className="space-y-2">
                        <label
                          htmlFor="inquiryType"
                          className="font-mono text-xs font-medium text-foreground-muted"
                        >
                          Inquiring About
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleInputChange}
                          className="w-full rounded-lg border border-border bg-surface-raised/70 px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-border-hover focus:bg-surface-raised cursor-pointer"
                        >
                          {INQUIRY_TYPES.map((type) => (
                            <option
                              key={type}
                              value={type}
                              className="bg-card text-foreground"
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Textarea */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="font-mono text-xs font-medium text-foreground-muted"
                      >
                        Message <span className="text-status-online">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your team, product requirements, or the role you are looking to fill..."
                        className="w-full resize-y rounded-lg border border-border bg-surface-raised/70 px-3.5 py-2.5 text-sm text-foreground placeholder:text-foreground-subtle/50 outline-none transition-colors focus:border-border-hover focus:bg-surface-raised leading-relaxed"
                      />
                    </div>

                    {/* Submit Actions */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-border-subtle">
                      <span className="font-mono text-[11px] text-foreground-subtle">
                        Direct connection · No spam guarantee
                      </span>

                      <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="gap-2 font-medium cursor-pointer"
                      >
                        {formState === "submitting" ? (
                          <>
                            <span className="size-3.5 rounded-full border-2 border-foreground/30 border-t-foreground animate-spin" />
                            <span>Dispatching...</span>
                          </>
                        ) : (
                          <>
                            <Send className="size-3.5" />
                            <span>Send Message</span>
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
