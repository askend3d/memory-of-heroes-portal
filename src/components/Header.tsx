import { Search } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const location = useLocation()
	const isHomePage = location.pathname === '/'

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const shouldBeTransparent = isHomePage && !isScrolled

	return (
		<header 
			className={`fixed top-0 left-0 right-0 transition-all duration-300 z-50 ${
				shouldBeTransparent 
					? 'bg-transparent' 
					: 'bg-gray-100 shadow-md'
			}`}
		>
			{/* Георгиевская лента в верхней части сайта */}
			<div className='flex items-center justify-between'>
				<div className='container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between'>
					<div className='flex items-center justify-between mb-4 md:mb-0'>
						<div className='flex items-center space-x-2 gap-10'>
							<img
								src='/logo.png'
								alt='Память Героев'
								style={{ width: 75, height: 50 }}
							/>
							<Link to='/' className='flex items-center'>
								<span className={`text-3xl font-montserrat font-bold transition-colors duration-300 ${
									shouldBeTransparent ? 'text-white' : 'text-victory-dark-green'
								}`}>
									Память Героев
								</span>
							</Link>
						</div>
					</div>

					<nav className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6'>
						<Link
							to='/'
							className={`font-medium transition-colors duration-300 ${
								shouldBeTransparent ? 'text-white hover:text-gray-200' : 'text-victory-dark-green hover:text-green-800'
							}`}
						>
							Главная
						</Link>
						<Link
							to='/add'
							className={`font-medium transition-colors duration-300 ${
								shouldBeTransparent ? 'text-white hover:text-gray-200' : 'text-victory-dark-green hover:text-green-800'
							}`}
						>
							Добавить историю
						</Link>
						<Link
							to='/search'
							className={`inline-flex items-center font-medium justify-center px-4 py-2 rounded-md transition-colors duration-300 ${
								shouldBeTransparent ? 'text-white hover:text-gray-200' : 'text-victory-dark-green hover:text-green-800'
							}`}
						>
							<Search className='w-4 h-4 mr-2' />
							<span>Найти ветерана</span>
						</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Header
