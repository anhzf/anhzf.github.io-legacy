import * as React from 'react';
import NavItems, { navItem } from './navItems';
import './style.scss';
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
        <header className={C.header} /* className="header" */>
            <nav className={C.navbar} /* className="navbar on-header" */>
                <a href="./#" className={C.brand} /* className="brand" */>Anhzf</a>

                <NavItems items={navs} />
            </nav>

            <section className={C.headerBanner} /* className="header-banner__container grid" */>
                <img src={heroImg} className={C.headerBanner__photo} style={{filter: 'hue-rotate(15deg) brightness(1.1)'}} /* className="header__photos grid:col-start-2 grid:col-span-3" */ alt="" />
                <article className={C.headerBanner__content} /* className="header-banner__contents grid:col-span-7" */>
                    <h2 className={C.headerBanner__content__title1} /* className="header-banner__contents__title1" */>السّلام عليكم, my name...</h2>
                    <h1 className={C.headerBanner__content__title2} /* className="header-banner__contents__title2" */>Alwan Nuha Zaky Fadhila</h1>
                    <div className={C.headerBanner__content__subtitle} /* className="header-banner__contents__subtitle" */>
                        {badges.map((badge, i) => (
                            <span className={C.badge} /* className="badge" */ key={`badge_${i}`}>{badge}</span>
                        ))}
                    </div>
                </article>
            </section>
        </header>
    )
}
