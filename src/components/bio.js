/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            x
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <div id="bio-info">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="https://instagram.fcai20-3.fna.fbcdn.net/v/t39.30808-6/452958431_17945946374831063_840161114677004169_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYzMDgwOCJ9&_nc_ht=instagram.fcai20-3.fna.fbcdn.net&_nc_cat=111&_nc_ohc=ee99xZKTdgMQ7kNvgEVta65&edm=AEhyXUkAAAAA&ccb=7-5&ig_cache_key=MzQyMDkzNDEwMjAyNDgwNjczMg%3D%3D.2-ccb7-5&oh=00_AYBF0-8_1IajFa5o_nedeGofi99YKJSV50hkFBATWwW7sQ&oe=66ACBCF0&_nc_sid=8f1549"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
         <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          </p>
                )}
          </div>
          <div id="social-box">
          <a href={`https://x.com/${social?.x || ``}`}>
          <svg
  id="twitter-icon"
  version="1.1"
  fill="#fff"
  width="24px"
  height="24px"
  viewBox="0 0 24 24"
  style={{ enableBackground: "new 0 0 24 24" }}
>
  <path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717 l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339 l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/>
</svg>
          </a>
          </div>
    </div>
  )
}

export default Bio
