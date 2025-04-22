import { useState } from 'react'
import { Search } from 'lucide-react'

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Здесь будет логика поиска
    console.log('Searching for:', searchQuery)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Введите имя, фамилию или другие данные ветерана"
          className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
      <button
        type="submit"
        className="w-full bg-victory-dark-red text-white py-3 px-6 rounded-lg hover:bg-victory-gold transition-colors"
      >
        Найти
      </button>
    </form>
  )
}

export default SearchForm 