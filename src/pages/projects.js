import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { StaticImage } from "gatsby-plugin-image"

const ProjectsPage = () => {
    return (
        <Layout>
            <SEO title="Projects" />

            <section>
                <h1 className="sectionTitle">Projects</h1>
                <div className="flexbox-widex">
                    <div className="project-card-wide">
                        <div className="project-card-image">
                            <StaticImage
                                src="../images/projects/standout-1.png"
                                alt="project"
                                formats={["AUTO"]}
                                placeholder="NONE"
                                background="#282828"
                                loading="eager"
                                layout="constrained"
                                width="250"
                            />
                        </div>
                        <div className="project-card-wide-text">
                            <h3>StandOut.PRO</h3>
                            <span>A digital platform focusing on personal consulting, analytics, and security services for promising youth athletes.</span>
                            <div className="project-card-link">
                                <a href="https://standout.pro" target="_blank">Visit the project &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-wide">
                        <div className="project-card-image">

                            <StaticImage
                                formats={["AUTO"]}
                                src="../images/projects/shipwrite-1.png"
                                alt="project"
                                placeholder="NONE"
                                background="#282828"
                                loading="eager"
                                layout="constrained"
                                width="250"
                            />
                        </div>
                        <div className="project-card-wide-text">
                            <h3>ShipWrite</h3>
                            <span>An AI-powered application to assist the creation of high-quality writing for the professional and technical domains.</span>
                            <div className="project-card-link">
                                <a href="https:/shipwrite.app" target="_blank">Visit the project &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-wide">
                        <div className="project-card-image">
                            <StaticImage
                                formats={["AUTO"]}
                                src="../images/projects/un2ai-1.png"
                                alt="project"
                                placeholder="NONE"
                                background="#282828"
                                loading="eager"
                                layout="constrained"
                                width="250"

                            />
                        </div>
                        <div className="project-card-wide-text">
                            <h3>UN2 AI</h3>
                            <span>An ecosystem where artificial intelligence and humanity coexist, rooted in a reciprocal relationship of respect and fairness.</span>
                            <div className="project-card-link">
                                <a href="https://un2.ai" target="_blank">Visit the project &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className="project-card-wide">
                        <div className="project-card-image">
                            <StaticImage
                                formats={["AUTO"]}
                                src="../images/projects/actu8-1.png"
                                alt="project"
                                placeholder="NONE"
                                background="#282828"
                                loading="eager"
                                layout="constrained"
                                width="250"
                            />
                        </div>
                        <div className="project-card-wide-text">
                            <h3>ACTU8.IO</h3>
                            <span>An innovation hub and platform that empowers developers in the robotics and Internet of Things (IoT) fields.</span>
                            <div className="project-card-link">
                                <a href="https://actu8.io" target="_blank">Visit the project &gt;</a>
                            </div>
                        </div>
                    </div>
                    <div className="hide">
                        <div className="project-card-image">
                            <StaticImage
                                formats={["AUTO"]}
                                src="../images/projects/martyr-1.png"
                                alt="project"
                                placeholder="NONE"
                                background="#282828"
                                loading="eager"
                                layout="constrained"
                                width="250" />
                        </div>
                        <div className="project-card-wide-text">
                            <h3>Martyr</h3>
                            <div className="project-card-link">
                            </div>
                        </div>
                    </div>
                    <div className="hide">
                        <div className="project-card-image">
                            <StaticImage
                                formats={["AUTO"]}
                                src="../images/projects/nextwars-1.png"
                                alt="project"
                                placeholder="NONE"
                                background="#282828"
                                loading="eager"
                                layout="constrained"
                                width="250"
                            />
                        </div>
                        <div className="project-card-wide-text">
                            <h3>Next Wars</h3>
                            <div className="project-card-link">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default ProjectsPage
