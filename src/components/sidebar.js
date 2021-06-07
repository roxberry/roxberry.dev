import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Social from "../components/social"
import Categories from "./tags"
import Footer from "../components/footer"

const SideBar = () =>  {
    return (
        <aside>
          <section>
              <StaticImage
                className="profile"
                layout="fixed"
                formats={["AUTO", "WEBP", "AVIF"]}
                src="../images/profile.png"
                quality={95}
                alt="Profile picture"
            />
          </section>
          <section>
            <Social />
          </section>
          <section>
            <h2>About Me</h2>
            <p>Cross Platform Consultant</p>
            <a href="https://www.waveseeker.com">@ Database Solutions</a>
            <p>Husband, father, son, brother and uncle. Security driven developer and passionate cross platform software engineer, architect and consultant.</p>
          </section>
            <Categories />
          <Footer />
        </aside>
    )
}

export default SideBar