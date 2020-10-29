import * as React from 'react';
import NavItems, { navItem } from './navItems';
import C from './classes';

interface TheHeaderProps {
    heroImg: string;
}

export default function TheHeader({
    heroImg
}: TheHeaderProps): JSX.Element {
    const navs: navItem[] = [
        {
            title: 'Projects',
            target: '#projects',
        },
        {
            title: 'Education',
            target: '#education',
        },
        {
            title: 'Contacts',
            target: '#contacts',
        },
        {
            title: 'Teams Up',
            target: '#teams-up',
        },
    ];

    const badges = [
        'Fullstack Web Developer',
        'Moslem Developer',
        '✔ Follow Material Design Pattern',
    ];

    return (
        <header className={C.header}>
            <nav className={C.navbar}>
                <a href="./#" className={C.brand}>Anhzf</a>

                <NavItems items={navs} />
            </nav>

            <section className={C.headerBanner}>
                <img src={heroImg} className={C.headerBanner__photo} style={{filter: 'hue-rotate(15deg) brightness(1.1)'}} alt="" />
                <article className={C.headerBanner__content}>
                    <h2 className={C.headerBanner__content__title1}>السّلام عليكم, my name...</h2>
                    <h1 className={C.headerBanner__content__title2}>Alwan Nuha Zaky Fadhila</h1>
                    <div className={C.headerBanner__content__subtitle}>
                        {badges.map((badge, i) => (
                            <span className={C.badge} key={`badge_${i}`}>{badge}</span>
                        ))}
                    </div>
                </article>
            </section>
        </header>
    )
}
