import { useState } from "react"
import styles from "../styles/Contact.module.scss"
import { Button } from "./Button"
export function Contact({video_link}) {

    const ctabox = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: "0"
    }

    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [done, setDone] = useState(false)

    const sendContact = () => {
        if (email && message) {
            // sendLocation
            setDone(true)
        }
        else {
            alert("Please enter both fields")
        }
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

            {
               !done ? (
                    <div className={styles.contact__form} >
                        <input onChange={(value) => {
                            setEmail(value)
                        }} placeholder="Your email"></input>
                        <textarea onChange={(v) => setMessage(v)} placeholder="Your note"></textarea>
                        <div style={ctabox}>

                            <Button text='Reach out' onClick={() => sendContact()} ></Button>
                        </div>
                    </div>

                ): (
                    <div className={styles.contact__form}>
                        Thank you for reaching out to us, we'll get back to you in less than 6 hours.
                    </div>
                )
            }
       </div>
    </div>
}