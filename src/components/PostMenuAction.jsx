import React from 'react'

const PostMenuAction = () => {
  return (
		<div className=''>
			<h1 className='mt-8 mb-4 text-sm font-medium'>خيارات</h1>
			<div className='flex items-center gap-2 text-sm cursor-pointer'>
				<svg
					width='20px'
					height='20px'
					viewBox='0 0 24 24'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2ZM15.0103 9.75C14.0403 10.1 13.0203 10.28 12.0003 10.28C10.9803 10.28 9.96031 10.1 8.99031 9.75C8.60031 9.61 8.40031 9.18 8.54031 8.79C8.69031 8.4 9.12031 8.2 9.51031 8.34C11.1203 8.92 12.8903 8.92 14.5003 8.34C14.8903 8.2 15.3203 8.4 15.4603 8.79C15.6003 9.18 15.4003 9.61 15.0103 9.75Z'
						fill='#292D32'
					/>
				</svg>
				<span>حفظ المنشور</span>
			</div>
			<div className='flex items-center gap-2 text-sm cursor-pointer'>
				<svg
					fill='#000000'
					width='20px'
					height='20px'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<path d='M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z' />
				</svg>
				<span>حذف المنشور</span>
			</div>
		</div>
	);
}

export default PostMenuAction 