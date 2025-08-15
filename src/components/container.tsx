import React from "react"

export const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`${className} container px-4 py-16 md:px-10 md:py-24`}>{children}</div>
  )
}
