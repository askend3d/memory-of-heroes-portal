import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SearchBar from '@/components/SearchBar'
import VeteranCard from '@/components/VeteranCard'
import { useState } from 'react'

const SearchPage = () => {
	// Моковые данные о ветеранах для примера
	const allVeterans = [
		{
			id: 1,
			name: 'Иванов Иван Петрович',
			years: '1919 — 2001',
			rank: 'Старший лейтенант',
			service: 'Пехота',
			photo: 'https://i.ibb.co/s9TTCH1/veteran1.jpg',
			awards: ['Орден Красной Звезды', 'Медаль «За отвагу»'],
		},
		{
			id: 2,
			name: 'Петров Михаил Сергеевич',
			years: '1922 — 1995',
			rank: 'Капитан',
			service: 'Артиллерия',
			photo: 'https://i.ibb.co/YP8Y9KL/veteran2.jpg',
			awards: ['Орден Отечественной войны'],
		},
		{
			id: 3,
			name: 'Сидорова Анна Ивановна',
			years: '1924 — 2010',
			rank: 'Старшина медицинской службы',
			service: 'Медицинская служба',
			photo: 'https://i.ibb.co/JR9SgyG/veteran3.jpg',
			awards: ['Медаль «За боевые заслуги»'],
		},
		{
			id: 4,
			name: 'Кузнецов Алексей Дмитриевич',
			years: '1920 — 1943',
			rank: 'Гвардии майор',
			service: 'Танковые войска',
			photo: 'https://i.ibb.co/dM6G8Lz/veteran4.jpg',
			awards: ['Орден Красного Знамени'],
		},
		{
			id: 5,
			name: 'Смирнов Николай Иванович',
			years: '1918 — 1985',
			rank: 'Рядовой',
			service: 'Пехота',
			photo: 'https://i.ibb.co/CWqyM8J/veteran5.jpg',
		},
		{
			id: 6,
			name: 'Козлова Мария Петровна',
			years: '1923 — 2005',
			rank: 'Сержант',
			service: 'Связь',
			photo: 'https://i.ibb.co/JBysz3r/veteran6.jpg',
			awards: ['Медаль «За оборону Москвы»'],
		},
		{
			id: 7,
			name: 'Морозов Павел Сергеевич',
			years: '1925 — 1970',
			rank: 'Младший лейтенант',
			service: 'Авиация',
			photo: 'https://i.ibb.co/Y8Ls9Hr/veteran7.jpg',
			awards: ['Орден Красной Звезды'],
		},
		{
			id: 8,
			name: 'Соколов Дмитрий Алексеевич',
			years: '1917 — 1944',
			rank: 'Капитан',
			service: 'Артиллерия',
			photo: 'https://i.ibb.co/7nTDbtZ/veteran8.jpg',
			awards: ['Орден Отечественной войны I степени'],
		},
	]

	const [searchResults, setSearchResults] = useState(allVeterans)
	const [searchQuery, setSearchQuery] = useState('')
	const [sortBy, setSortBy] = useState('name')

	const handleSearch = (query: string) => {
		setSearchQuery(query)

		if (!query.trim()) {
			setSearchResults(allVeterans)
			return
		}

		const filtered = allVeterans.filter(
			veteran =>
				veteran.name.toLowerCase().includes(query.toLowerCase()) ||
				veteran.rank.toLowerCase().includes(query.toLowerCase()) ||
				veteran.service.toLowerCase().includes(query.toLowerCase())
		)

		setSearchResults(filtered)
	}

	const handleSort = (sortType: string) => {
		setSortBy(sortType)

		const sortedResults = [...searchResults].sort((a, b) => {
			if (sortType === 'name') {
				return a.name.localeCompare(b.name)
			} else if (sortType === 'birthYear') {
				const yearA = parseInt(a.years.split(' — ')[0])
				const yearB = parseInt(b.years.split(' — ')[0])
				return yearA - yearB
			} else if (sortType === 'service') {
				return a.service.localeCompare(b.service)
			}
			return 0
		})

		setSearchResults(sortedResults)
	}

	return (
		<div className='flex flex-col min-h-screen'>
			<Header />
			<main className='flex-grow bg-gray-50 py-12'>
				<div className='container mx-auto px-4'>
					<h1 className='text-3xl font-bold mb-8 text-center text-victory-dark-blue'>
						Поиск ветеранов
					</h1>

					<div className='mb-8'>
						<SearchBar onSearch={handleSearch} />
					</div>

					<div className='mb-6'>
						<div className='flex justify-between items-center'>
							<p className='text-gray-700'>
								{searchQuery
									? `Результаты поиска для "${searchQuery}" (${searchResults.length})`
									: `Все ветераны (${allVeterans.length})`}
							</p>
							<div className='flex items-center space-x-2'>
								<span className='text-sm text-gray-600'>Сортировать по:</span>
								<select
									className='border border-gray-300 rounded-md py-1 pl-2 pr-8 focus:outline-none focus:ring-2 focus:ring-victory-dark-red text-sm'
									value={sortBy}
									onChange={e => handleSort(e.target.value)}
								>
									<option value='name'>Имени</option>
									<option value='birthYear'>Году рождения</option>
									<option value='service'>Роду войск</option>
								</select>
							</div>
						</div>
					</div>

					{searchResults.length > 0 ? (
						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
							{searchResults.map(veteran => (
								<VeteranCard key={veteran.id} {...veteran} />
							))}
						</div>
					) : (
						<div className='text-center py-10'>
							<p className='text-gray-700 text-lg mb-4'>
								По вашему запросу ничего не найдено
							</p>
							<button
								onClick={() => handleSearch('')}
								className='text-victory-dark-red hover:text-victory-gold transition-colors'
							>
								Сбросить поиск
							</button>
						</div>
					)}
				</div>
			</main>
			<Footer />
		</div>
	)
}

export default SearchPage
