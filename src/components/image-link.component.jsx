import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ image }) => {
	return (
		
		<div className='image-link'>
			<Link to={`/${image.location}`} className='link-image'>
				<img src={image.imageURL} alt={image.title} />
			</Link>
		</div>
		
	);
};

export default ImageLink;
