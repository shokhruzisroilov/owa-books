import { Outlet } from "react-router-dom"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../header/Header"


function Layouts() {
	const navigate = useNavigate()
	useEffect(() => {
		if (!localStorage.getItem('accessToken')) {
			navigate('/sign-in')
		}
	})
	return (
		<>
		<Header/>
		<Outlet />
		</>
	)
}

export default Layouts