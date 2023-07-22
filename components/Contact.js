import styles from "../styles/Contact.module.scss"
import { Button } from "./Button"
export function Contact({video_link}) {

    const ctabox = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: "0"
    }
    return <div id="contact" className={styles.contact}>
       <div className={styles.contact__container}>
            <div>
                <h3>Questions?</h3>
                <h3>Comments?</h3>
                <h3>We'd like to hear from you</h3>

                <p>

                    We're your go-to experts for bringing your product ideas to life and automating your processes for seamless success. Reach out to us now, and let's start creating something amazing together!
                </p>
            </div>

            <div className={styles.contact__form}>
                <input placeholder="Your email"></input>
                <textarea placeholder="Your note"></textarea>
                <div style={ctabox}>

                    <Button text='Reach out' ></Button>
                </div>
            </div>
       </div>
    </div>
}