import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import { themeContext } from "../../context/theme";
import { modeContext } from "../../context/darkmode";
import styles from './home.module.css';

const Home = () => {
    const typingRef = useRef(null);
    const [toggleTheme , setToggleTheme] = useState(false);
    const {handleTheme} = useContext(themeContext);
    const { mode, handleDarkMode } = useContext(modeContext);


    useEffect(()=>{
        let typed = new Typed (".job", {
            strings:["Web Developer.", "Frontend Developer.", "React Developer."],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })  

        return ()=> {
            typed.destroy();
        }
    },[])


    const handleToggleTheme = () =>{
        setToggleTheme((prevValue)=> !prevValue)
    }

    return (
        <section className="col-lg-9  col-sm-12">
            <div className={`${styles.home} section`} >
                {/* ---------- Mode Button -------------- */}
                <a id="mode_button"><i className={`mode fa ${ mode === 'dark' ? 'fa-sun' : 'fa-moon'}`} onClick={()=>handleDarkMode()}></i></a>
                {/* ---------- Theme Button -------------- */}
                <div className={`color_switcher ${toggleTheme? 'color_switcher_show': ''}`}>
                    <div className="color_btn"><i className={`theme fa fa-cog`} onClick={()=> handleToggleTheme()}></i>
                        <h5 className="color_word">Color Switch</h5>
                    </div>
                    <div className={`themes ${toggleTheme? 'show': ''}`}>
                        <span className="theme_btns" data-color="#2F3C7E" style={{ backgroundColor: '#2F3C7E' }} onClick={(e)=> handleTheme(e.target.getAttribute("data-color"))}></span>
                        <span className="theme_btns" data-color="#FF69B4" style={{ backgroundColor: '#FF69B4' }} onClick={(e)=> handleTheme(e.target.getAttribute("data-color"))}></span>
                        <span className="theme_btns" data-color="#EE4E34" style={{ backgroundColor: '#EE4E34' }} onClick={(e)=> handleTheme(e.target.getAttribute("data-color"))}></span>
                        <span className="theme_btns" data-color="#00008B" style={{ backgroundColor: '#00008B' }} onClick={(e)=> handleTheme(e.target.getAttribute("data-color"))}></span>
                        <span className="theme_btns" data-color="#3A6B35" style={{ backgroundColor: '#3A6B35' }} onClick={(e)=> handleTheme(e.target.getAttribute("data-color"))}></span>
                        <span className="theme_btns" data-color="#8A307F" style={{ backgroundColor: '#8A307F' }} onClick={(e)=> handleTheme(e.target.getAttribute("data-color"))}></span>
                        <input type="color"  className="theme_btns" style={{ border:`3px dashed grey`}} name="color-picker" id="color-picker" onChange={(e)=> handleTheme(e.target.value)} />
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className={styles.home_content}>
                            <h3 className={styles.home_title}>
                                Hello, I&apos;m <span className={styles.name}>Ola Adel</span>
                            </h3>
                            <h3 className={styles.job_title}>I&apos;m <span className="job" ref={typingRef}></span></h3>
                            <p className={styles.home_description}>
                                Hello and welcome to my portfolio! I&apos;m Ola Adel, a dedicated frontend developer with a
                                focus on React. I&apos;m thrilled to have you here, and I can&apos;t wait to share my passion for web development
                                with you.
                            </p>
                            <Link to="https://www.linkedin.com/in/ola-adel-724b76203/" className="btn_ hire_btn">Hire Me</Link>
                        </div>

                        <div className={styles.home_image}>
                            <img src="/assets/images/profile.png" alt="Ola Adel" className={styles.user_img} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
