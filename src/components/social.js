import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { Link, graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRss, faEnvelope } from '@fortawesome/free-solid-svg-icons' 
import { faFacebookF, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons' 

library.add([faRss, faFacebookF, faTwitter, faGithub, faEnvelope]); 

const Social = () =>  {
    return (
        <div className="social-icons">
            <ul>
                <li>
                    <a href="/feed.xml"><FontAwesomeIcon icon={['fas', 'rss']} /></a>
                </li>
                <li>
                    <a href="https://twitter.com/roxberry"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </li>
                <li>
                    <a href="https://www.facebook.com/roxberry"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
                </li>
                <li>
                    <a href="https://github.com/roxberry"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                </li>
                <li>
                    <a href="mailto:contact@roxberry.dev"><FontAwesomeIcon icon={['fas', 'envelope']} /></a>
                </li>
            </ul>
        </div>
    )
}

export default Social