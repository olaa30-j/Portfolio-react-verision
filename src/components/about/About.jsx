import { Link } from "react-router-dom";
import styles from "./about.module.css";

const About = () => {
    return (
        <div className={`${styles.about_section} col-lg-9  col-sm-12`}>
            <section className="section">
                <div className={`${styles.about}`} >
                    <div className="container">
                        <div className="row">
                            <div className="section_title">
                                <h2>
                                    About Me
                                </h2>
                            </div>
                        </div>

                        <div className="row">
                            <div className={styles.about_content}>
                                <div className="row">
                                    <div className={styles.about_text}>
                                        <h3>I`m Ola Adel and <span>Frontend Developer</span></h3>
                                        <p>
                                            self-driven frontend developer with a strong passion for React.
                                            I&apos;ve independently developed more than four projects,
                                            including a MERN stack application, all characterized by striking animations
                                            and modern web design.
                                            I&apos;ve also ventured into 3D web development to push the boundaries of web
                                            experiences.
                                            Beyond React, I&apos;ve expanded my expertise by learning Node.js and MongoDB.
                                            My journey in web development is driven by a relentless pursuit of creating
                                            captivating digital
                                            solutions. Let&apos;s collaborate to bring your ideas to life through innovative
                                            and immersive web experiences.
                                        </p>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className={styles.personal_data}>
                                        <div className="row">
                                            <div className={styles.info_item}>
                                                <p> Birthday: <span> 30 dec 1998</span></p>
                                            </div>

                                            <div className={styles.info_item}>
                                                <p> Age: <span> 24 </span></p>
                                            </div>

                                            <div className={styles.info_item}>
                                                <p> Website: <span> https://www.ola2adel.com </span></p>
                                            </div>

                                            <div className={styles.info_item}>
                                                <p> Email: <span> olaadel.967@gmail.com </span></p>
                                            </div>

                                            <div className={styles.info_item}>
                                                <p> Degree: <span> Bc degree </span></p>
                                            </div>

                                            <div className={styles.info_item}>
                                                <p> Phone: <span>+20 01200241817 </span></p>
                                            </div>

                                            <div className={styles.info_item}>
                                                <p> City: <span> Alexandria </span></p>
                                            </div>

                                            <div className={styles.info_item}>
                                                <p> Freelance: <span> Avaliable </span></p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className={styles.about_btns}>
                                                <Link to="./assets/Ola-Adel-ELsayed-Mohamed--Resume.pdf" className="btn_ btn-hire">Download CV</Link>
                                                <Link to="https://www.linkedin.com/in/ola-adel-724b76203/" className="btn_ btn-hire">Hire Me</Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className={styles.personal_skills}>
                                        <div className="row">
                                            <div className={styles.skills_item}>
                                                <h5> html and Css </h5>
                                                <div className={styles.progress}>
                                                    <div className="progress-bar progress-bar-striped bg-success"
                                                        role="progressbar">
                                                        <div className={styles.progress_line} role="progressbar"
                                                            style={{ width: ' 95%' }}></div>
                                                        <div className={styles.skills_percent} role="progressbar">95%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.skills_item}>
                                                <h5> js </h5>
                                                <div className={styles.progress}>
                                                    <div className="progress-bar progress-bar-striped bg-success"
                                                        role="progressbar">
                                                        <div className={styles.progress_line} role="progressbar"
                                                            style={{ width: ' 90%' }}></div>
                                                        <div className={styles.skills_percent} role="progressbar">90%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.skills_item}>
                                                <h5> react </h5>
                                                <div className={styles.progress}>
                                                    <div className="progress-bar progress-bar-striped bg-success"
                                                        role="progressbar">
                                                        <div className={styles.progress_line} role="progressbar"
                                                            style={{ width: ' 80%' }}></div>
                                                        <div className={styles.skills_percent} role="progressbar">80%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.skills_item}>
                                                <h5> react native </h5>
                                                <div className={styles.progress}>
                                                    <div className="progress-bar progress-bar-striped bg-success"
                                                        role="progressbar">
                                                        <div className={styles.progress_line} role="progressbar"
                                                            style={{ width: ' 70%' }}></div>
                                                        <div className={styles.skills_percent} role="progressbar">70%</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={styles.skills_item}>
                                                <h5> angular </h5>
                                                <div className={styles.progress}>
                                                    <div className="progress-bar progress-bar-striped bg-success"
                                                        role="progressbar">
                                                        <div className={styles.progress_line} role="progressbar"
                                                            style={{ width: ' 50%' }}></div>
                                                        <div className={styles.skills_percent} role="progressbar">50%</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.personal_work}>
                                    <div className="row">
                                        <div className={styles.personal_education}>
                                            <h4 className={styles.title}>
                                                Education
                                            </h4>
                                            <div className="row">
                                                <div className={styles.timeline_box}>
                                                    <div className={`${styles.timline} ${styles.dark_shadow}`}>
                                                        <div className={styles.timeline_item}>
                                                            <div className={styles.dot}></div>
                                                            <h5 className={styles.timeline_date}>
                                                                <i className="fa fa-calendar"></i> mar 2023 - jul 2023
                                                            </h5>
                                                            <h6 className={styles.timeline_title}>Information
                                                                Technology
                                                                Institue
                                                                (ITI), internship</h6>
                                                            <p className={styles.timeline_text}>
                                                                <span>Frontend and cross-platform Mobile development
                                                                    diploma</span><br />
                                                                - Completed a Internship in Information Technology,
                                                                providing a strong academic foundation in IT, computer
                                                                science, and core principles.<br />
                                                                - Gained expertise in programming, database management,
                                                                and software development during my academic journey.
                                                                <br />
                                                                - Developed problem-solving skills and the ability to
                                                                collaborate effectively in a team.<br />
                                                                - Utilized the knowledge and skills acquired during my
                                                                degree in my work as a frontend and cross-platform
                                                                mobile developer.<br />
                                                                - Complemented my education with a diploma in frontend
                                                                and
                                                                cross-platform mobile development, expanding my
                                                                technical skills.<br />
                                                                - Proficient in various JavaScript libraries and
                                                                frameworks, enhancing my capabilities as a developer in
                                                                technology and software engineering.
                                                            </p>
                                                        </div>

                                                        <div className={styles.timeline_item}>
                                                            <div className={styles.dot}></div>
                                                            <h5 className={styles.timeline_date}>
                                                                <i className="fa fa-calendar"></i> sep 2016 - may 2020
                                                            </h5>
                                                            <h6 className={styles.timeline_title}>Faculty
                                                                of
                                                                Education,
                                                                Alexandria
                                                                University.</h6>
                                                            <p className={styles.timeline_text}>
                                                                Degree (good)
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.personal_experance}>
                                            <h4 className={styles.title}>
                                                Work Experience
                                            </h4>
                                            <div className="row">
                                                <div className={styles.timeline_box}>
                                                    <div className={`${styles.timline} ${styles.dark_shadow}`}>
                                                        <div className={styles.timeline_item}>
                                                            <div className={styles.dot}></div>
                                                            <h5 className={styles.timeline_date}>
                                                                <i className="fa fa-calendar"></i> sep 2016 - may 2020
                                                            </h5>
                                                            <h6 className={styles.timeline_title}>Mother
                                                                Care
                                                                Website
                                                                and
                                                                Application
                                                                (React,
                                                                React
                                                                Native)</h6>
                                                            <p className={styles.timeline_text}>
                                                                <span>Information
                                                                    Technology
                                                                    Institue
                                                                    (ITI)</span><br />
                                                                - Engineered a web and mobile app to empower mothers in managing their children&apos;s growth, activities, and needs.
                                                                <br />- Leveraged a tech stack, encompassing React, Node.js, MongoDB, Bootstrap, Material UI, and React Native, for peak performance.
                                                                <br />- Garnered acclaim for the app&apos;s intuitive UI and UX, allowing seamless interaction with vital info.
                                                            </p>
                                                        </div>

                                                        <div className={styles.timeline_item}>
                                                            <div className={styles.dot}></div>
                                                            <h5 className={styles.timeline_date}>
                                                                <i className="fa fa-calendar"></i> nov 2022 - present
                                                            </h5>
                                                            <h6 className={styles.timeline_title}>Freelance
                                                                Web
                                                                Developer</h6>
                                                            <p className={styles.timeline_text}>
                                                                <span>Remote</span><br />
                                                                - Delivered personalized web solutions for clients by merging creativity with technical expertise.<br />
                                                                - Built responsive websites using React, Angular, and Vue.js, ensuring high compatibility across all devices.<br />
                                                                - Drove project success from concept to deployment, collaborating closely with clients.
                                                            </p>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
