import React from 'react'

export default function TheHeader() {
    return (
        <header className="header">
            <nav className="navbar on-header">
                <a href="./#" className="brand">Anhzf</a>

                <ul className="navbar__container">
                    <a href="#projects" className="navbar__item">
                        <li>Projects</li>
                    </a>
                    <a href="#education" className="navbar__item">
                        <li>Education</li>
                    </a>
                    <a href="#contacts" className="navbar__item">
                        <li>Contacts</li>
                    </a>
                    <a href="#teams-up" className="navbar__item">
                        <li>Teams Up</li>
                    </a>
                </ul>
            </nav>

            <section className="header-banner__container grid">
                <img src={require('../assets/img/my-removebg-preview.png')} className="header__photos grid:col-start-2 grid:col-span-3" alt="" />
                {/* <img src="./img/my-removebg-preview.png" className="header__photos grid:col-start-2 grid:col-span-3" alt="" /> */}
                <article className="header-banner__contents grid:col-span-7">
                    <h1 className="header-banner__contents__title1">السّلام عليكم, my name...</h1>
                    <h1 className="header-banner__contents__title2">Alwan Nuha Zaky Fadhila</h1>
                    <div className="header-banner__contents__subtitle">
                        <span className="badge">Fullstack Web Developer</span>
                        <span className="badge">Moslem Developer</span>
                        <span className="badge">✔ Follow Material Design Pattern</span>
                    </div>
                </article>
            </section>
        </header>
    )
}