import { Image } from '@imagekit/react';

const Image = ({ src, className, w, h, alt }) => {
	return (
		<Img
			urlEndpoint={import.meta.env.VITE_URL_ENDPOINT}
			path={src}
			className={className}
			loading='lazy'
			lqip={{ active: true, quality: 20 }}
			alt={alt}
			transformation={[{ width: w, height: h }]}
		/>
	);
};

export default Img;
