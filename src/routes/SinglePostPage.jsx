import { Image } from '@imagekit/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import PostMenuAction from '../components/PostMenuAction';
import Search from '../components/Search';
import Comments from '../components/Comments';
import { PostContext } from '../context/PostContext';

const SinglePostPage = () => {
	const { postId } = useParams();
	console.log(postId)
	const { posts } = useContext(PostContext);
	const [postData, setPostData] = useState(false);

	const fetchPostData = async () => {
		posts.map((item) => {
			if (item._id === postId) {
				setPostData(item);
				return null;
			}
		});
	};
	useEffect(() => {
		fetchPostData();
	}, [postId, posts]);

	return postData ? (
		<div className='flex flex-col gap-8'>
			{/* details */}
			<div className='flex gap-8'>
				<div className='lg:w-3/5 flex flex-col gap-8'>
					<div>
						<h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>
							{postData.desc}
						</h1>
						<div className='flex items-center gap-2 text-gray-400 text-sm'>
							<span>نشر بواسطة</span>
							<Link>{postData.author}</Link>
							<span>في</span>
							<Link>{postData.category}</Link>
							<span>{postData.date}</span>
						</div>
						<p className='text-gray-500 font-medium'>{postData.desc}</p>
					</div>
				</div>
				<div className='hidden lg:block w-2/5'>
					<img width='600' className='rounded-2xl' src={postData.img} />
				</div>
			</div>
			{/* content */}
			<div className='flex flex-col md:flex-row gap-12 '>
				{/* text */}

				<div className='lg:text-lg flex flex-col gap-6 text-justify'>
					<div>
						<div className='w-full lg:hidden'>
							<img width='600' className='rounded-2xl' src={postData.img} />
						</div>
						<p className=''>{postData.content}</p>
					</div>
				</div>
				{/* menu */}
				<div className='px-4 h-max sticky top-8'>
					<h1 className=' mb-4 text-sm font-medium'> الناشــر</h1>
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
						<Link className='underline' to={`/posts?cat=origins`}>
							{' '}
							الاصول والتاريخ
						</Link>

						<Link className='underline' to={`/posts?cat=religen`}>
							{' '}
							الدين والفكر
						</Link>

						<Link className='underline' to={`/posts?cat=economy`}>
							{' '}
							الاقتصاد والتجارة
						</Link>

						<Link className='underline' to={`/posts?cat=culture`}>
							{' '}
							الثقافة والتقاليد
						</Link>
						<Link className='underline' to={`/posts?cat=modern-history`}>
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
	) : (
		<div className='opacity-0'></div>
	);
};

export default SinglePostPage;
