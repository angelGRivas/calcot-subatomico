import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import styled from 'styled-components'

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostHeader = styled.header`
  padding: 1em 0;
`

class BlogList extends React.Component {
  render() {
    const { title, description } = this.props.data.site.siteMetadata
    const posts = this.props.data.posts.edges
    const { pageContext } = this.props

    return (
      <Layout location={this.props.location}>
        <SEO />
        <Hero title={title} subTitle={description} />

        <Wrapper>
          <PostHeader>
            <h2>Calçots subatómicos</h2>
          </PostHeader>

          <section>
            <Excerpt>
              Los Calçots subatómicos son una variedad de cebollas desarrollada
              por físicos de partículas. Estos calçots presentan una estructura
              subatómica única. Está estructura está formada por diferentes
              quarks que forman hadrones que diferencian estas verdudas de sus
              competidoras. Las calçotadas hechas con los calçots subatómicos
              tienen un sabor inigualable.
            </Excerpt>
          </section>
        </Wrapper>
        <Wrapper>
          <PostsList posts={posts} />
        </Wrapper>

        <Pagination
          nbPages={pageContext.nbPages}
          currentPage={pageContext.currentPage}
        />
      </Layout>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "//content/posts//" }
        frontmatter: { published: { ne: false }, unlisted: { ne: true } }
      }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            language
            slug
          }
        }
      }
    }
  }
`
