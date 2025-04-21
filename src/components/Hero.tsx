
import { Link } from 'react-router-dom'
import { Mountain } from 'lucide-react'

const Hero = () => {
	return (
		<section className='bg-gradient-to-b from-victory-dark-green to-victory-dark-blue text-white h-full w-full flex items-center relative overflow-hidden'>
			{/* Видео-фон */}
			<div className='absolute inset-0 w-full h-full'>
				<video
					className='absolute w-full h-full object-cover opacity-40'
					autoPlay
					muted
					loop
					playsInline
				>
					<source src='/background.mp4' type='video/mp4' />
				</video>
				{/* Тёмное наложение с градиентом */}
				<div className='absolute inset-0 bg-gradient-to-b from-victory-dark-green/80 to-victory-dark-blue/80'></div>
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='text-center max-w-3xl mx-auto'>
					<h1 className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
						Память о подвиге героев Великой Отечественной Войны
					</h1>
					<p className='text-xl md:text-2xl mb-8 text-gray-300'>
						Сохраним историю каждого, кто защищал нашу Родину в годы тяжелых
						испытаний
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Link to='/search' className='btn-primary'>
							Найти ветерана
						</Link>
						<Link to='/add' className='btn-accent'>
							Добавить историю
						</Link>
					</div>
				</div>
			</div>

			{/* Индикатор прокрутки */}
			<div className='absolute bottom-8 left-0 right-0 flex justify-center animate-bounce'>
				<svg
					className='w-8 h-8 text-white'
					fill='none'
					stroke='currentColor'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						strokeWidth='2'
						d='M19 14l-7 7m0 0l-7-7m7 7V3'
					></path>
				</svg>
			</div>
		</section>
	)
}

export default Hero
