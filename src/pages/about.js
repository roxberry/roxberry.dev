import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="About Me" />
            <section>
                <h1 className="sectionTitle">About Me</h1>
                <div>
                    <h2 className="sectionTitle">Short Bio</h2>
                    <p>I have over 20 years as a skilled architect and developer with experience designing, developing, and ensuring secure applications using advanced technologies. I am a CISSP (Certified Information Systems Security Professional) and a CEH (Certified Ethical Hacker) with significant experience employing and promoting secure coding practices and designing security architecture models that ensure the confidentiality, availability, and integrity of information assets of his clients and principals.</p>
                    <div className="flexbox-widex">
                        <div class="project-card-wide">
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage
