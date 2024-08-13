import React from "react"
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const AboutPage = () => {
    return (
        <Layout>
            <Seo title="About Me" />
            <section>
                <h1 className="sectionTitle">About Me</h1>
                <div>
                    <h2>What GPT-4 thinks about my resume: </h2>
                    <h3>About Me</h3>
                    <p>Driven architect and developer at <a href="https://www.waveseeker.com">Database Solutions, Inc.</a>, with a reputation for innovating secure, scalable solutions within diverse industries like media, healthcare, and finance. Adept at resolving complex technical challenges through effective use of technology.</p>
                    
                    <h3>Proficiency</h3>
                    <p>Proficient in Java, Python, Cloud Technologies (AWS, Azure, GCP, OpenShift), and DevOps (Docker, Kubernetes). CISSP and CEH certified, with a focus on secure intelligence and integration. Lead architect and engineer for GenWave, DSI's Generative Innovation and Capability Explorer platform.</p>
                    
                    <h3>Beyond Work</h3>
                    <p>Cybersecurity advocate and speaker, OWASP leader and contributor, CSA AI volunteer and robotics mentor. Committed to driving advancement through technology and education.  Information Officer at the <a href="https://www.sjsl.org">South Jersey Soccer League</a></p>
  
                    <h3>Vision</h3>
                    <p>Dedicated to crafting secure, generative solutions that enhance operational efficiency and drive innovation.</p>
                </div>
            </section>
        </Layout>
    )
}

export default AboutPage
