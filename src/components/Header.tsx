
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='bg-white shadow-md'>
			{/* Георгиевская лента в верхней части сайта */}
			<div className='ribbon h-2 w-full'></div>

			<div className='container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between'>
				<div className='flex items-center justify-between mb-4 md:mb-0'>
					<div className='flex items-center space-x-2'>
						<img
							src='/logo.png'
							alt='Память Героев'
							style={{ width: 50, height: 36 }}
						/>
						<Link to='/' className='flex items-center'>
							<span className='text-3xl font-montserrat font-bold text-victory-dark-green'>
								Память Героев
							</span>
						</Link>
					</div>
				</div>

				<nav className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6'>
					<Link
						to='/'
						className='font-medium hover:text-victory-dark-red transition-colors'
					>
						Главная
					</Link>
					<Link
						to='/search'
						className='font-medium hover:text-victory-dark-green transition-colors'
						className='font-medium hover:text-victory-dark-red transition-colors'
					>
						Поиск ветеранов
					</Link>
					<Link
						to='/add'
						className='font-medium hover:text-victory-dark-green transition-colors'
						className='font-medium hover:text-victory-dark-red transition-colors'
					>
						Добавить историю
					</Link>
					<Link
						to='/search'
						className='inline-flex items-center justify-center px-4 py-2 bg-victory-dark-green text-white rounded-md hover:bg-green-800 transition-colors'
						className='inline-flex items-center justify-center px-4 py-2 bg-victory-dark-red text-white rounded-md hover:bg-red-900 transition-colors'
					>
						<Search className='w-4 h-4 mr-2' />
						<span>Найти ветерана</span>
					</Link>
				</nav>
			</div>
		</header>
	)
}

export default Header
