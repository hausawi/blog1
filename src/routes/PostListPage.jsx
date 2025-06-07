import React, { useContext, useEffect, useState } from 'react';
import PostListItem from '../components/PostListItem';
import { PostContext } from '../context/PostContext';
import Search from '../components/Search';
import { Link, useParams } from 'react-router-dom';


const PostListPage = () => {
	const {postId} = useParams()
	const [open, setOpen] = useState(false);
	const { posts } = useContext(PostContext);
	const [filterPosts, setFilterPost] = useState([]);
	const [category, setCategory] = useState([]);
	const [menu, setMenu] = useState([]);

	const toggleCategory = (e) => {
		if (category.includes(e.target.value)) {
			setCategory((prev) => prev.filter((item) => item !== e.target.value));
		} else {
			setCategory((prev) => [...prev, e.target.value]);
		}
	};

	const toggleMenu = (e) => {
		if (menu.includes(e.target.value)) {
			setMenu((prev) => prev.filter((item) => item !== e.target.value));
		} else {
			setMenu((prev) => [...prev, e.target.value]);
		}
	};

	const applyFilter = () => {
		let postsCopy = posts.slice();

		if (menu.length > 0) {
			postsCopy = postsCopy.filter((item) => menu.includes(item.menu));
		}

		if (category.length > 0) {
			postsCopy = postsCopy.filter((item) => category.includes(item.category));
		}
		setFilterPost(postsCopy);
	};

	useEffect(() => {
		applyFilter();
	}, [category, menu]);

	return (
		<div className='flex flex-col md:flex-row gap-12 '>
			<div className='lg:w-3/5 flex flex-col gap-8'>
				<h1 className='mb-8 text-2xl'>المنشورات والمقالات</h1>
				<button
					onClick={() => setOpen((prev) => !prev)}
					className='bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4 md:hidden'>
					{open ? 'Close' : 'Filter or Search'}
				</button>
				<div className='flex flex-col-reverse gap-8 md:flex-col lg:flex-col  '>
					{filterPosts.map((item, index) => (
						<div key={index} to={`/post/${item._id}`}>
							<PostListItem
								id={item._id}
								slug={item.slug}
								img={item.img}
								title={item.title}
								content={item.content}
								author={item.author}
								date={item.date}
							/>
						</div>
					))}
				</div>
			</div>
			<div className='px-4 h-max sticky top-8 sm:z-0 md:z-0'>
				<div className={`${open ? 'block' : 'hidden'} md:block`}>
					<h1 className='mb-4 text-sm font-medium '>بحث</h1>
					<Search />
					<h1 className='mb-4 text-sm font-medium '>تصفية</h1>
					<div className='flex flex-col gap-2 text-sm'>
						<p className='flex items-center gap-2 cursor-pointer'>
							<input
								onChange={toggleMenu}
								type='checkbox'
								value={'newest'}
								className=' w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm '
							/>{' '}
							جديد
						</p>
						<p className='flex items-center gap-2 cursor-pointer'>
							<input
								onChange={toggleMenu}
								type='checkbox'
								value={'popular'}
								className=' w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm '
							/>{' '}
							أكثر انتشارا
						</p>
						<p className='flex items-center gap-2 cursor-pointer'>
							<input
								onChange={toggleMenu}
								type='checkbox'
								value={'trending'}
								className=' w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm '
							/>{' '}
							رائج
						</p>
						<p className='flex items-center gap-2 cursor-pointer'>
							<input
								onChange={toggleMenu}
								type='checkbox'
								value={'oldest'}
								className=' w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm '
							/>{' '}
							قديم
						</p>
					</div>
					<h1 className='mt-8 mb-4 text-sm font-medium '>
						جمـــيع الموضــوعات
					</h1>
					<div className='flex flex-col gap-2 text-sm'>
						<div
							onClick={toggleCategory}
							className='underline gap-2'
							value={'origins'}>
							<input
								type='checkbox'
								value={'التاريخ-القديم'}
								className='ml-2 border-blue-800 cursor-pointer rounded-sm'
							/>
							التاريخ والاصول
						</div>
						<div onClick={toggleCategory} className='underline '>
							<input
								type='checkbox'
								value={'ثقافة'}
								className='ml-2 border-blue-800 cursor-pointer rounded-sm'
							/>{' '}
							الثقافة والتقاليد
						</div>
						<div onClick={toggleCategory} className='underline '>
							<input
								type='checkbox'
								value={'الدين'}
								className='ml-2 border-blue-800 cursor-pointer rounded-sm'
							/>
							الدين والفكر
						</div>
						<div onClick={toggleCategory} className='underline '>
							<input
								type='checkbox'
								value={'الإقتصاد'}
								className='ml-2 border-blue-800 cursor-pointer rounded-sm'
							/>
							الاقتصاد والتجارة
						</div>
						<div onClick={toggleCategory} className='underline '>
							<input
								type='checkbox'
								value={'التاريخ-الحديث'}
								className='ml-2 border-blue-800 cursor-pointer rounded-sm'
							/>
							التاريخ الحديث
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PostListPage;
