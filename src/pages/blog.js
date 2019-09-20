import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Button from '../components/button'
import BlogStyles from '../components/project.module.css'


export default({data}) => (
  <Layout>
    <div style={masterDiv}>
    <p>Latest Posts -- {data.allMarkdownRemark.totalCount} total posts</p>

    {data.allMarkdownRemark.edges.map(({ node }) => (
      <section>
        <h2>{node.frontmatter.title}</h2>
        <p>{node.frontmatter.date}</p>
        <p>{node.excerpt}</p>
        <Button href={node.fields.slug} text="Read More"/>
        <div className={BlogStyles.line}></div>
      </section>
    ))}


    </div>
  </Layout>
)



const masterDiv ={
  display: 'flex',
  flexDirection: 'column',
  width: '60%',
  margin: '2rem auto'
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { tags: {eq: "blog"}} }
      sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`
