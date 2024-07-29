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
            twitter
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
          Written by <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
          X Account
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
