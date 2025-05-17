import './HomePage.scss'
import { useState, useEffect, useContext } from 'react'
import getData from '../../servises/BooksServises'

import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'
import BooksItem from './components/booksItem/BooksItem'

function HomePage({value}) {
	let [bookData, setBookData] = useState([])
	let [temp, setTemp] = useState('')
	useEffect(() => {
		getData('https://owabooks.vercel.app/db.json')
		.then(data => {
			setBookData(data)
		})
	}, [])

	


	function searchItem(temp, books) {
		if (temp) {
			return books.filter(item => {
				return item.title.toLowerCase().includes(temp.toLowerCase())
			})
		} else {
			return books
		}
	}

	function onChangeStr(str) {
		return setTemp(str)
	}

	const changeLike = (id) => {
		const like = bookData.map((item) => {
			if(id === item.id){
				item = {...item, like: !item.like}
			}
			return item
		})
		setBookData(like)
	}
	let newData = searchItem(temp, bookData)
	return (
		<main>
			<div className='main__content'>	
				<Navbar bookData={bookData}/>
				<div className='main__home'>
					<Search onChangeStr={onChangeStr} temp={temp}/>
					<div className='books__items'>
						{newData?.map(item => {
							return (	
								<BooksItem
									changeLike={changeLike}
									bookData={bookData}
									key={item.id}
									id={item.id}	
									img={item.img}
									title={item.title}
									author={item.author}
									createdAt={item.createdAt}
									rate={item.rate}
									like={item.like}
								/>
							)
						})}
					</div>
				</div>
			</div>
		</main>
	)
}

export default HomePage
