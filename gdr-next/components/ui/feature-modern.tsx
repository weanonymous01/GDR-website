"use client";

import React from "react";
import Balancer from "react-wrap-balancer";
import { MapPin, HeartPulse, ShieldCheck } from "lucide-react";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type LayoutProps = { children: React.ReactNode; className?: string };
type MainProps = { children: React.ReactNode; className?: string; id?: string };
type SectionProps = { children: React.ReactNode; className?: string; id?: string };
type ContainerProps = { children: React.ReactNode; className?: string; id?: string };
type ArticleProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
  dangerouslySetInnerHTML?: { __html: string };
};
type BoxProps = {
  children: React.ReactNode;
  className?: string;
  direction?:
    | "row"
    | "col"
    | { sm?: "row" | "col"; md?: "row" | "col"; lg?: "row" | "col"; xl?: "row" | "col"; "2xl"?: "row" | "col" };
  wrap?:
    | boolean
    | { sm?: boolean; md?: boolean; lg?: boolean; xl?: boolean; "2xl"?: boolean };
  gap?: number | { sm?: number; md?: number; lg?: number; xl?: number; "2xl"?: number };
  cols?: number | { sm?: number; md?: number; lg?: number; xl?: number; "2xl"?: number };
  rows?: number | { sm?: number; md?: number; lg?: number; xl?: number; "2xl"?: number };
};

export const Layout = ({ children, className }: LayoutProps) => (
  <html lang="en" suppressHydrationWarning className={cn("scroll-smooth antialiased focus:scroll-auto", className)}>
    {children}
  </html>
);

export const Main = ({ children, className, id }: MainProps) => (
  <main
    className={cn(
      "max-w-none prose-p:m-0",
      "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg",
      "prose-headings:font-normal",
      "prose-strong:font-semibold",
      "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
      "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
      "prose-blockquote:not-italic",
      "prose-pre:border prose-pre:bg-muted/25 prose-pre:text-foreground"
    )}
    id={id}
  >
    {children}
  </main>
);

export const Section = ({ children, className, id }: SectionProps) => (
  <section className={cn("py-8 md:py-12", className)} id={id}>
    {children}
  </section>
);

export const Container = ({ children, className, id }: ContainerProps) => (
  <div className={cn("mx-auto max-w-5xl", "p-6 sm:p-8", className)} id={id}>
    {children}
  </div>
);

export const Article = ({ children, className, id, dangerouslySetInnerHTML }: ArticleProps) => (
  <article
    dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    className={cn(
      "prose prose-neutral prose:font-sans dark:prose-invert xl:prose-lg",
      "prose-headings:font-normal",
      "prose-p:mb-0",
      "prose-strong:font-semibold",
      "prose-a:underline prose-a:decoration-primary/50 prose-a:underline-offset-2 prose-a:text-foreground/75 prose-a:transition-all",
      "hover:prose-a:decoration-primary hover:prose-a:text-foreground",
      "prose-blockquote:not-italic",
      "prose-pre:border prose-pre:bg-muted/25"
    )}
    id={id}
  >
    {children}
  </article>
);

export const Box = ({ children, className, direction = "row", wrap = false, gap = 0, cols, rows }: BoxProps) => {
  const directionClasses = { row: "flex-row", col: "flex-col" } as const;
  const wrapClasses = wrap ? "flex-wrap" : "flex-nowrap";
  const gapClasses = { 0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 5: "gap-5", 6: "gap-6", 8: "gap-8", 10: "gap-10", 12: "gap-12" };
  const colsClasses = { 1: "grid-cols-1", 2: "grid-cols-2", 3: "grid-cols-3", 4: "grid-cols-4", 5: "grid-cols-5", 6: "grid-cols-6", 7: "grid-cols-7", 8: "grid-cols-8", 9: "grid-cols-9", 10: "grid-cols-10", 11: "grid-cols-11", 12: "grid-cols-12" };

  const getResponsive = (prop: any, map: Record<string | number, string>) => {
    if (typeof prop === "object") {
      return Object.entries(prop)
        .map(([bp, val]) => `${bp === "sm" ? "" : `${bp}:`}${map[val as keyof typeof map] || ""}`)
        .join(" ");
    }
    return map[prop as keyof typeof map] || "";
  };

  const stack = cn(
    cols || rows ? "grid" : "flex",
    getResponsive(direction, directionClasses),
    typeof wrap === "boolean" ? wrapClasses : getResponsive(wrap, { true: "flex-wrap", false: "flex-nowrap" } as any),
    getResponsive(gap, gapClasses),
    cols && getResponsive(cols, colsClasses),
    rows && getResponsive(rows, colsClasses),
    className
  );

  return <div className={stack}>{children}</div>;
};

/* =========================
          Feature
   ========================= */

type FeatureText = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Modern Facilities",
    description:
      "Offering modern healthcare, emergency services, and ICU support with experienced doctors and trained staff.",
  },
  {
    icon: <HeartPulse className="h-6 w-6 text-primary" />,
    title: "Our Medical Mission",
    description:
      "Delivering timely treatment, compassionate care, and continuous support whenever needed for all.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Patient Safety & Quality",
    description:
      "We focus on patient safety, comfort, and high quality healthcare to ensure everyone receives the right care.",
  },
];

const Feature = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl font-semibold tracking-tight text-white">
            <Balancer>
              About GDR Hospital
            </Balancer>
          </h3>
          <h4 className="text-xl font-light text-slate-400">
            <Balancer>
              A trusted healthcare center located in Sitapur.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ icon, title, description }, index) => (
              <div className="flex flex-col gap-4" key={index}>
                <h4 className="text-xl font-semibold text-white">{title}</h4>
                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
