import React from "react";
import { Container } from "../container";
import Image from "next/image";
import { BarChart3, Globe, TrendingUp, Users } from "lucide-react";

export const BenefitsSections = () => {
  const benefits = [
    {
        icon: TrendingUp,
        title: "95% Reduction in Administrative Time",
        desc: `
            Automate grading, report generation, and student 
            management. Free up your staff to focus on teaching.
        `,
        bg: "bg-green-100",
        color: "text-green-600"
    },
    {
        icon: Users,
        title: "Handle 3x More Students",
        desc: `
            Scale your operations without hiring more staff. 
            Our AI handles the increased workload seamlessly.
        `,
        bg: "bg-blue-100",
        color: "text-blue-600"
    },
    {
        icon: BarChart3,
        title: "40% Improvement in Student Performance",
        desc: `
            Data-driven insights and personalized learning 
            paths lead to better academic outcomes.
        `,
        bg: "bg-purple-100",
        color: "text-purple-600"
    },
    {
        icon: Globe,
        title: "Works Across Africa",
        desc: `
            Optimized for African curricula, languages, and 
            infrastructure. Low bandwidth, high impact.
        `,
        bg: "bg-orange-100",
        color: "text-orange-600"
    },
  ];
  return (
    <section id="benefits" className="rounded-t-4xl -translate-y-5 bg-white">
      <Container>
        {/* Top section */}
        <div className="mb-16 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg text-sm">
              Benefits
            </span>
            <h2 className="text-4xl text-gray-900 pt-4 tracking-tight sm:text-4xl">
              Transform Your School <br />
              in 30 Days
            </h2>
          </div>
          <p className="text-gray-600 pt-3 md:text-base md:w-[40%]">
            Join hundreds of schools that have already revolutionized their
            operations with IntelliTest
          </p>
        </div>
        <div className="flex flex-col gap-10 md:items-center md:flex-row">
          {/* Image section */}
          <div className="md:w-[50%]">
            <Image
              src="/benefits.jpg"
              alt="Benefit image"
              width={1000}
              height={800}
              className="w-full h-full object-cover rounded-3xl"
              priority
            />
          </div>
          {/* Benefits */}
          <aside className="md:w-[50%]">  
            <div className="">
              {benefits.map((item, i) => (
                <div key={i} className="flex gap-5 mb-10 md:mb-4 md:items-center">
                  <div className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <item.icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <div>
                    <h2 className="text-xl pb-[2px]">{item.title}</h2>
                    <p className="text-sm text-textGrey md:w-[80%]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
};
