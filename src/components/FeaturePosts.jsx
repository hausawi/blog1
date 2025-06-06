
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PostContext } from '../context/PostContext';

const FeaturePosts = () => {
	const { posts } = useContext(PostContext)
	const [featuredPost, setFeaturedPost] = useState([])
	const [subFeaturedPost, setSubFeaturedPost] = useState([]);
	
	useEffect(() => {
		setFeaturedPost(posts.slice(5, 6))
		setSubFeaturedPost(posts.slice(1,4))
	},[])
	return (
		<div className='mt-8 mb-4 flex flex-col lg:flex-row gap-8'>
			{featuredPost.map((item, index1) => (
				<>
					{/* First */}
					<div key={index1}  className='w-full lg:w-1/2 flex flex-col gap-4'>
						{/* image */}
						<img src={item.img} className='rounded-3xl object-cover w-895' />
						{/* details */}
						<div className='flex items-center gap-4'>
							<h1 className='font-semibold lg:text-lg'>{item._id}</h1>
							<Link className='text-blue-800 lg:text-lg'>{item.category}</Link>
							<span className='text-gray-500'>{item.date}</span>
						</div>
						{/* title */}
						<Link className='text-xl lg:text-3xl font-bold' to='/posts'>
							{item.title}
						</Link>
					</div>
				</>
			))}

			{/* Others */}
			<div className='w-full lg:w-1/2 flex flex-col gap-4'>
				{subFeaturedPost.map((item, index) => (
					<>
						{/* second */}
						<div key={index} className=' lg:h-1/3 flex juctify-between gap-4'>
							<div className='w-1/3 aspect-video'>
								<img
									src={item.img}
									className='rounded-3xl object-cover '
									alt=''
									w='298'
								/>
							</div>
							{/* details and title */}
							<div className='w2/3'>
								{/* details */}
								<div className='flex items-center gap-4 text-sm lg:text-base mb-4'>
									<h1 className='font-semibold'>{item._id}</h1>
									<Link className='text-blue-800'>{item.category}</Link>
									<span className='text-gray-500 text-sm'>{item.date}</span>
								</div>
								{/* title */}
								<Link
									to='/posts'
									className='text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium '>
									{item.title}
								</Link>
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default FeaturePosts;
