import { Container } from "../container"

export const FeatureSection = () => {

  return (
    <section id="features" className="w-full bg-gradient-to-b from-white via-purple-50/20 to-white">
      <Container className="container px-4 py-16 md:px-10 md:py-24">
        <div className="flex md:items-center  md:justify-between">
          <h2 className="text-3xl tracking-tight md:text-5xl md:w-[50%]">Everything you need to run a modern school</h2>
          <p className="mt-3 text-textGrey md:text-base md:w-[40%] ">
            From admissions to graduation, IntelliTest unifies your daily workflows so your team can focus on learning
            outcomes.
          </p>
        </div>
        
      </Container>
    </section>
  )
}
