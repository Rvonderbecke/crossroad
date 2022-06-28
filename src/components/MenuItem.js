const MenuItem = ({ item }) => {
    const { htmlFor, id, labelText, className, name, onClick } = item;
	return (
		<>
			<label htmlFor={`${htmlFor}`} id={`${id}`} className='symbolLabel'>
				{`${labelText}`}
			</label>
			<button className={`${className} menuSymbol`} name={`${name}`} onClick={onClick} />
		</>
	);
};
export default MenuItem;
