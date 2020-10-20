import * as React from 'react';

export default function TheMain() {
    return (
        <main className="grid">
            <section id="projects" className="grid:col-start-2 grid:col-span-10 grid-6">
                <div className="home-section-card grid:col-span-3 p-b-xl">
                    <h1 className="home-section-card__title">Featured Projects</h1>
                    <div className="home-section-card__contents featured__container">
                        <div className="featured__item">
                            <img src="./img/logo/lakukampus2.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="home-section-card grid:col-span-3 p-b-xl">
                    <h1 className="home-section-card__title">Most Popular on Github</h1>
                    <div className="home-section-card__contents featured__container">
                        <div className="featured__item">
                            <img src="./img/logo/lakukampus2.png" alt="" />
                        </div>
                        <div className="featured__action">
                            <a href="./">See other projects</a>
                        </div>
                    </div>
                </div>
            </section>

            <section id="skills-and-experience" className="grid:col-start-2 grid:col-span-10 grid">
                <div className="home-section-card grid:col-span-5">
                    <h1 className="home-section-card__title">Skills</h1>
                    <div className="home-section-card__contents">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, nam dolores non libero officiis
                        earum dolorem ratione, quo sunt suscipit, eaque eos sit distinctio beatae debitis voluptas velit rem
                        vero repellat voluptate perferendis? Voluptatum magnam odit dolore beatae dignissimos error.
                        Reiciendis esse odio nostrum architecto voluptates vitae, excepturi, ut minus quas blanditiis
                        deserunt, dignissimos dolorum? Aliquam asperiores, suscipit beatae quibusdam enim quas saepe est
                        possimus quo doloremque quisquam nobis sit voluptates temporibus excepturi aperiam obcaecati, dolor
                        velit nulla! Ad ut eligendi aspernatur, reprehenderit a, quaerat eos sunt quis sit incidunt illum
                        non illo minima unde possimus quos exercitationem facilis dolores!
            </div>
                </div>
                <div className="home-section-card grid:col-span-5 grid:col-start-8">
                    <h1 className="home-section-card__title">Experience</h1>
                    <div className="home-section-card__contents">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea officiis excepturi doloribus debitis
                        nemo nobis consequatur nulla optio! Maiores ullam id ea a deleniti quia animi minima sunt excepturi
                        dicta itaque voluptas praesentium hic sequi veniam corporis dolorum facilis, in et sint molestiae
                        provident qui. Natus quia in nam, tempore iusto exercitationem distinctio, saepe, vitae facilis
                        necessitatibus ullam minus consequuntur quibusdam harum aliquid cumque doloremque cupiditate
                        voluptatum unde nulla consectetur minima excepturi! In sit iusto, maiores delectus nisi laborum
                        sequi rerum voluptas ipsum consequuntur at ut, magni neque excepturi mollitia vitae labore iste
                        quidem repudiandae molestias quaerat aliquam laboriosam pariatur.
            </div>
                </div>
            </section>

            <section className="grid:col-start-2 grid:col-span-10">
                <h1 className="home-section-card__title">Top Web Technologies Used</h1>
                <div className="home-section-card__contents featured" draggable="true">
                    <div className="featured__item">
                        <img src="./img/logo/quasar-logo.svg" alt="" />
                    </div>
                    <div className="featured__item">
                        <img src="./img/logo/vuetify-seeklogo.com.svg" alt="" />
                    </div>
                    <div className="featured__item">
                        <img src="./img/logo/laravel-logo.png" alt="" />
                    </div>
                    <div className="featured__item">
                        <img src="./img/logo/vuejs-seeklogo.com.svg" alt="" />
                    </div>
                    <div className="featured__item">
                        <img src="./img/logo/react-seeklogo.com.svg" alt="" />
                    </div>
                    <div className="featured__item">
                        <img src="./img/logo/express-js-seeklogo.com.svg" alt="" />
                    </div>
                </div>
            </section>

            <section className="grid:col-start-2 grid:col-span-10 grid">
                <div className="home-section-card grid:col-span-7">
                    <h1 className="home-section-card__title">Organizations</h1>
                    <div className="home-section-card__contents">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta autem deleniti consequatur
                        sunt perspiciatis, sapiente minima a ad necessitatibus officiis voluptate nesciunt nemo aperiam
                        dolorem fuga facere reiciendis doloribus excepturi libero eaque itaque hic natus. Fuga itaque
                        adipisci eius rem saepe vero distinctio quod! Quasi molestias hic dolorem ipsum iste enim laboriosam
                        necessitatibus laborum omnis velit. Eveniet et, neque tempora dolorem incidunt porro eos? Minus
                        voluptas odio vitae incidunt provident in minima, totam ipsa tempora a consectetur, iusto sed
                        asperiores veritatis fuga consequatur modi nam ratione eveniet cum! Quam pariatur, neque autem enim
                        in sapiente officia reiciendis aperiam voluptas!
            </div>
                </div>
            </section>

            <section id="education" className="grid:col-start-4 grid:col-span-10 grid">
                <div className="home-section-card grid:col-span-7">
                    <h1 className="home-section-card__title">Education</h1>
                    <div className="home-section-card__contents">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam soluta autem deleniti consequatur
                        sunt perspiciatis, sapiente minima a ad necessitatibus officiis voluptate nesciunt nemo aperiam
                        dolorem fuga facere reiciendis doloribus excepturi libero eaque itaque hic natus. Fuga itaque
                        adipisci eius rem saepe vero distinctio quod! Quasi molestias hic dolorem ipsum iste enim laboriosam
                        necessitatibus laborum omnis velit. Eveniet et, neque tempora dolorem incidunt porro eos? Minus
                        voluptas odio vitae incidunt provident in minima, totam ipsa tempora a consectetur, iusto sed
                        asperiores veritatis fuga consequatur modi nam ratione eveniet cum! Quam pariatur, neque autem enim
                        in sapiente officia reiciendis aperiam voluptas!
            </div>
                </div>
            </section>
        </main>
    )
}