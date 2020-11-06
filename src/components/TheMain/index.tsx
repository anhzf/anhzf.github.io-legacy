import React from 'react';
import HomeSectionCard from './homeSectionCard';
import CardListItem from './CardList';
import TechStackImg from './TechStackImg';
import Button from '@/components/Button';
import * as Icon from '@/components/icons';
import { StatsCard, TopLangsCard } from '@/components/GithubReadmeStats';
import C from './classes';
import { BtnModifier } from '../Button/classes';
import { joinClass } from '@/utils';

export default function TheMain() {
    const featuredProjects = [
        {
            title: 'Lakukampus',
            demoLink: 'https://lakukampus.id'
        },
        {
            title: 'Code Highlighter',
            demoLink: 'https://anh-code-highlighter.web.app/',
            codeLink: 'https://github.com/anhzf/Code-Highlighter'
        },
        {
            title: 'Semar Apps BEM UNS',
            demoLink: 'http://apps.bemuns.com/',
        },
        {
            title: 'Laravel RestAPI',
            demoLink: 'https://packagist.org/packages/anhzf/laravel-rest-api',
        },
    ].map(v => ({ ...v, target: '_blank' }))

    return (
        <main className={C.main}>
            <section id="projects" className={C.section}>
                <HomeSectionCard
                    title="Featured Projects"
                    className="lg:col-span-4 col-span-6"
                    actions={(<>
                        <Button type={BtnModifier.medium} action="./">See other projects</Button>
                        <Button type={BtnModifier.strong} action="https://github.com/anhzf" externalLink>Visit Github Profile</Button>
                    </>)}
                >
                    <CardListItem items={featuredProjects} />
                </HomeSectionCard>
            </section>

            <section className={C.techStack}>
                <h1 className={joinClass(C.homeSectionCard__title, C.techStack__title)}>Most Web Technologies Used</h1>
                <div className={C.techStack__list} draggable="true">
                    <TechStackImg
                        src={require('@/assets/img/logo/quasar-logo.svg')}
                        className={C.techStack__item}
                        href="https://quasar.dev"
                        target="_blank"
                    />
                    <TechStackImg
                        src={require('@/assets/img/logo/vuetify-seeklogo.com.svg')}
                        className={C.techStack__item}
                        href="https://vuetifyjs.com/en/"
                        target="_blank"
                    />
                    <TechStackImg
                        src={require('@/assets/img/logo/tailwindcss.svg')}
                        className={C.techStack__item}
                        href="https://tailwindcss.com/"
                        target="_blank"
                    />
                    <TechStackImg
                        src={require('@/assets/img/logo/laravel-logo.png')}
                        className={C.techStack__item}
                        href="https://laravel.com/"
                        target="_blank"
                    />
                    <TechStackImg
                        src={require('@/assets/img/logo/vuejs-seeklogo.com.svg')}
                        className={C.techStack__item}
                        href="https://vuejs.org/"
                        target="_blank"
                    />
                    <TechStackImg
                        src={require('@/assets/img/logo/react-seeklogo.com.svg')}
                        className={C.techStack__item}
                        href="https://reactjs.org/"
                        target="_blank"
                    />
                    {/* <TechStackImg src={require('@/assets/img/logo/express-js-seeklogo.com.svg')} /> */}
                </div>
            </section>

            <section className={C.section}>
                <HomeSectionCard
                    title="Developer Activities"
                    titleAlign="text-center"
                    titleSize="text-3xl"
                    className="col-span-6 xl:col-start-2 col-start-1"
                >
                    <div className="md:pt-8 md:pb-16 flex flex-wrap justify-evenly items-start">
                        <StatsCard
                            username="anhzf"
                            count_private show_icons hide_border hide_title
                        />
                        <TopLangsCard
                            username="anhzf"
                            layout="compact"
                            hide_border
                            langs_count={6}
                        />
                        {/* <WakaTimeCard
                            username="Anhzf"
                            hide_border
                        /> */}
                    </div>
                </HomeSectionCard>
            </section>

            <section className={joinClass(C.techStack, 'xl:col-start-2 col-start-1 xl:col-span-10 col-span-12')}>
                <h1 className={joinClass(C.homeSectionCard__title, 'text-3xl')}>Organizations</h1>
                <div className={C.techStack__list} draggable="true">
                    <TechStackImg
                        src={require('@/assets/img/logo/bbid.png')}
                        className={C.techStack__item}
                        href="http://bersamabisa.id/"
                        target="_blank"
                    />
                    <TechStackImg
                        src={require('@/assets/img/logo/bem_uns.png')}
                        className={C.techStack__item}
                        href="http://bemuns.com/"
                        target="_blank"
                    />
                    <TechStackImg
                        src={require('@/assets/img/logo/LOGO_ALIF.png')}
                        className={C.techStack__item}
                        href="https://www.instagram.com/skipabelan/"
                        target="_blank"
                    />
                </div>
            </section>

            <section id="contacts" className={C.section}>
                <HomeSectionCard
                    title="Contact Me"
                    className="xl:col-span-4 col-span-6 xl:col-start-2 col-start-1 rounded-b-none"
                >
                    <div className={C.socialMedia__list}>
                        <a className={C.socialMedia} href="https://github.com/anhzf" target="_blank" rel="noopener noreferrer">
                            <Icon.Github className={C.socialMedia__icon} />
                            <span>anhzf</span>
                            <Icon.ExternalLink className={C.socialMedia__openInNew} />
                        </a>
                        <a className={C.socialMedia} href="https://www.instagram.com/alwan.nuha" target="_blank" rel="noopener noreferrer">
                            <Icon.Instagram className={C.socialMedia__icon} />
                            <span>@alwan.nuha</span>
                            <Icon.ExternalLink className={C.socialMedia__openInNew} />
                        </a>
                        <a className={C.socialMedia} href="mailto:alwan.nuha7@gmail.com" target="_blank" rel="noopener noreferrer">
                            <Icon.Mail className={C.socialMedia__icon} />
                            <span>alwan.nuha7@gmail.com</span>
                            <Icon.ExternalLink className={C.socialMedia__openInNew} />
                        </a>
                        <a className={C.socialMedia} href="https://facebook.com/100002806994728" target="_blank" rel="noopener noreferrer">
                            <Icon.Facebook className={C.socialMedia__icon} />
                            <span>Alwan Nuha</span>
                            <Icon.ExternalLink className={C.socialMedia__openInNew} />
                        </a>
                        <a className={joinClass(C.socialMedia, 'text-xs')} href="https://wa.me/6285156348055" target="_blank" rel="noopener noreferrer">
                            <Icon.Whatsapp className={C.socialMedia__icon} />
                            <span>+6285156348055</span>
                            <Icon.ExternalLink className={C.socialMedia__openInNew} />
                        </a>
                    </div>
                </HomeSectionCard>
            </section>
        </main>
    )
}
