import { Image } from '@imagekit/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PostMenuAction from '../components/PostMenuAction';
import Search from '../components/Search';
import Comments from '../components/Comments';
import { PostContext } from '../context/PostContext';

const SinglePostPage = () => {
	const { postId } = useParams()
	console.log(postId)
	const { posts } = useContext(PostContext);
	const [postData, setPostData] = useState([]);

	const fetchPostData = async () => {
		
		posts.map((item) => {
			if (item._id === postId) {
				setPostData(item)
				console.log(item)
			}
		})
	}
	useEffect(() => {
		setPostData(posts.slice(-1));
	}, [postId]);

	return (
		<div className='flex flex-col gap-8'>
			{/* details */}
			<div className='flex gap-8'>
				<div className='lg:w-3/5 flex flex-col gap-8'>
					{postData.map((item, index) => (
						<div key={index}>
							<h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
								{item.desc}
							</h1>
							<div className='flex items-center gap-2 text-gray-400 text-sm'>
								<span>نشر بواسطة</span>
								<Link>{item.author}</Link>
								<span>في</span>
								<Link>{item.category}</Link>
								<span>{item.date}</span>
							</div>
							<p className='text-gray-500 font-medium'>{item.desc}</p>
						</div>
					))}
				</div>
				<div className='hidden lg:block w-2/5'>
					{postData.map((item, index) => (
						<div key={index}>
							<img
								key={index}
								width='600'
								className='rounded-2xl'
								src={item.img}
							/>
						</div>
					))}
				</div>
			</div>
			{/* content */}
			<div className='flex flex-col md:flex-row gap-12 '>
				{/* text */}

				<div className='lg:text-lg flex flex-col gap-6 text-justify'>
					{postData.map((item, index) => (
						<div key={index}>
							<div className='w-full lg:hidden'>
								<img
									
									width='600'
									className='rounded-2xl'
									src={item.img}
								/>
							</div>
							<p>{item.content}</p>
						</div>
					))}
				</div>
				{/* menu */}
				<div className='px-4 h-max sticky top-8'>
					<h1 className=' mb-4 text-sm font-medium'> الكاتب</h1>
					<div className='flex flex-col gap-4'>
						<div className='flex items-center gap-8 '>
							<Image
								width='48'
								height='48'
								className='rounded-full object-cover'
								urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
								src='https://ik.imagekit.io/r6yaoh57f/profile.png?updatedAt=1748803009317'
							/>
							<Link className='text-blue-800'>حيدر هوساوي</Link>
						</div>
						<p className='text-gray-500 text-sm'>
							تابعنا علي مواقع التواصل الاخرى
						</p>
						<div className='flex gap-2'>
							<Link>
								<Image
									width='30'
									height='30'
									className='rounded-full object-cover'
									urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
									src='https://ik.imagekit.io/r6yaoh57f/github.png'
								/>
							</Link>
							<Link>
								<Image
									width='30'
									height='30'
									className='rounded-full object-cover'
									urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
									src='https://ik.imagekit.io/r6yaoh57f/youtube.jpg'
								/>
							</Link>
							<Link>
								<Image
									width='30'
									height='30'
									className='rounded-full object-cover'
									urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
									src='https://ik.imagekit.io/r6yaoh57f/linkedin.png'
								/>
							</Link>
						</div>
					</div>
					<PostMenuAction />
					<h1 className='mt-8 mb-4 text-sm font-medium'>الموضوعات</h1>
					<div className='flex flex-col gap-2 text-sm'>
						<Link className='underline' to='/posts'>
							كافة الموضوعات
						</Link>
						<Link className='underline' to='/posts?cat=origins'>
							{' '}
							الاصول والتاريخ
						</Link>

						<Link className='underline' to='/posts?cat=religen'>
							{' '}
							الدين والفكر
						</Link>

						<Link className='underline' to='/posts?cat=economy'>
							{' '}
							الاقتصاد والتجارة
						</Link>

						<Link className='underline' to='/posts?cat=culture'>
							{' '}
							الثقافة والتقاليد
						</Link>
						<Link className='underline' to='/posts?cat=modern-history'>
							{' '}
							التاريح الحديث
						</Link>
					</div>
					<h1 className='mt-8 mb-4 text-sm font-medium'>بحث</h1>
					<Search />
				</div>
			</div>
			<Comments />
		</div>
	);
};

export default SinglePostPage;
