import { ReactNode } from "react";
import Footer from "./footer";
import Navigation from "./navigation";
import React from "react";
import SmoothScroll from "./smooth-scroll";
export default function PageWrapper({ children }: { children: ReactNode }) {
    return (
        <SmoothScroll>
            <div className='fixed top-0 left-0 px-5 md:px-10 lg:px-20 w-full z-30 bg-background'>
                <Navigation />
            </div>
            {children}
            <Footer />
        </SmoothScroll>
    )
}
