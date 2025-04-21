const Hero = () => {
	return (
		<section className='bg-victory-dark-blue text-white h-full w-full flex items-center relative overflow-hidden'>
			{/* Видео-фон */}
			<div className='absolute inset-0 w-full h-full'>
				<video
					className='absolute w-full h-full object-cover'
					autoPlay
					muted
					loop
					playsInline
				>
					<source src='/background.mp4' type='video/mp4' />
				</video>
				{/* Тёмное наложение для лучшей читаемости текста */}
				<div className='absolute inset-0 bg-victory-dark-blue opacity-70'></div>
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<div className='text-center max-w-3xl mx-auto'>
					<div className='text-4xl md:text-6xl font-bold mb-6 leading-tight'>
						<h1 className='text-3d'>Память о подвиге</h1>
						<h1 className='text-3d'>героев Великой</h1>
						<h1 className='text-3d'>Отечественной Войны</h1>
					</div>
				</div>
			</div>

			{/* Стих прибитый к низу */}
			<div className='absolute bottom-0 left-0 w-full flex justify-center z-10 pb-8 pointer-events-none'>
				<blockquote className="relative max-w-3xl bg-black-opacity-80 rounded-md py-4 px-6 text-gray-300 text-left pointer-events-auto shadow-lg border-l-4 border-blue-400 before:content-[''] before:absolute before:inset-0 before:rounded-md before:backdrop-blur-lg before:-z-10">
					<p className='italic leading-relaxed mb-2'>
						Товарищи далеких дней моих,
						<br />
						Ровесники, прожившие так мало!..
						<br />
						Наверное, остался я в живых,
						<br />
						Чтоб память на земле не умирала.
					</p>
					<p className='italic leading-relaxed mb-2'>
						На поле боя павшие друзья —<br />
						Вас было много, страстно жизнь любивших.
						<br />
						Я ведаю: в живых остался я,
						<br />
						Чтоб рассказать о вас, так мало живших.
					</p>
					<footer className='mt-2 text-sm text-gray-400'>
						— Расул Гамзатов
					</footer>
				</blockquote>
			</div>
		</section>
	)
}

export default Hero
