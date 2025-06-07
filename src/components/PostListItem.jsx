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
			{postItem.map((item, index) => (
				<div key={index}>
					<div  className=' xl:block xl:w-full'>
						<img className='rounded-2xl object-cover w-735' src={item.img[0]} />
					</div>
					<div className='flex flex-col gap-4 xl:w-full'>
						<div  className='text-4xl font-semibold '>
							{item.title}
						</div>
						<div className='flex items-center gap-2 text-gray-400 text-sm'>
							<span>نشر </span>
							<div className='text-bold'>{item.author}</div>
							<span>في</span>
							<div className='text-bold'>{item.category}</div>
							<span>{item.date}</span>
						</div>
						<p className='text-justify'>{item.content}</p>
						<Link
							to={`/post/${item._id}`}
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
