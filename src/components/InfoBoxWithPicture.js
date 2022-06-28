const InfoBoxWithPicture = ({ item }) => {
	const { bigImgSrc, littleImgSrc, headingText, paragraphText } = item;
	return (
		<div className='info-box-container'>
			<div className='bigImage'>
				<img src={`${bigImgSrc}`} alt={`${headingText}`} />
			</div>
			<div className='additionalContent'>
				<h2>{`${headingText}`}</h2>
				<img src={`${littleImgSrc}`} alt={`${headingText}`} />
				<p>{`${paragraphText}`}</p>
			</div>
		</div>
	);
};
export default InfoBoxWithPicture;
