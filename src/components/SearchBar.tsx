import { useState } from "react";
import { Search, Filter } from "lucide-react";

export type FilterType = "Пехота" | "Авиация" | "Танковые войска" | "Флот" | "Партизаны";

interface SearchBarProps {
  onSearch: (query: string, activeFilters: FilterType[]) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<FilterType[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery, activeFilters);
  };

  const toggleFilter = (filter: FilterType) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const filters: FilterType[] = ["Пехота", "Авиация", "Танковые войска", "Флот", "Партизаны"];

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-4 md:p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Введите имя, фамилию или место службы..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
          />
          <button
            type="submit"
            className="absolute right-0 top-0 h-full px-4 text-gray-500 hover:text-victory-dark-red"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700 font-medium">Фильтры:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => toggleFilter(filter)}
                className={`px-3 py-1 rounded-full text-sm transition-colors ${
                  activeFilters.includes(filter)
                    ? "bg-victory-dark-red text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
