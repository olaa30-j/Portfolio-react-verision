import { Link, useLoaderData } from 'react-router-dom'
import styles from './portfolio.module.css'
import { useState } from 'react';

const Portfolio = () => {
    const projects = useLoaderData();
    const [filterProjects, setFilterProjects] = useState(projects);
    const [activeFilter, setActiveFilter] = useState('all');

    const filterData = (filter) => {
        if (filter == 'all') {
            setFilterProjects(projects)
        } else {
            const filteredProjects = projects.filter(project => project.type == filter)
            setFilterProjects(filteredProjects)
        }
    }

    return (
        <section className= 'col-lg-9 col-sm-12'>
            <div className="container section">
                <div className="row">
                    <div className="section_title">
                        <h2>
                            Portfolio
                        </h2>
                    </div>
                </div>

                <div className="row">
                    <ul className={styles.projects_filter}>
                        <li className={activeFilter === "all" ? `${styles.filter_item} ${styles.active}` : `${styles.filter_item}`}
                            data-filter="all"
                            onClick={(e) => {
                                setActiveFilter(e.target.getAttribute("data-filter"));
                                filterData(e.target.getAttribute("data-filter"));
                            }}>
                            All Projects
                        </li>

                        <li className={activeFilter === "react" ? `${styles.filter_item} ${styles.active}` : `${styles.filter_item}`}
                            data-filter="react"
                            onClick={(e) => {
                                setActiveFilter(e.target.getAttribute("data-filter"));
                                filterData(e.target.getAttribute("data-filter"));
                            }}>
                            React
                        </li>

                        <li className={activeFilter === "website" ? `${styles.filter_item} ${styles.active}` : `${styles.filter_item}`}
                            data-filter="website"
                            onClick={(e) => {
                                setActiveFilter(e.target.getAttribute("data-filter"));
                                filterData(e.target.getAttribute("data-filter"));
                            }}>
                            Responsive
                        </li>

                        <li className={activeFilter === "parallax" ? `${styles.filter_item} ${styles.active}` : `${styles.filter_item}`}
                            data-filter="parallax"
                            onClick={(e) => {
                                setActiveFilter(e.target.getAttribute("data-filter"));
                                filterData(e.target.getAttribute("data-filter"));
                            }}>
                            Parallax
                        </li>

                        <li className={activeFilter === "animation" ? `${styles.filter_item} ${styles.active}` : `${styles.filter_item}`}
                            data-filter="animation"
                            onClick={(e) => {
                                setActiveFilter(e.target.getAttribute("data-filter"));
                                filterData(e.target.getAttribute("data-filter"));
                            }}>
                            3d
                        </li>
                    </ul>
                </div>

                <div className={`row row_center ${styles.portfolio_projects}`}>
                    {
                        filterProjects.map((project, index) => (
                            <article key={index} className={styles.portfolio_item} data-filter={project.type}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={project.video}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen
                                ></iframe>
                                <div className={styles.card__content}>
                                    <h2 className={styles.card__title}>{project.name}</h2>

                                    <div className={styles.btns}>
                                        <Link to={project.github} className={styles.github_button}>
                                            Github
                                        </Link>
                                        <Link className={styles.card__button} to={project.demo}>Live Demo</Link>
                                    </div>
                                </div>
                            </article>

                        ))
                    }
                </div>

                <p className={styles.alert}> live demo for React projects does not exist, gonna be available soon</p>
            </div>
        </section>
    )
}

export default Portfolio;

export const loader = async () => {
    try {
        const response = await fetch('/data/db.json')
        const data = await response.json();
        return data
    } catch (err) {
        console.log(err)
    }
}