import React from 'react';
import HomeSectionCard from './homeSectionCard';
import CardListItem from './CardList';
import TechStackImg from './TechStackImg';
import Button from '@/components/Button';
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
                    <TechStackImg src={require('@/assets/img/logo/quasar-logo.svg')} />
                    <TechStackImg src={require('@/assets/img/logo/vuetify-seeklogo.com.svg')} />
                    <TechStackImg src={require('@/assets/img/logo/tailwindcss.svg')} />
                    <TechStackImg src={require('@/assets/img/logo/laravel-logo.png')} />
                    <TechStackImg src={require('@/assets/img/logo/vuejs-seeklogo.com.svg')} />
                    <TechStackImg src={require('@/assets/img/logo/react-seeklogo.com.svg')} />
                    {/* <TechStackImg src={require('@/assets/img/logo/express-js-seeklogo.com.svg')} /> */}
                </div>
            </section>

            <section className={C.section}>
                <HomeSectionCard
                    title="Organizations"
                    colSpan={4}
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

            <section id="education" className={C.section}>
                <HomeSectionCard
                    title="Education"
                    colSpan={4}
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
