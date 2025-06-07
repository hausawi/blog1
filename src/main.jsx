import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import PostContextProvider from './context/PostContext.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import LoginPage from './routes/LoginPage.jsx';
import RegisterPage from './routes/RegisterPage.jsx';

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error('Missing Publishable Key');
}

// const router = createBrowserRouter([
// 	{
// 		element: <MainLayout />,
// 		children: [
// 			{
// 				path: '/login',
// 				element: <LoginPage />,
// 			},
// 			{
// 				path: '/register',
// 				element: <RegisterPage />,
// 			},
// 		],
// 	},
// ]);
// 			{
// 				path: '/posts',
// 				element: <PostListPage />,
// 			},
// 			{
// 				path: '/post/:postId',
// 				element: <SinglePostPage />,
// 			},
// 			{
// 				path: '/write',
// 				element: <WritePage />,
// 			},
// 			{
// path: '/',
// element: <HomePage />,
//
// 			},
			
// 			{
// 				path: '/about',
// 				element: <AboutPage />,
// 			},
// 		],
// 	},
// ]);

createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<PostContextProvider>
				<App />
			</PostContextProvider>
		</ClerkProvider>
	</BrowserRouter>,
);
