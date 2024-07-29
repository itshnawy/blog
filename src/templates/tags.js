import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import { Helmet } from "react-helmet"

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>الاقسام | مدونة شناوي</title>
          <link rel="canonical" href="/" />
        </Helmet>
      </div>
    )
  }
}
const TagsPage = ({ data , location}) => {
  const tags = data.allMarkdownRemark.group
  const siteTitle = data.site.siteMetadata?.title || `الاقسام`
  return (
    <div id="tagswrapper">
          <Layout location={location} title={siteTitle}>
          <Bio />
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
