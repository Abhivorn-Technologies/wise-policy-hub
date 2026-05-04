import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { CONTACT, mailLink, telLink, whatsappLink } from "@/lib/contact";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().trim().regex(/^[+\d\s()-]{7,20}$/, "Enter a valid phone number"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof schema>;

const Contact = () => {
  const [data, setData] = useState<FormData>({ name: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
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
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
      setData({ name: "", phone: "", message: "" });
    }, 900);
  };

  const update = (key: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [key]: e.target.value }));
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
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={data.name} onChange={update("name")} placeholder="Your name" maxLength={100} className="mt-1.5 h-12" />
              {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" value={data.phone} onChange={update("phone")} placeholder="+91 98765 43210" maxLength={20} className="mt-1.5 h-12" />
              {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" value={data.message} onChange={update("message")} placeholder="Tell us how we can help..." maxLength={1000} rows={5} className="mt-1.5" />
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
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-elegant transition-smooth">
              <div className="w-12 h-12 rounded-xl bg-success flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-success-foreground"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">WhatsApp</div>
                <div className="font-semibold">Chat with us instantly</div>
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

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-3xl overflow-hidden border border-border/50 shadow-elegant aspect-[16/6] bg-card"
        >
          <iframe
            title="Sree Insurance Services location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=77.58%2C12.96%2C77.62%2C12.99&layer=mapnik"
            className="w-full h-full"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
