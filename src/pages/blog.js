import React from 'react'
import Layout from '../components/layout'
import Button from '../components/button'
import Blog from '../components/blog'

export default(props) => (
  <Layout>
    <div style={masterDiv}>
    <p>Latest Posts</p>
    <Blog date="Jan 28, 2019" title="Faster Active Record Queries" href="/blog/faster-active-record-queries" text="Read More"/>
    <Blog date="Jan 28, 2019" title="Faster Active Record Queries" href="/blog/faster-active-record-queries" text="Read More"/>
    <Blog date="Jan 28, 2019" title="Faster Active Record Queries" href="/blog/faster-active-record-queries" text="Read More"/>


    </div>
  </Layout>
)

const masterDiv ={
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  margin: '2rem auto'
}
