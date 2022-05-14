import React from 'react';
import { Link } from 'react-router-dom';

const ImageLink = ({ image }) => {
  
	return (
		<div className='testing'>
      <Link to={`/${image.location}` }className='link-image'>
				<img src={image.imageURL} alt={image.title}  />
			</Link>
			<div>
				<h2>{image.title}</h2>
			</div>
		</div>
	);
};

export default ImageLink;
