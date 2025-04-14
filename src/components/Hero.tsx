
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-victory-dark-blue text-white py-16 md:py-24 relative overflow-hidden">
      {/* Фоновый узор */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxRjNGNjYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Память о подвиге героев Великой Отечественной Войны</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Сохраним историю каждого, кто защищал нашу Родину в годы тяжелых испытаний
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/search" 
              className="btn-primary"
            >
              Найти ветерана
            </Link>
            <Link 
              to="/add" 
              className="btn-accent"
            >
              Добавить историю
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
