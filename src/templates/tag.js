import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Bio from "../components/bio"
import Seo from "../components/seo"

const TagPage = ({ data, pageContext }) => {
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.edges
  
  return (
    <div id="tagswrapper">
               <Layout location='/' title={siteTitle}>
               <Bio /> 
      <h3>التدوينات التابعه للقسم "{tag}"</h3>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.fields.slug}>
            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
      </Layout>
    </div>
  )
}
export const Head = () => <Seo title={tag} />
export const pageQuery = graphql`
  query($tag: String) {
       site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

export default TagPage
