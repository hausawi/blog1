import { createRoot } from 'react-dom/client';
import './index.css';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import PostListPage from './routes/PostListPage.jsx';
import WritePage from './routes/WritePage.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';
import SinglePostPage from './routes/SinglePostPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import { StrictMode } from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import AboutPage from './routes/AboutPage.jsx';
import PostContextProvider from './context/PostContext.jsx';
import HomePage from './routes/HomePage.jsx';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}

const router = createBrowserRouter([
	{
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/posts',
				element: <PostListPage />,
			},
			{
				path: '/posts/:postId',
				element: <SinglePostPage />,
			},
			{
				path: '/write',
				element: <WritePage />,
			},
			{
				path: '/login',
				element: <LoginPage />,
			},
			{
				path: '/register',
				element: <RegisterPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<PostContextProvider>
				<RouterProvider router={router} />
			</PostContextProvider>
		</ClerkProvider>
	</StrictMode>,
);
