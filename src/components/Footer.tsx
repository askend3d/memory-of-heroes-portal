
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-victory-dark-blue text-white">
      <div className="ribbon h-2 w-full"></div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Память Героев</h3>
            <p className="mb-4">
              Сайт, посвященный памяти ветеранов Великой Отечественной войны, их историям и подвигам.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-victory-gold transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/search" className="hover:text-victory-gold transition-colors">Поиск ветеранов</Link>
              </li>
              <li>
                <Link to="/add" className="hover:text-victory-gold transition-colors">Добавить историю</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <p className="mb-2">Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами:</p>
            <p className="flex items-center text-victory-gold">
              memory@heroes.ru
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} Память Героев. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
