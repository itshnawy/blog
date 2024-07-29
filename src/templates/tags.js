import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const TagsPage = ({ data , location}) => {
  const tags = data.allMarkdownRemark.group
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <div id="tagswrapper">
          <Layout location={location} title={siteTitle}/>
      
      <ul>
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>{tag.fieldValue}</Link> ({tag.totalCount})
          </li>
        ))}
      </ul>

    </div>
  )
}

export const pageQuery = graphql`
  query {
     site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage
