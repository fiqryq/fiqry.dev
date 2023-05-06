
"use client"
import style from '@/style/page.module.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';
import merge from 'classnames';

interface Props {

}

const About: React.FC<Props> = ({ }) => {
    const containerreff = useRef(null)
    const greetingsreff = useRef(null)
    const [greetings, setGreetings] = useState<boolean>(false)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        let proxy = { skew: 0 },
            skewSetter = gsap.quickSetter(containerreff.current, 'skewY', 'deg'),
            clamp = gsap.utils.clamp(-15, 15);

        ScrollTrigger.create({
            onUpdate: (self) => {
                let skew = clamp(self.getVelocity() / -300);
                if (Math.abs(skew) > Math.abs(proxy.skew)) {
                    proxy.skew = skew;
                    gsap.to(proxy, {
                        skew: 0,
                        duration: 0.3,
                        ease: 'power3.easeIn',
                        overwrite: true,
                        onUpdate: () => skewSetter(proxy.skew),
                    });
                }
            },
        });

        gsap.set(containerreff.current, {
            transformOrigin: 'right center',
            force3D: true,
        });
    }, [containerreff])

    useEffect(() => {
        ScrollTrigger.create({
            trigger: greetingsreff.current,
            markers: true,
            start: 'top center',
            end: 'bottom',
            onEnter: () => setGreetings(true),
        })
    }, [greetingsreff])

    return (
        <section className={style.about_section} data-cursor="-inverse" ref={containerreff}>
            <span className={merge(style.greetings, greetings && style.greetings_mark_active)} ref={greetingsreff}> Greetings! </span>
            <p className={style.about}>
                My name is Fiqry and I am a seasoned frontend engineer with a passion for creating visually stunning and engaging user interfaces.             </p>
        </section>
    )
}

export default About