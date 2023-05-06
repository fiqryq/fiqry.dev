
import style from '@/style/page.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface Props {

}

const Hero: React.FC<Props> = ({ }) => {
    const preloadReff = useRef(null)
    const titlePreloadReff = useRef(null)
    const titleReff = useRef(null)
    const descriptionReff = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline();
        gsap.to(titlePreloadReff.current, {
            y: -100,
            duration: 0.6,
            ease: "Power4.easeIn",
        })
        gsap.to(preloadReff.current, {
            delay: 1,
            scaleY: 0,
            duration: 0.5,
            ease: 'Power3.out',
        });
        timeline.from([titleReff.current, descriptionReff.current], {
            delay: 1,
            y: 300,
            duration: 0.6,
            ease: "Power4.out",
            stagger: {
                amount: .1
            }
        })
    }, [])

    return (
        <section className={style.hero}>
            <div className={style.preload} ref={preloadReff} data-cursor="-inverse">
                <h1 className={style.loading_text}>
                    <span ref={titlePreloadReff}>Loading</span>
                </h1>
            </div>
            <nav className={style.nav_container}>
                <h1 className={style.logo}>F/.</h1>
                <ul className={style.nav_menu}>
                    <li data-cursor="-inverse">
                        <a href="#">ABOUT</a>
                    </li>
                    <li data-cursor="-inverse">
                        <a href="#">WORK</a>
                    </li>
                </ul>
            </nav>
            <h1 className={style.hero_title}>
                <span ref={titleReff}>FIQRY CHOERUDIN</span>
            </h1>
            <p className={style.hero_subtitle}>
                <span ref={descriptionReff}>Pixel wizard and boundary-pushing coder, weaving digital dreams into reality.</span>
            </p>
            <div className={style.mouse_container}>
                <svg
                    data-cursor-text="scroll down!"
                    version="1.1"
                    width="50px"
                    height="50px"
                    viewBox="30.5 -9.5 554 813"
                    enableBackground="new 30.5 -9.5 554 813"
                    xmlSpace="preserve">
                    <path
                        d="M328,0h-44C271.68,0,42,5.28,42,242v308c0,9.9,3.96,242,242,242h44c13.86,0,242-6.16,242-242V242C570,232.1,566.04,0,328,0z
              M526,550c0,191.62-177.76,198-198,198h-44C92.38,748,86,570.24,86,550V242C86,50.82,263.54,44,284,44h44
              c191.62,0,198,177.76,198,198V550z"
                    />
                    <circle cx="306" cy="231" r="45" />
                </svg>
                <p className={style.mouse_scroll_title}>
                    Don't stop now! The bottom's in sight.
                </p>
            </div>
        </section>
    )
}

export default Hero