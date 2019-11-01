import React from 'react'
import Layout from '../components/layout'
import Project from '../components/project'
import { graphql } from 'gatsby'


export default({data})=> (
  <Layout>
    <div style={masterDiv}>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Project
            title={node.frontmatter.title}
            excerpt={node.internal.content}
            href={node.frontmatter.href}
            buttonText={node.frontmatter.buttonText}
            type={node.frontmatter.type}
            img={node.frontmatter.img.publicURL}
            />
        ))}

    </div>

  </Layout>
)

const masterDiv ={
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  margin: '2rem auto'
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter:{ tags: {eq: "project" }}
      }) {
      totalCount
      edges {
        node {
          id
          internal {
            content
          }
          frontmatter {
            title
            type
            href
            buttonText
            img {
              publicURL
            }
          }
        }
      }
    }
  }
`
