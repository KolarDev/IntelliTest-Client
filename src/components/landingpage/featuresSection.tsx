import { Container } from "../container";
import {
  Brain,
  ClipboardList,
  BarChart3,
} from "lucide-react";

export const FeatureSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Test Builder",
      desc: "Generate standard-style questions, randomize items, and auto-grade instantly. Build item banks in minutes.",
    },
    {
      icon: ClipboardList,
      title: "Exams & CA",
      desc: "Create CBT exams and continuous assessment with time limits, pools, and secure delivery.",
    },
    {
      icon: BarChart3,
      title: "Progress Dashboards",
      desc: "Track performance by class, subject, term, and campus. Identify gaps with simple, actionable insights.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full pb-10 bg-gradient-to-tr from-purple-100/60 via-purple-50/10 to-indigo-100/50"
    >
      <Container className="container px-4 py-16 md:px-10 md:py-24">
        <div className="flex flex-col md:flex-row md:items-center  md:justify-between">
          <h2 className="text-3xl tracking-tight md:text-5xl md:w-[50%]">
            Everything you need to run a modern school
          </h2>
          <p className="mt-3 text-textGrey md:text-base md:w-[40%] ">
            From admissions to graduation, IntelliTest unifies your daily
            workflows so your team can focus on learning outcomes.
          </p>
        </div>
        <div className="mt-10 grid gap-6 grid-cols-1 md:grid-cols-3">
          {features.map((feature, i) => (
            <div className="bg-white border-2 rounded-2xl p-4 border-textGrey/10 flex flex-col gap-3 justify-center md:h-[300px]" key={i}>
              <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-md bg-purple-50">
                <feature.icon className="size-5 text-[#8532fa]" />
              </div>
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="text-sm text-muted-foreground text-textGrey">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
