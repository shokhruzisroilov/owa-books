import "./BookItemSmall.scss"

function BookItemSmall({ title, author, createdAt, rate, img }) {
	const titleStr = () => {
		let item = { title }.title
		if (item.length >= 20) {
			return item.slice(0, 20) + '..'
		} else {
			return item
		}
	}
	return (
		<>
			<div className='books__small'>
				<img src={img} alt='book small' />
				<h3>{titleStr()}</h3>
				<h4>{author}, {createdAt}</h4>
				<p>{rate}/5</p>
			</div>
		</>
	)
}

export default BookItemSmall