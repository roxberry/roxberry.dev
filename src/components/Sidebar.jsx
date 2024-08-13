import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Social from "./Social"
import Footer from "./Footer"
import Categories from "./Tags"

const SideBar = () => {
    return (
        <aside>
            <section>
                <StaticImage
                    className="profile"
                    layout="fixed"
                    formats={["AUTO", "WEBP", "AVIF"]}
                    src="../images/profile.3.jpg"
                    quality={95}
                    alt="Profile picture"
                    style={{ borderRadius: '100%' }}
                />
            </section>
            <section>
                <h2>Mark Roxberry</h2>
                <span>Principal Consultant</span><br/>
                <span><a href="https://www.waveseeker.com">@ Database Solutions</a></span>
                <Social />

                {/* <p>Husband, father, son, brother and uncle.</p> */}
                {/* <p>Security driven developer and passionate cross platform software engineer, architect and consultant.</p> */}
            </section>
            <section>
                <a href="https://github.com/roxberry/gatsby-roxberry/actions/workflows/main-ci.yml"><img src="https://github.com/roxberry/gatsby-roxberry/actions/workflows/main-ci.yml/badge.svg" width="170px" height="20px" alt="Roxberry.DEV CI" /></a>
            </section>
            <Categories />
            <Footer />
        </aside>
    )
}

export default SideBar