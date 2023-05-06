"use client"
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';
import ScrollTrigger from 'gsap/ScrollTrigger';
import MouseFollower from "mouse-follower";
import React from 'react';

interface Props extends React.HTMLAttributes<HTMLBodyElement> {
    children: React.ReactNode
}

MouseFollower.registerGSAP(gsap);

const MainWrapper = React.forwardRef<HTMLBodyElement, Props>(
    ({ children, ...props }, ref) => {
        const scrollRef = React.useRef<Lenis>();

        React.useEffect(() => {
            new MouseFollower({
                speed: 0.4,
            });
        })

        React.useEffect(() => {
            scrollRef.current = new Lenis({
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                orientation: 'vertical',
                gestureOrientation: 'vertical',
                smoothWheel: true,
                smoothTouch: false,
                touchMultiplier: 2,
                infinite: false,
            });

            scrollRef.current.on('scroll', ScrollTrigger.update);

            const updateFunc: gsap.TickerCallback = (time) => {
                scrollRef.current?.raf(time * 1000);
            };

            gsap.ticker.add(updateFunc, false, true);

            return () => {
                gsap.ticker.remove(updateFunc);
                scrollRef.current?.destroy();
            };
        }, []);
        return (
            <body
                ref={ref}
                {...props}>
                {children}
            </body>
        )
    })

export default MainWrapper