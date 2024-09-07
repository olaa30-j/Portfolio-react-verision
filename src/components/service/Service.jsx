import styles from './service.module.css';

const Service = () => {
    return (
    <section className={`${styles.services} col-lg-9  col-sm-12`}>
        <div className="container section">
            <div className="row">
                <div className="section_title">
                    <h2>
                        Services
                    </h2>
                </div>
            </div>

            <div className="row row_center">

                <div className={styles.service_item}>
                    <div className={styles.service_item_content}>
                        <div className={styles.icon}>
                            <i className="fa fa-laptop-code"></i>
                        </div>
                        <h5>Responsive Design</h5>
                        <p>
                            I specialize in building websites with responsive design,
                            so your content will look and function flawlessly on desktops, tablets, and
                            smartphones.
                            Your website will be accessible and engaging across all devices.
                        </p>
                    </div>
                </div>

                <div className={styles.service_item}>
                    <div className={styles.service_item_content}>
                        <div className={styles.icon}>
                            <i className="fa fa-mobile-alt"></i>
                        </div>
                        <h5>Front-End Development</h5>
                        <p>
                            I specialize in developing modern, interactive web applications using React.
                            I can create engaging user interfaces and ensure that your web app is visually
                            appealing and user-friendly.
                        </p>
                    </div>
                </div>

                <div className={styles.service_item}>
                    <div className={styles.service_item_content}>
                        <div className={styles.icon}>
                            <i className="fa fa-bullhorn"></i>
                        </div>
                        <h5>Performance</h5>
                        <p>
                            I&apos;m experienced in performance optimization for React applications.
                            I can enhance your web app&apos;s speed and efficiency,
                            resulting in a better user experience and improved search engine rankings.
                        </p>
                    </div>
                </div>

                <div className={styles.service_item}>
                    <div className={styles.service_item_content}>
                        <div className={styles.icon}>
                            <i className="fa fa-mobile-alt"></i>
                        </div>
                        <h5>React Mobile App</h5>
                        <p>
                            I can extend your web presence to mobile devices by developing cross-platform
                            mobile applications with React Native.
                            This means you can reach a broader audience by offering a consistent and
                            native-like experience on both iOS and Android.
                        </p>
                    </div>
                </div>

                <div className={styles.service_item}>
                    <div className={styles.service_item_content}>
                        <div className={styles.icon}>
                            <i className="fa fa-search"></i>
                        </div>
                        <h5>Parallax and 3D Dev</h5>
                        <p>
                            I specialize in adding parallax scrolling and 3D elements to websites,
                            creating captivating and interactive user experiences.
                            Using libraries like Three.js,
                            I can design visually stunning 3D scenes
                            or use A-Frame to build immersive virtual reality (VR) experiences on the web.
                        </p>
                    </div>
                </div>

                <div className={styles.service_item}>
                    <div className={styles.service_item_content}>
                        <div className={styles.icon}>
                            <i className="fa fa-code"></i>
                        </div>
                        <h5>Specialized Skills</h5>
                        <p>
                            In addition to my core skills in React, I&apos;m proficient in Redux for state
                            management,
                            and I have experience with server-side rendering using React.js.
                            These specialized skills allow me to offer a wide range of solutions for your
                            project.
                        </p>
                    </div>
                </div>
            </div>
        </div>
</section>

  )
}

export default Service