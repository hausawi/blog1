import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Image } from '@imagekit/react';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<div className='w-full h-16 md:h-20 flex items-center justify-between'>
			{/* LOGO */}
			<Link to='/' className='flex items-center gap-2 text-xl font-bold'>
				<Image
					urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
					src='https://ik.imagekit.io/r6yaoh57f/hcccs%20.png'
					width='40'
					height='40'
					alt='logo'
				/>
				<span>HCCCS</span>
			</Link>
			{/* MOBILE MENU */}
			<div className='md:hidden '>
				<div
					onClick={() => setOpen((prev) => !prev)}
					className='cursor-pointer text-4xl '>
					{open ? 'X' : '≡'}
				</div>
				{/* MOBILE LINK LIST */}
				<div
					className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 z-10 transition-all ease-in-out bg-[#e6e6ff] ${
						open ? '-right-[0%] ' : '-right-[100%] '
					}`}>
					<NavLink onClick={() => setOpen(false)} to={`/`}>
						الرئيسية
					</NavLink>
					<NavLink onClick={() => setOpen(false)} to={`/posts?cat=trending`}>
						المنشورات
					</NavLink>
					<NavLink onClick={() => setOpen(false)} to={`/videos?cat=trinding`}>
						الفيديوهات
					</NavLink>
					<NavLink onClick={() => setOpen(false)} to={`/about`}>
						نبذة عنا
					</NavLink>
					<Link to={`/login`}>
						<button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>
							تسجيل الدخول
						</button>
					</Link>
				</div>
			</div>
			{/* DESKTOP MENU */}
			<div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
				<NavLink to={`/`}>
					الرئيسية
					<hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden' />
				</NavLink>
				<NavLink to={`/posts?cat=trending`}>
					المنشورات
					<hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden' />
				</NavLink>
				<NavLink to={`/videos?cat=trinding`}>
					الفيديوهات
					<hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden' />
				</NavLink>
				<NavLink to={`/about`}>
					نبذة عنا
					<hr className='w-2/4 border-none h-[1.5px] bg-[#0046BB] hidden' />
				</NavLink>
				<SignedOut>
					<Link to={`/login`}>
						<button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>
							تسجيل الدخول 🖐
						</button>
					</Link>
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</div>
		</div>
	);
};

export default Navbar;
