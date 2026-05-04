import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
}

const PageHeader = ({ eyebrow, title, highlight, description }: PageHeaderProps) => (
  <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 gradient-soft overflow-hidden">
    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl" aria-hidden />
    <div className="absolute top-40 -left-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl" aria-hidden />
    <div className="container mx-auto relative text-center max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-3 text-4xl lg:text-5xl font-bold leading-tight">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>
        {description && (
          <p className="mt-5 text-lg text-muted-foreground">{description}</p>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHeader;
