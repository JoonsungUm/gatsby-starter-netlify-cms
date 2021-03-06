import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { ThumbnailItem } from '../components/ThumbnailItem'

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">{tag}</h1>
            </div>
            {posts.map(({ node: post }) => (
              <ThumbnailItem post={post} key={post.id}/>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            mainImage {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
