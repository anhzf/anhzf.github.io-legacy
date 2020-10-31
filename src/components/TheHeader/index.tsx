import * as React from 'react';
import NavItems, { navItem } from './navItems';
import C from './classes';

interface TheHeaderProps {
    heroImg: string;
}

interface BadgeProps {
    href?: string;
    [index: string]: string | undefined;
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
            title: 'Contacts',
            target: '#contacts',
        },
        {
            title: 'Blogs',
            target: '',
        },
    ];

    const badges: BadgeProps[] = [
        {
            title: 'Moslem Developer',
        },
        {
            title: 'Quasar',
            href: 'https://quasar.dev/',
        },
        {
            title: 'TailwindCSS',
            href: 'https://tailwindcss.com/',
        },
        {
            title: 'Vue',
            href: 'https://vuejs.org/',
        },
        {
            title: 'Laravel',
            href: 'https://laravel.com/',
        },
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
                            <Badge href={badge.href} key={`badge_${i}`}>{badge.title}</Badge>
                        ))}
                    </div>
                </article>
            </section>
        </header>
    )
}

export function Badge({
    children, href, ...attrs
}: BadgeProps) {
    const className = C.badge;
    const withLink = href && ({
        href, target: '_blank',
    });

    return React.createElement(
        'a',
        { className, ...withLink, ...attrs},
        children
    );
}