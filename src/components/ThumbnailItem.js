import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const ThumbnailItem = ({ post }) => {
  const imageStyle = { borderRadius: '5px' }
  const { mainImage, title } = post.frontmatter
  return (
    <>
      <div
        className="content"
        style={{ border: '1px solid #333' }}
      >
        <Link className="has-text-primary" to={post.fields.slug}>
          <Img style={imageStyle} fluid={mainImage.childImageSharp.fluid} alt='' />
          {title}
        </Link>
      </div>
    </>
  )
}
