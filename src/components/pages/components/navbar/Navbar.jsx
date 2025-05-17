import "./Navbar.scss"
import stroke from '../../../../imges/stroke-like.png'

function Navbar({bookData}) {
	
	return (
		<div className='navbar'>
			<h3>Bookmarks</h3>
			{
				bookData.map((item) => {
					return item.like ? (
						<article key={item.id}>
							<img src={item.img} alt='books' />
							<div className='text'>
								<h3>{item.title.slice(0, 13) + "..."}</h3>
								<p>{item.author}</p>
								<img src={stroke} alt='stroke' />
							</div>
						</article>
					) : null
				})
			}
		</div>
	)
}

export default Navbar