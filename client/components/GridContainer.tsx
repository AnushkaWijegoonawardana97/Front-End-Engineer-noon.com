import React, { FunctionComponent, PropsWithChildren } from 'react'
import PropTypes from 'prop-types'
import GridItem from './GridItem'
import { PostsInterface } from '@/app/interface'

const GridContainer: FunctionComponent<any> = ({ Posts }) => {
    return (
        <div className='post_list'>
            {Posts.map((postItem: any) => <GridItem key={postItem.id} post={postItem} />)}
        </div>
    )
}

GridContainer.propTypes = {

}

export default GridContainer