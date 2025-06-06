import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainCategories from '../components/MainCategories';
import FeaturePosts from '../components/FeaturePosts';
import PostList from '../components/PostList';
import { PostContext } from '../context/PostContext';

const HomePage = () => {
	const { posts } = useContext(PostContext);
	return (
		<div className='mt-4 flex flex-col gap-4 '>
			{/* BREADCRUMB */}
			<div className='flex gap-4'>
				<Link to='/'>الرئيسية</Link>
				<span>◉</span>
				<span className='text-blue-800'>المقالات والمـنشورات</span>
			</div>
			{/* INTRODUCTION */}
			<div className='flex items-center justify-center'>
				{/* titles */}
				<div className=''>
					<h1 className='  text-gray-800 text-xl md:text-2xl lg:text-6xl font-bold'>
						المجلس المركزي لتنسيقية الهوسا بالسودان |
					</h1>
					<h1 className=' justify-end items-start pr-80 text-gray-800 text-xl md:text-xl lg:text-2xl font-bold'>
						Hausa Co-ordination Central Council in Sudan
					</h1>
					<p className='mt-8 text-sm md:text-md text-justify'>
						للتأريخ عن شعوب أمة بعينها، هناك عدة محاور مهمة يجب أخذها في
						الاعتبار لضمان تقديم صورة دقيقة وشاملة لتاريخهم. يجب البحث عن أصول
						الشعب وتاريخهم المبكر، بما في ذلك هجراتهم، واستيطانهم، وتطورهم
						الاجتماعي والثقافي. دراسة الأساطير والروايات الشفوية والتي تناقلتها
						الأجيال و التقاليد والعادات الاجتماعية، يمكن أن توفر رؤى قيمة حول
						تاريخهم المبكر وثقافتهم.
					</p>
				</div>
				{/* animated button */}
				<Link to='/' className=' relative hidden md:block'>
					<svg
						width='180'
						height='180'
						viewBox='6 -39 110 200'
						// className='text-lg tracking-widest '>
						className='text-2lg tracking-widest animate-spin animatedButton'>
						<path
							id='circlePath'
							fill='none'
							d='M61.438,0c33.93,0,61.441,27.512,61.441,61.441 c0,33.929-27.512,61.438-61.441,61.438C27.512,122.88,0,95.37,0,61.441C0,27.512,27.512,0,61.438,0L61.438,0z'
						/>
						<text>
							<textPath href='#circlePath' startOffset='100%'>
								المجلس المركزي لتنسيقية الهوسا بالسـودان•
							</textPath>
							<textPath href='#circlePath' startOffset='21%'>
								HCCCS
							</textPath>
						</text>
					</svg>
					<button className=' absolute top-0 right-0 left-0 bottom-0 w-20 h-20 m-auto bg-blue-800 rounded-full flex items-center justify-center'>
						<svg
							width='50px'
							height='50px'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								d='M16.3891 8.11096L8.61091 15.8891'
								stroke='white'
								strokeWidth='2'
							/>
							<path
								d='M16.3891 8.11096L16.7426 12'
								stroke='white'
								strokeWidth='2'
							/>
							<path
								d='M16.3891 8.11096L12.5 7.75741'
								stroke='white'
								strokeWidth='2'
							/>
						</svg>
					</button>
				</Link>
			</div>
			{/* Categories */}
			<MainCategories />
			{/* FEATURE POSTS */}
			<FeaturePosts />
			{/* POST LIST */}
			<div className=''>
				<h1 className='my-8 text-2xl text-gray-600'>أحــدث المنشورات</h1>
				<PostList />
			</div>
		</div>
	);
};

export default HomePage;

// r6yaoh57f
// https://ik.imagekit.io/r6yaoh57f/path/to/myimage.jpg
