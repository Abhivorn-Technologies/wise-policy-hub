import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { CONTACT, mailLink, telLink } from "@/lib/contact";

const SERVICES = [
  "Health Insurance",
  "Life Insurance",
  "Car Insurance",
  "Bike Insurance",
  "Commercial Vehicle Insurance",
  "Home Insurance",
  "Travel Insurance",
  "Business Insurance",
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
  policyType: z.string().min(1, "Please select an insurance type"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [data, setData] = useState<FormData>({ name: "", phone: "", email: "", policyType: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as keyof FormData] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          phone: data.phone,
          email: data.email,
          insurance_type: data.policyType,
          message: data.message,
          reply_to: data.email,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setData({ name: "", phone: "", email: "", policyType: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast({ 
        title: "Submission failed", 
        description: error?.text || "Something went wrong. Please check your credentials.",
        variant: "destructive" 
      });
    } finally {
      setLoading(false);
    }
  };

  const update = (key: keyof FormData) => (val: string) => {
    setData((d) => ({ ...d, [key]: val }));
  };

  return (
    <section id="contact" className="py-20 lg:py-28 gradient-soft relative overflow-hidden">
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</span>
          <h2 className="mt-3 text-3xl lg:text-5xl font-bold">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Have questions? Need a quote? We're here to help — reach out today.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="lg:col-span-3 p-8 lg:p-10 rounded-3xl bg-card border border-border/50 shadow-elegant space-y-5"
          >
            <h3 className="text-2xl font-semibold">Send us a message</h3>
            <div className="grid sm:grid-cols-3 gap-5">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={data.name} onChange={(e) => update("name")(e.target.value)} placeholder="Your name" maxLength={100} className="mt-1.5 h-12" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={data.phone} onChange={(e) => update("phone")(e.target.value)} placeholder={CONTACT.phoneDisplay} maxLength={20} className="mt-1.5 h-12" />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={data.email} onChange={(e) => update("email")(e.target.value)} placeholder="you@example.com" maxLength={200} className="mt-1.5 h-12" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="policy">Interest In</Label>
              <div className="mt-1.5">
                <Select value={data.policyType} onValueChange={update("policyType")}>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Select Insurance Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {SERVICES.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {errors.policyType && <p className="mt-1 text-xs text-destructive">{errors.policyType}</p>}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={data.message} onChange={(e) => update("message")(e.target.value)} placeholder="Tell us how we can help..." maxLength={1000} rows={5} className="mt-1.5" />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full">
              {loading ? "Sending..." : (<>Send Message <Send className="w-4 h-4" /></>)}
            </Button>
          </motion.form>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <a href={telLink} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Call us</div>
                <div className="font-semibold">{CONTACT.phoneDisplay}</div>
              </div>
            </a>
            <a href={mailLink} className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Email</div>
                <div className="font-semibold">{CONTACT.email}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Visit us</div>
                <div className="font-semibold text-sm">{CONTACT.address}</div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

