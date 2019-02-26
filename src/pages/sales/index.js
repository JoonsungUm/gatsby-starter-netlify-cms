import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { ThumbnailItem } from '../../components/ThumbnailItem'

class SaleRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const title = this.props.data.site.siteMetadata.title

    return (
      <Layout>
        <section className="section">
          <Helmet title={`Sales | ${title}`} />
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Sales</h1>
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

export default SaleRoute

export const salePageQuery = graphql`
  query SalePage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { isSale: { eq: true } } }
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
