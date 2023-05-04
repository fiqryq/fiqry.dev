import style from '@/style/page.module.scss';

interface Props {

}

const About: React.FC<Props> = ({ }) => {
    return (
        <section data-cursor="-inverse" className={style.about_section}>
            <p className={style.about}>
                <span data-cursor="-inverse">Hi there! </span>
                I'm Fiqry, an experienced frontend engineer who loves crafting
                visually stunning and interactive UI designs.
            </p>
        </section>
    )
}

export default About