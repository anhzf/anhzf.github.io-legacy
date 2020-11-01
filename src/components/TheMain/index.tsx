import React from 'react';
import HomeSectionCard from './homeSectionCard';
import CardListItem from './CardList';
import TechStackImg from './TechStackImg';
import Button from '@/components/Button';
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
            title: 'Laravel RestAPI',
            demoLink: 'https://packagist.org/packages/anhzf/laravel-rest-api',
        },
    ].map(v => ({ ...v, target: '_blank' }))

    return (
        <main className={C.main}>
            <section id="projects" className={C.section}>
                <HomeSectionCard
                    title="Featured Projects"
                    colSpan={4}
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
                    colSpan={6}
                    colStart={2}
                >
                    <div className="pt-8 pb-16 flex flex-wrap justify-evenly items-start">
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

            <section className={joinClass(C.techStack, 'col-start-2', 'col-span-10')}>
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

            <section className={C.section}>
                <HomeSectionCard
                    title="Contact Me"
                    colSpan={6}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta autem deleniti consequatur
                    sunt perspiciatis, sapiente minima a ad necessitatibus officiis voluptate nesciunt nemo aperiam
                    dolorem fuga facere reiciendis doloribus excepturi libero eaque itaque hic natus. Fuga itaque
                    adipisci eius rem saepe vero distinctio quod! Quasi molestias hic dolorem ipsum iste enim laboriosam
                    necessitatibus laborum omnis velit. Eveniet et, neque tempora dolorem incidunt porro eos? Minus
                    voluptas odio vitae incidunt provident in minima, totam ipsa tempora a consectetur, iusto sed
                    asperiores veritatis fuga consequatur modi nam ratione eveniet cum! Quam pariatur, neque autem enim
                    in sapiente officia reiciendis aperiam voluptas!
                </HomeSectionCard>
            </section>
        </main>
    )
}
