import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import * as contactStyles from "../styles/contact.module.scss"

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact Me" />
            <section className="contactForm">
                <h1 className="sectionTitle">Contact Me</h1>
                <div>
                    <div>
                        <p>Send me a message.</p>
                        <form
                            name="sentMessage"
                            action="https://formspree.io/f/xnqlpgoo"
                            method="POST"
                            id="contactForm"
                            noValidate
                        >
                            <label>Email Address</label>
                            <input
                                type="email"
                                name="_replyto"
                                // placeholder="Email Address"
                                id="email"
                                required
                                data-validation-required-message="Please enter your email address."
                            />
                            <p></p>
                            <label>Message</label>
                            <textarea
                                rows="10"
                                name="body"
                                // placeholder="Message"
                                id="message"
                                required
                                data-validation-required-message="Please enter a message."
                            ></textarea>
                            <p></p>
                            <input type="submit" value="Send" />
                            <input type="hidden" name="_next" value="//roxberry.dev/thanks/" />
                            <input type="hidden" name="_gotcha" />
                        </form>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default ContactPage
