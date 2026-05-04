import { motion } from "framer-motion";
import { ClipboardList, FileCheck2, HeadphonesIcon, Send, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import useSeo from "@/hooks/use-seo";

const POLICY_TYPES = [
  "Health Insurance",
  "Life Insurance",
  "Motor Insurance",
  "Business Insurance",
  "Travel Insurance",
  "Other",
];

const STEPS = [
  {
    icon: ClipboardList,
    title: "Submit Your Request",
    desc: "Fill the claim assistance form with your policy and incident details.",
  },
  {
    icon: HeadphonesIcon,
    title: "Talk to an Expert",
    desc: "A dedicated claim manager calls you within 24 hours to verify details.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Support",
    desc: "We help you collect, prepare, and submit all required documents.",
  },
  {
    icon: ShieldCheck,
    title: "Claim Settlement",
    desc: "We coordinate with the insurer end-to-end until your claim is settled.",
  },
];

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().regex(/^[+\d\s()-]{7,20}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Enter a valid email").max(200),
  policyType: z.string().min(1, "Select a policy type"),
  policyNumber: z.string().trim().max(60).optional().or(z.literal("")),
  issue: z.string().trim().min(10, "Please describe your issue (10+ characters)").max(1500),
});

type FormData = z.infer<typeof schema>;

const ClaimPage = () => {
  useSeo({
    title: "Claim Assistance — Sree Insurance Services",
    description:
      "Get end-to-end claim assistance from Sree Insurance Services. Submit a claim request and our experts will guide you through every step.",
  });

  const [data, setData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    policyType: "",
    policyNumber: "",
    issue: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);

  const update =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((i) => {
        errs[i.path[0] as keyof FormData] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Claim request received",
        description: "Our claims team will contact you within 24 hours.",
      });
      setData({
        name: "",
        phone: "",
        email: "",
        policyType: "",
        policyNumber: "",
        issue: "",
      });
    }, 900);
  };

  return (
    <div className="pt-20">
      {/* Intro */}
      <section className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 gradient-soft overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
        <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="container mx-auto relative text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Claim Assistance
            </span>
            <h1 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight">
              We Handle the Hard Part of <span className="gradient-text">Your Claim</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Filing an insurance claim shouldn't feel like a second job. Our dedicated claims
              team coordinates with insurers, prepares paperwork, and follows up — so you can
              focus on what matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              How It Works
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">
              Steps to <span className="gradient-text">File a Claim</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-7 rounded-3xl bg-card border border-border/50 shadow-elegant hover:shadow-glow hover:-translate-y-1 transition-smooth"
              >
                <div className="absolute -top-3 -left-3 w-9 h-9 rounded-full gradient-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-elegant">
                  {i + 1}
                </div>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <s.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 lg:py-20 gradient-soft relative overflow-hidden">
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Claim Request
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold">
              Submit Your <span className="gradient-text">Claim Details</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Share a few details and a claim manager will reach out within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="max-w-3xl mx-auto p-8 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-elegant grid sm:grid-cols-2 gap-5"
          >
            <div>
              <Label htmlFor="claim-name">Full Name</Label>
              <Input
                id="claim-name"
                value={data.name}
                onChange={update("name")}
                placeholder="Your name"
                maxLength={100}
                className="mt-1.5 h-12"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-destructive">{errors.name}</p>
              )}
            </div>
            <div>
              <Label htmlFor="claim-phone">Phone Number</Label>
              <Input
                id="claim-phone"
                type="tel"
                value={data.phone}
                onChange={update("phone")}
                placeholder="+91 98765 43210"
                maxLength={20}
                className="mt-1.5 h-12"
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-destructive">{errors.phone}</p>
              )}
            </div>
            <div>
              <Label htmlFor="claim-email">Email</Label>
              <Input
                id="claim-email"
                type="email"
                value={data.email}
                onChange={update("email")}
                placeholder="you@example.com"
                maxLength={200}
                className="mt-1.5 h-12"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-destructive">{errors.email}</p>
              )}
            </div>
            <div>
              <Label htmlFor="claim-policy-type">Policy Type</Label>
              <Select
                value={data.policyType}
                onValueChange={(v) => setData((d) => ({ ...d, policyType: v }))}
              >
                <SelectTrigger id="claim-policy-type" className="mt-1.5 h-12">
                  <SelectValue placeholder="Select a policy" />
                </SelectTrigger>
                <SelectContent>
                  {POLICY_TYPES.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.policyType && (
                <p className="mt-1 text-xs text-destructive">{errors.policyType}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="claim-policy-number">Policy Number (optional)</Label>
              <Input
                id="claim-policy-number"
                value={data.policyNumber}
                onChange={update("policyNumber")}
                placeholder="e.g. POL-1234567"
                maxLength={60}
                className="mt-1.5 h-12"
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="claim-issue">Describe the Issue</Label>
              <Textarea
                id="claim-issue"
                value={data.issue}
                onChange={update("issue")}
                placeholder="Briefly describe what happened, when, and any other details that can help us assist you."
                maxLength={1500}
                rows={5}
                className="mt-1.5"
              />
              {errors.issue && (
                <p className="mt-1 text-xs text-destructive">{errors.issue}</p>
              )}
            </div>
            <div className="sm:col-span-2">
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  "Submitting..."
                ) : (
                  <>
                    Submit Claim Request <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default ClaimPage;
