import * as React from 'react';
import NavItems, { navItem } from './navItems';

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
        <header className="header">
            <nav className="navbar on-header">
                <a href="./#" className="brand">Anhzf</a>

                <NavItems items={navs} />
            </nav>

            <section className="header-banner__container grid">
                <img src={heroImg} className="header__photos grid:col-start-2 grid:col-span-3" alt="" />
                <article className="header-banner__contents grid:col-span-7">
                    <h1 className="header-banner__contents__title1">السّلام عليكم, my name...</h1>
                    <h1 className="header-banner__contents__title2">Alwan Nuha Zaky Fadhila</h1>
                    <div className="header-banner__contents__subtitle">
                        {badges.map((badge, i) => (
                            <span className="badge" key={`badge_${i}`}>{badge}</span>
                        ))}
                    </div>
                </article>
            </section>
        </header>
    )
}
