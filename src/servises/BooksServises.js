async function getData(url) {
	let res = await fetch(url)
	if (!res.ok) {
		throw new Error('Error please try to another way!!')
	}

	return await res.json()
}

export default getData
