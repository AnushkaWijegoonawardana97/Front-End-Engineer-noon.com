'use client';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import heartIcon from "../src/heart-solid.svg";
import noonLogo from "../src/testImage.jpg";
import likeIcon from "../src/thumbs-up-solid.svg";

const GridItem: FunctionComponent<any> = ({ post }) => {
    const onLikeButtonClick = async (id: any) => {
        console.log(id)

        const response = await fetch(`http://localhost:5000/api/favourite/like/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
                'Access-Control-Allow-Credentials': 'true'

            },
            body: JSON.stringify(''),
        })
        console.log(response)

        if (!response.ok) {
            if (response.status === 403 || response.status === 401) {
                // toast.error('No token included')
                return
            }
            // toast.error('Something Went Wrong')
        } else {
        }
    }

    return (
        <div className='post_item'>
            <Image src={noonLogo} alt="" />
            <div className="post_sticky_header">
                <div className="post_user">
                    <img src={post.avatar} />
                    {post.author}
                </div>
                <div className="post_buttons">
                    <div onClick={() => onLikeButtonClick(post._id)} id={post._id}>
                        <Image src={likeIcon} alt="" />
                    </div>
                    <div>
                        <Image src={heartIcon} alt="" />
                    </div>
                </div>
            </div>
            <div className="post_content">
                <div className="post_header">{post.likes} Likes {post._id}</div>
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