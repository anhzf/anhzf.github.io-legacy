import React from 'react';
import HomeSectionCard, * as HSC from './homeSectionCard';


export default function TheMain() {
    const featuredProjects = [
        {
            content: 'Lakukampus',
            href: 'https://lakukampus.id'
        },
        {
            content: 'Code Highlighter',
            href: 'https://anh-code-highlighter.web.app/'
        },
        {
            content: 'Laravel RestAPI',
            href: 'https://packagist.org/packages/anhzf/laravel-rest-api',
        },
    ].map(v => ({...v, target: '_blank'}))

    return (
        <main className="grid">
            <section id="projects" className="grid:col-start-2 grid:col-span-10 grid-6">
                <HomeSectionCard
                    title="Featured Projects"
                    actions={(
                        <HSC.Action text="See other projects" type="strong" action="./" />
                    )}
                >
                    <HSC.ContentList items={featuredProjects} />
                </HomeSectionCard>

                <HomeSectionCard
                    title="Most Starred on Github"
                    actions={(<>
                        <HSC.Action text="See more" action="./" />
                        <HSC.Action text="Visit github" type="strong" action="./" />
                    </>)}
                />
            </section>

            <section id="skills-and-experience" className="grid:col-start-2 grid:col-span-10 grid">
                <HomeSectionCard
                    title="Skills"
                    colSpan={5}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nam dolores non libero officiis
                    earum dolorem ratione, quo sunt suscipit, eaque eos sit distinctio beatae debitis voluptas velit rem
                    vero repellat voluptate perferendis? Voluptatum magnam odit dolore beatae dignissimos error.
                    Reiciendis esse odio nostrum architecto voluptates vitae, excepturi, ut minus quas blanditiis
                    deserunt, dignissimos dolorum? Aliquam asperiores, suscipit beatae quibusdam enim quas saepe est
                    possimus quo doloremque quisquam nobis sit voluptates temporibus excepturi aperiam obcaecati, dolor
                    velit nulla! Ad ut eligendi aspernatur, reprehenderit a, quaerat eos sunt quis sit incidunt illum
                    non illo minima unde possimus quos exercitationem
                </HomeSectionCard>
                <HomeSectionCard
                    title="Experience"
                    colSpan={5}
                    colStart={8}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nam dolores non libero officiis
                    earum dolorem ratione, quo sunt suscipit, eaque eos sit distinctio beatae debitis voluptas velit rem
                    vero repellat voluptate perferendis? Voluptatum magnam odit dolore beatae dignissimos error.
                    Reiciendis esse odio nostrum architecto voluptates vitae, excepturi, ut minus quas blanditiis
                    deserunt, dignissimos dolorum? Aliquam asperiores, suscipit beatae quibusdam enim quas saepe est
                    possimus quo doloremque quisquam nobis sit voluptates temporibus excepturi aperiam obcaecati, dolor
                    velit nulla! Ad ut eligendi aspernatur, reprehenderit a, quaerat eos sunt quis sit incidunt illum
                    non illo minima unde possimus quos exercitationem
                </HomeSectionCard>
            </section>

            <section className="grid:col-start-2 grid:col-span-10">
                <h1 className="home-section-card__title">Top Web Technologies Used</h1>
                <div className="home-section-card__contents featured" draggable="true">
                    <div className="featured__item">
                        <img src={require('../../assets/img/logo/quasar-logo.svg')} alt="" />
                    </div>
                    <div className="featured__item">
                        <img src={require('../../assets/img/logo/vuetify-seeklogo.com.svg')} alt="" />
                    </div>
                    <div className="featured__item">
                        <img src={require('../../assets/img/logo/laravel-logo.png')} alt="" />
                    </div>
                    <div className="featured__item">
                        <img src={require('../../assets/img/logo/vuejs-seeklogo.com.svg')} alt="" />
                    </div>
                    <div className="featured__item">
                        <img src={require('../../assets/img/logo/react-seeklogo.com.svg')} alt="" />
                    </div>
                    <div className="featured__item">
                        <img src={require('../../assets/img/logo/express-js-seeklogo.com.svg')} alt="" />
                    </div>
                </div>
            </section>

            <section className="grid:col-start-2 grid:col-span-10 grid">
                <HomeSectionCard
                    title="Organizations"
                    colSpan={7}
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

            <section id="education" className="grid:col-start-4 grid:col-span-10 grid">
                <HomeSectionCard
                    title="Education"
                    colSpan={7}
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
