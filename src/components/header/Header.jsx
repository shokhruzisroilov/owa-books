import "./Header.scss"
import { Link } from "react-router-dom"

import owaLogo from "../../imges/owa-logo.png"
import owaLogoDark from "../../imges/owa-logo-dark.png"
import moon from "../../imges/moon.png"
import sun from "../../imges/sun.png"
import { useState } from "react"

function Header({theme}) {
	let [mode, setMode] = useState(localStorage.getItem("mode") === 'true' || false)
	const changeTheme = () => {
		document.body.classList.toggle('dark')
		setMode(!mode)
		localStorage.setItem('mode', !mode)
	}
	return (
		<header>
			<div className='header__content'>
				<Link to='/home' className='header__logo'>
					{!mode ? (
						<img src={owaLogo} alt='owa logo' />
					) : (
						<img src={owaLogoDark} alt='owa logo' />
					)}
				</Link>
				<nav>
					<div className='dark-lite'>
						{!mode ? (
							<img src={moon} alt='moon img' onClick={changeTheme} />
						) : (
							<img src={sun} alt='moon img' onClick={changeTheme} />
						)}
					</div>
					<Link
						to='/sign-in'
						className='button'
						onClick={() => {
							localStorage.removeItem('accessToken')
						}}
					>
						Log out
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header