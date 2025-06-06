import React, { useContext, useEffect, useState } from 'react';
import PostListItem from './PostListItem';
import { PostContext } from '../context/PostContext';

const PostList = () => {
	const { posts } = useContext(PostContext);
	const [recentPosts, setRecentPosts] = useState([]);
	useEffect(() => {
		setRecentPosts(posts);
	}, []);
	return (
		<div className='flex flex-col gap-12 mb-8 '>
			{recentPosts && recentPosts.map((item, index) => (
				<PostListItem
					key={index}
					id={item._id}
					slug={item.slug}
					img={item.img}
					title={item.title}
					comments={item.comments}
					content={item.content}
					author={item.author}
					date={item.date}
				/>
			))}
		</div>
	);
};

export default PostList;
