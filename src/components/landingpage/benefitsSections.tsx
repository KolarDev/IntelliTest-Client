import React from "react";
import { Container } from "../container";

export const BenefitsSections = () => {
  return (
    <section id="benefits" className="rounded-t-4xl -translate-y-5 bg-white">
      <Container>
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
      </Container>
    </section>
  );
};
