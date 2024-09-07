import styles from './contact.module.css'

const Contact = () => {
    return (
        <section className="col-lg-9 col-sm-12">
            <div className={styles.contact_section}>
                <div className="contact section" id="contact_us">
                    <div className="container">
                        <div className="row">
                            <div className="section_title">
                                <h2>
                                    Contact Us
                                </h2>
                            </div>
                        </div>

                        <h4 className={styles.contact_question}>have you any question?</h4>
                        <h5 className={styles.contact_sub_title}>i`m at your services</h5>

                        <div className={`row ${styles.row_center}`}>
                            <div className={styles.contact_content}>
                                <div className={styles.icon}><i className="fa fa-phone"></i></div>
                                <h5>Call Us On</h5>
                                <p>+20 01200241817</p>
                            </div>

                            <div className={styles.contact_content}>
                                <div className={styles.icon}><i className="fa fa-marker"></i></div>
                                <h5>Office</h5>
                                <p>Alexandria,Egypt</p>
                            </div>

                            <div className={styles.contact_content}>
                                <div className={styles.icon}><i className="fa fa-envelope"></i></div>
                                <h5>Email Us At</h5>
                                <p>olaadel.967@gmail.com</p>
                            </div>

                            <div className={styles.contact_content}>
                                <div className={styles.icon}><i className="fa fa-globe-europe"></i></div>
                                <h5>Visit Our Website</h5>
                                <a href="#" target="_blank">www.oladel.net</a>
                            </div>
                        </div>
                    </div>
                    <h4 className={styles.send_email}>send me an email, waiting you ....</h4>
                    <h5 className={styles.contact_sub_title}>i`m very responsive with message</h5>

                    {/* <!-- form --> */}
                    <div className={`row ${styles.center_form}`}>
                        <div className={styles.contact_form}>
                            <div className="row">
                                <div className={`${styles.form_item} ${styles.half_row}`}>
                                    <div className={styles.form_group}>
                                        <input type="text" className={styles.form_controllar} name="" placeholder="Your Name *"/>
                                    </div>
                                </div>

                                <div className={`${styles.form_item} ${styles.half_row}`}>

                                    <div className={styles.form_group}>
                                        <input type="email" className={styles.form_controllar} name="" placeholder="Your Email *"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div     className={`${styles.form_item} ${styles.full_row}`}>
                                    <div className={styles.form_group}>
                                        <textarea name="" className={styles.form_controllar} id=""
                                            placeholder="Your Message"></textarea>
                                    </div>
                                </div>
                                <div     className={`${styles.form_item} ${styles.full_row}`}>
                                    <div className={styles.form_group}>
                                        <input type="text" className={styles.form_controllar} placeholder="Your Suggest *" />
                                    </div>
                                </div>

                                <div className={styles.form_item}>
                                    <div className={styles.form_group}>
                                        <button type="submit" className="btn_">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact