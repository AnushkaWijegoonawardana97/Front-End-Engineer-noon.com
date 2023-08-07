import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../../components/Header'
import GridContainer from '../../../components/GridContainer'

async function getFavouritePosts() {
    const response = await fetch('http://localhost:5000/api/favourite')
    // console.log(response)

    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }

    return response.json()
}

const Favourite = async () => {
    const posts: any = await getFavouritePosts()

    return (
        <>
            <Header />
            <GridContainer Posts={posts} />
        </>
    )
}

Favourite.propTypes = {}

export default Favourite