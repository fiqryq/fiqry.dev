import React from "react"

interface Props {
    children: React.ReactNode
}

const Component = React.forwardRef<any, Props>(
    ({ children, ...props }, ref) => {
        return (
            <section
                ref={ref}
                {...props}
            >
                {children}
            </section>
        )
    })

export { Component }