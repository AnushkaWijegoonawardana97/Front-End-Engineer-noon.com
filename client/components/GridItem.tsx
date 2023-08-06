import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import noonLogo from "../src/testImage.jpg"

const GridItem = () => {
    return (
        <div className='post_item'>
            <Image src={noonLogo} alt="" />
            <div className="post_sticky_header">
                <div className="post_user"></div>
                <button className="post_fav_btn"></button>
            </div>
            <div className="post_content">
                <div className="post_header">32 Likes</div>
                <div className="post_title">Lorem ipsum dolor sit amet.</div>
                <div className="post_captions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere beatae fugiat tenetur quaerat recusandae?</div>
                <div className="post_comments">Lorem, ipsum dolor.</div>
                <div className="post_tags"></div>
            </div>
        </div>
    )
}

GridItem.propTypes = {}

export default GridItem