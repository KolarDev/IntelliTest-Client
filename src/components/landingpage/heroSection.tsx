"use client"
import { Sparkles, BarChart3, GraduationCap } from "lucide-react"
import { Button } from "../button"

export const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-purple-100/60 via-white to-indigo-100/50">
      <div className="container grid items-center gap-8 px-5 py-16 md:grid-cols-[60%_40%] md:px-10 md:gap-12 md:py-24">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs shadow-sm ">
            <Sparkles className="size-3 text-[#8532fa]" />
            <span>AI-powered CBT & Student Management for Schools</span>
          </div>
          <h1 className="text-4xl tracking-normal md:text-5xl">
            Transforming schools into automated academic hubs.  
          </h1>
          <p className="md:w-[70%]">
            IntelliTest streamlines computer-based testing and grading giving owners real-time 
            visibility on student progress and school performance.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
                buttonText="Start free trial"
                className="bg-gradient-to-r text-white from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <Stat label="Tests delivered" value="5M+" icon={<GraduationCap className="size-4 text-[#8532fa]" />} />
            <Stat label="Uptime" value="99.9%" icon={<BarChart3 className="size-4 text-[#8532fa]" />} />
            <Stat label="Schools" value="400+" icon={<GraduationCap className="size-4 text-[#8532fa]" />} />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({
  label = "Label",
  value = "—",
  icon
}: {
  label?: string
  value?: string
  icon?: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg  bg-white p-3 shadow-sm">
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-50">{icon}</div>
      <div>
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
    </div>
  )
}
