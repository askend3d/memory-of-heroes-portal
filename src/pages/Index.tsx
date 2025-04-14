import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import VeteranCard from '@/components/VeteranCard'
import { useState } from 'react'

const Index = () => {
	// Моковые данные о ветеранах для примера
	const [featuredVeterans] = useState([
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
	])

	return (
		<div className='flex flex-col min-h-screen'>
			{/* Hero секция с Header поверх нее */}
			<div className='relative h-screen'>
				<div className='absolute inset-0 z-0'>
					<Hero />
				</div>
				<div className='relative z-10'>
					<Header />
				</div>
			</div>

			<main>
				{/* Секция с описанием проекта */}
				<section className='py-16 bg-gray-50'>
					<div className='container mx-auto px-4'>
						<div className='max-w-3xl mx-auto text-center'>
							<h2 className='text-3xl font-bold mb-6 text-victory-dark-blue'>
								О проекте «Память Героев»
							</h2>
							<p className='text-lg text-gray-700 mb-8'>
								Наш проект создан с целью сохранения памяти о ветеранах Великой
								Отечественной войны. Здесь вы можете найти информацию о героях,
								которые защищали нашу Родину, а также поделиться историей своих
								родственников-ветеранов.
							</p>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
								<div className='bg-white p-6 rounded-lg shadow-md'>
									<div className='text-victory-dark-red text-2xl font-bold mb-2'>
										27,000,000+
									</div>
									<p className='text-gray-600'>
										Погибших в Великой Отечественной войне
									</p>
								</div>
								<div className='bg-white p-6 rounded-lg shadow-md'>
									<div className='text-victory-dark-red text-2xl font-bold mb-2'>
										1,418
									</div>
									<p className='text-gray-600'>Дней и ночей войны</p>
								</div>
								<div className='bg-white p-6 rounded-lg shadow-md'>
									<div className='text-victory-dark-red text-2xl font-bold mb-2'>
										11,700+
									</div>
									<p className='text-gray-600'>Героев Советского Союза</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Секция с историями ветеранов */}
				<section className='py-16'>
					<div className='container mx-auto px-4'>
						<h2 className='text-3xl font-bold mb-2 text-center text-victory-dark-blue'>
							Герои войны
						</h2>
						<p className='text-gray-600 text-center mb-10'>
							Истории ветеранов, которые мы должны помнить
						</p>

						<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
							{featuredVeterans.map(veteran => (
								<VeteranCard key={veteran.id} {...veteran} />
							))}
						</div>

						<div className='mt-10 text-center'>
							<a href='/search' className='btn-primary'>
								Найти больше историй
							</a>
						</div>
					</div>
				</section>

				{/* Призыв к действию */}
				<section className='py-16 bg-victory-dark-blue text-white'>
					<div className='container mx-auto px-4'>
						<div className='max-w-2xl mx-auto text-center'>
							<h2 className='text-3xl font-bold mb-6'>
								Сохраните историю своей семьи
							</h2>
							<p className='text-lg mb-8'>
								У вас есть родственники, которые участвовали в Великой
								Отечественной войне? Поделитесь их историей, чтобы сохранить
								память о подвигах для будущих поколений.
							</p>
							<a href='/add' className='btn-accent'>
								Добавить историю ветерана
							</a>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	)
}

export default Index
