import React from 'react'
import PropTypes from 'prop-types'
import GridContainer from '../../components/GridContainer'
import Header from '../../components/Header'
import { PostsInterface } from './interface'

async function getPosts() {
  const response = await fetch('http://localhost:5000/api/posts')
  // console.log(response)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

const Home: React.FC = async () => {
  const posts: any = await getPosts()

  return (
    <>
      <Header />
      <GridContainer Posts={posts} />
    </>
  )
}



Home.propTypes = {
  Posts: PropTypes.array,

}

export default Home