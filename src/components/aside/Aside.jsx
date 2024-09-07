import { NavLink } from 'react-router-dom';
import styles from './aside.module.css';
import { useRef, useState } from 'react';

const Aside = () => {
    const asideShow = useRef(null);
    const [asideToggle, setAsideToggle] = useState(false)


    const handleAsideTogle = () => {
        setAsideToggle(prevValue => {
            if (prevValue) {
                asideShow.current.style.display = 'none';
            } else {
                asideShow.current.style.display = 'block';
            }
            return !prevValue
        });
    }

    return (
        <>
            {
                !asideToggle ? (
                    <div className="toggle" onClick={() => handleAsideTogle()}><i className='fa fa-bars'></i></div>
                ) :
                    null
            }
            <aside ref={asideShow} className='col-lg-3 col-sm-6'>
                {
                    asideToggle ? (
                        <div className="toggle" onClick={() => handleAsideTogle()}><i className='fa fa-times'></i></div>

                    ) : null
                }
                <div className={styles.logo}>
                    <NavLink to="" className={styles.logo_link} > <span>Ola.</span>dev</NavLink >
                </div>

                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <NavLink to="" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.active}` : `${styles.nav_link}`}>
                            <i className="fa fa-home"></i>
                            Home
                        </NavLink >
                    </li>

                    <li className={styles.nav_item}>
                        <NavLink to="about" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.active}` : `${styles.nav_link}`}>
                            <i className="fa fa-user"></i>
                            About Me
                        </NavLink >
                    </li>

                    <li className={styles.nav_item}>
                        <NavLink to="service" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.active}` : `${styles.nav_link}`}>
                            <i className="fa fa-list"></i>
                            Services
                        </NavLink >
                    </li>

                    <li className={styles.nav_item}>
                        <NavLink to="portfolio" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.active}` : `${styles.nav_link}`}>
                            <i className="fa fa-briefcase"></i>
                            Portfolio
                        </NavLink >
                    </li>

                    <li className={styles.nav_item}>
                        <NavLink to="contact" className={({ isActive }) => isActive ? `${styles.nav_link} ${styles.active}` : `${styles.nav_link}`}>
                            <i className="fa fa-comments"></i>
                            Contact Us
                        </NavLink >
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Aside