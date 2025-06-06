import { Image } from '@imagekit/react';
import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../context/PostContext';
import { Link } from 'react-router-dom';

const PostListItem = () => {
	const { posts } = useContext(PostContext);
	const [postItem, setPostItem] = useState([]);
	useEffect(() => {
		setPostItem(posts.slice());
	}, []);

	return (
		<div className=' lg:flex-col flex-col flex xl:flex-col gap-8'>
			{/* details */}
			{
				postItem.map((item, index) => (
					<div key={index}>
						<Link to={`/posts/:postId`} className=' xl:block xl:w-full'>
							<img
								className='rounded-2xl object-cover w-735'
								src={item.img[0]}
							/>
						</Link>
						<div className='flex flex-col gap-4 xl:w-full'>
							<Link to={`/posts/:postId`} className='text-4xl font-semibold '>
								{item.title}
							</Link>
							<div className='flex items-center gap-2 text-gray-400 text-sm'>
								<span>نشر بواسطة</span>
								<Link className='text-bold'>{item.author}</Link>
								<span>في</span>
								<Link className='text-bold'>{item.category}</Link>
								<span>{item.date}</span>
							</div>
							<p className='text-justify'>{item.content}</p>
							<Link
								to={`/posts/:postId`}
								className='underline text-blue-800 text-sm'>
								إقراء المــزيد
							</Link>
						</div>
					</div>
				))}
		</div>
	);
};

export default PostListItem;
