import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './routes/HomePage';
import PostListPage from './routes/PostListPage';
import SinglePostPage from './routes/SinglePostPage';
import WritePage from './routes/WritePage';
import LoginPage from './routes/LoginPage';
import RegisterPage from './routes/RegisterPage';
import AboutPage from './routes/AboutPage';
import VideoListPage from './routes/VideoListPage';


function App() {
	return (
		<div className='px-4 md:px-8 lg:px-16 lx:px-32 2xl:px-64 '>
			{/* NAVBAR */}
			<Navbar />
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/posts' element={<PostListPage />} />
				<Route path='/videos' element={<VideoListPage />} />
				<Route path='/post/:postId' element={<SinglePostPage />} />
				<Route path='/write' element={<WritePage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />
				<Route path='/about' element={<AboutPage />} />
			</Routes>
			{/* BREADCRUMB */}
			{/* INTRODUCTION */}
			{/* FEATURE POSTS */}
			{/* POST LIST */}
		</div>
	);
}

export default App;
