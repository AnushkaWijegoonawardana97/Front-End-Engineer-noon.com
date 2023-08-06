import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import noonLogo from "../src/testImage.jpg"

const GridItem: FunctionComponent<any> = ({ post }) => {
    return (
        <div className='post_item'>
            <Image src={noonLogo} alt="" />
            <div className="post_sticky_header">
                <div className="post_user"></div>
                <button className="post_fav_btn"></button>
            </div>
            <div className="post_content">
                <div className="post_header">{post.likes} Likes</div>
                <div className="post_title">{post.title.substring(0, 20)}...</div>
                <div className="post_captions">{post.description}</div>
                {/* <div className="post_comments">Lorem, ipsum dolor.</div> */}
                {/* <div className="post_tags"></div> */}
            </div>
        </div>
    )
}

GridItem.propTypes = {}

export default GridItem