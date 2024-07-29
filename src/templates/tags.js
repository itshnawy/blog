import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"

const TagsPage = ({ data }) => {
  const tags = data.allMarkdownRemark.group

  return (
    <div id="tagswrapper">
          <Layout location={location} title={siteTitle}>
      <ul>
        {tags.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${tag.fieldValue}/`}>{tag.fieldValue}</Link> ({tag.totalCount})
          </li>
        ))}
      </ul>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagsPage
