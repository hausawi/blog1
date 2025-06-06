import { useUser } from '@clerk/clerk-react';
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from 'react-quill-new';

const WritePage = () => {
	const { isLoaded, isSignedIn } = useUser();

	if (!isLoaded) {
		return <div className=''>جاري التنفيذ...</div>;
	}

	if (isLoaded && !isSignedIn) {
		return <div>قم بتسجيل الدخول!</div>;
	}
	return (
		<div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
			<h1 className='text-xl font-light'>Create a New Post</h1>
			<form className='flex flex-col gap-6 flex-1 mb-6'>
				<button className='w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-green-200'>تحميل صورة</button>
				<input className='text-4xl font-semibold bg-transparent outline-none' type='text' placeholder='Write Your Thought' />
				<div className='flex items-center gap-4'>
					<label className='text-sm' htmlFor=''>اختيار موضوع:</label>
					<select className='p-2 rounded-xl bg-white shadow-md' name='cat' id=''>
						<option value='general'>عام</option>
						<option value='web-design'>التاريخ</option>
						<option value='developemnt'>الدين والفكر</option>
						<option value='database'>الاقتصاد</option>
						<option value='seo'>الثقافة</option>
						<option value='marketing'>السياسة</option>
					</select>
				</div>
				<textarea className='p-4 rounded-xl bg-white shadow-md' name='desc' placeholder='A Short Description' />
        <ReactQuill theme='snow' className='flex-1 bg-white shadow-md rounded-xl'/>
        <button className='bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36'>نشر</button>
			</form>
		</div>
	);
};

export default WritePage;
