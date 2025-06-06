import React from 'react';
import { Link } from 'react-router-dom';

const MainCategories = () => {
	return (
		<div className='hidden  md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-1 '>
			{/* links */}
			<div className='flex-1 flex text-sm  items-center justify-between flex-wrap'>
				<Link
					to='/posts'
					className='bg-blue-800 text-white rounded-full px-4 py-2'>
					كافة الموضوعات
				</Link>
				<Link
					to='/posts?cat=web-design'
					className='hover-bg-blue-500 rounded-full px-2 py-2'>
					 التاريخ المبكر
				</Link>
				<Link
					to='/posts?cat=development'
					className='hover-bg-blue-500 rounded-full px-2 py-2'>
					الثقافة والتقاليد
				</Link>
				<Link
					to='/posts?cat=database'
					className='hover-bg-blue-500 rounded-full px-2 py-2'>
					التاريخ السياسي 
				</Link>
				<Link
					to='/posts?cat=seo'
					className='hover-bg-blue-500 rounded-full px-2 py-2'>
					الاقتصاد والتجارة
				</Link>
				<Link
					to='/posts?cat=marketing'
					className='hover-bg-blue-500 rounded-full px-2 py-2'>
					الدين والفكر
				</Link>
				<Link
					to='/posts?cat=marketing'
					className='hover-bg-blue-500 rounded-full px-2 py-2'>
					التأريخ  الحديث
				</Link>
			</div>
			<span className='text-xl font-medium'>|</span>
			{/* search */}
			<div className='bg-gray-100 p-2 rounded-full flex items-center gap-2 '>
				<svg
					width='30px'
					height='30px'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<g id='SVGRepo_bgCarrier' strokeWidth='0' />

					<g
						id='SVGRepo_tracerCarrier'
						strokeLinecap='round'
						strokeLinejoin='round'
					/>

					<g id='SVGRepo_iconCarrier'>
						{' '}
						<path
							d='M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
							stroke='#000000'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>{' '}
					</g>
				</svg>
				<input
					type='text'
					placeholder='search a post...'
					className='bg-transparent '
				/>
			</div>
		</div>
	);
};

export default MainCategories;
