import { motion } from "framer-motion";
import { ClipboardList, FileCheck2, HeadphonesIcon, Mail, Send, ShieldCheck } from "lucide-react";
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

import emailjs from "@emailjs/browser";

const POLICY_TYPES = [
  "Health Insurance",
  "Life Insurance",
  "Car Insurance",
  "Bike Insurance",
  "Commercial Vehicle Insurance",
  "Home Insurance",
  "Travel Insurance",
  "Business Insurance",
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
  name: z.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain alphabets and spaces"),
  phone: z.string()
    .trim()
    .regex(/^(\+91\s)?\d{10}$/, "Enter a 10-digit number or '+91 ' followed by 10 digits"),
  email: z.string().trim().email("Enter a valid email address"),
  policyType: z.string().min(1, "Select a policy type"),
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
    issue: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);

  const update =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [key]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
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

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CLAIMS_TEMPLATE_ID || import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          insurance_type: data.policyType, // Matches existing template key
          message: data.issue,          // Maps issue to the {{message}} key
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Claim request received",
        description: "Our claims team will contact you within 24 hours.",
      });
      setData({
        name: "",
        phone: "",
        email: "",
        policyType: "",
        issue: "",
      });
    } catch (error: any) {
      console.error("EmailJS Claims Error:", error);
      toast({
        title: "Submission failed",
        description: error?.text || "Something went wrong. Please try again or call us.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
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

      {/* Claim Help Section */}
      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-12 gap-10 xl:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="lg:col-span-7 xl:col-span-8 space-y-8"
            >
              <div className="max-w-4xl">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide mb-5">
                  Direct Support
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-extrabold leading-tight text-foreground whitespace-normal lg:whitespace-nowrap">
                  Looking For <span className="gradient-text">Fast Claim Support?</span>
                </h2>
                <p className="mt-6 text-lg xl:text-xl text-muted-foreground leading-relaxed max-w-3xl">
                  We offer simple and reliable claim support. No matter where your policy was purchased, our experts are here to navigate the complexity for you.
                </p>
              </div>

              <div className="relative group rounded-[2.5rem] overflow-hidden shadow-elegant border border-border/50">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200&h=600" 
                  alt="Claim Documentation" 
                  className="w-full h-[300px] lg:h-[350px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-8 left-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white">
                  <p className="text-sm font-bold uppercase tracking-widest">Expert documentation assistance</p>
                </div>
              </div>
            </motion.div>

            {/* Right Cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              className="lg:col-span-5 xl:col-span-4 space-y-6 lg:mt-10"
            >
              <motion.a 
                href="tel:+919876543210"
                whileHover={{ y: -5 }}
                className="group relative block p-8 rounded-[2rem] bg-card border border-border/50 shadow-elegant hover:shadow-glow hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <div className="relative flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-smooth">
                    <HeadphonesIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Call Us</h4>
                    <p className="text-[13px] sm:text-base font-bold group-hover:text-primary transition-colors">+91 98765 43210</p>
                  </div>
                </div>
              </motion.a>

              <motion.a 
                href="mailto:claims@sreeinsurance.com"
                whileHover={{ y: -5 }}
                className="group relative block p-8 rounded-[2rem] bg-card border border-border/50 shadow-elegant hover:shadow-glow hover:border-primary/40 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <div className="relative flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-smooth border border-primary/10">
                    <Mail className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Email Support</h4>
                    <p className="text-[13px] sm:text-base font-bold group-hover:text-primary transition-colors whitespace-nowrap">claims@sreeinsurance.com</p>
                  </div>
                </div>
              </motion.a>

              <div className="p-8 rounded-[2rem] bg-primary/5 border border-primary/10 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground italic leading-relaxed text-center">
                  "Our dedicated claims manager will be assigned to your case within 24 hours of your request."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
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
                viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
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
            viewport={{ once: false, amount: 0.2 }}
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
