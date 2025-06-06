import { Image } from '@imagekit/react';
import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../context/PostContext';
import { assets } from '../assets/assets';

const Comment = () => {
	return (
		<div className='p-4 bg-slate-50 rounded-xl mb-8'>
			<div className='flex items-center gap-4'>
				<img
					src={assets.avatar}
					className='w-10 h-10 rounded-full object-cover'
					w='40'
				/>
				<span className='font-medium '>هوســاوي</span>
				<span className='text-sm text-gray-500'>07:33 PM - 2025/05/17</span>
			</div>

			<div className='mt-4'>
				<p>
					أصول قبائل الهوسا والأساطير والروايات التي وردت عنهم تعكس التاريخ
					الغني والمتنوع لهذا الشعب. أن هناك خلافات حول تفاصيل هذه القصص، إلا أن
					الأساطير والروايات الشفوية تلعب دوراً هاماً في فهم الهوية الثقافية
					والتاريخية للهوسا.
				</p>
			</div>
		</div>
	);
};

export default Comment;
