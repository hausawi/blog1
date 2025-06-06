import { createContext } from 'react';
import { posts } from '../assets/assets';

export const PostContext = createContext();

const PostContextProvider = (props) => {
	const value = {
		posts,
	};

	return (
		<PostContext.Provider value={value}>{props.children}</PostContext.Provider>
	);
};

export default PostContextProvider;
