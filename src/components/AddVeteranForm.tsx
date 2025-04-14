
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const AddVeteranForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    birthYear: "",
    deathYear: "",
    rank: "",
    service: "",
    story: "",
    photo: null as File | null,
    submitterName: "",
    submitterEmail: "",
    relationship: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, photo: e.target.files![0] }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном приложении здесь будет отправка данных на сервер
    console.log("Submitting form data:", formData);
    
    // Показываем уведомление об успешной отправке
    toast({
      title: "История успешно добавлена",
      description: "Спасибо за вклад в сохранение памяти о ветеранах Великой Отечественной войны",
    });
    
    // Сбрасываем форму
    setFormData({
      name: "",
      birthYear: "",
      deathYear: "",
      rank: "",
      service: "",
      story: "",
      photo: null,
      submitterName: "",
      submitterEmail: "",
      relationship: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-victory-dark-blue">Информация о ветеране</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              ФИО ветерана*
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
              placeholder="Иванов Иван Иванович"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="birthYear" className="block text-sm font-medium text-gray-700 mb-1">
                Год рождения
              </label>
              <input
                id="birthYear"
                name="birthYear"
                type="text"
                value={formData.birthYear}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
                placeholder="1920"
              />
            </div>
            
            <div>
              <label htmlFor="deathYear" className="block text-sm font-medium text-gray-700 mb-1">
                Год смерти
              </label>
              <input
                id="deathYear"
                name="deathYear"
                type="text"
                value={formData.deathYear}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
                placeholder="1995"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="rank" className="block text-sm font-medium text-gray-700 mb-1">
                Звание
              </label>
              <input
                id="rank"
                name="rank"
                type="text"
                value={formData.rank}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
                placeholder="Лейтенант"
              />
            </div>
            
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                Род войск
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
              >
                <option value="">Выберите род войск</option>
                <option value="Пехота">Пехота</option>
                <option value="Авиация">Авиация</option>
                <option value="Танковые войска">Танковые войска</option>
                <option value="Флот">Флот</option>
                <option value="Артиллерия">Артиллерия</option>
                <option value="Медицинская служба">Медицинская служба</option>
                <option value="Связь">Связь</option>
                <option value="Партизаны">Партизаны</option>
                <option value="Другое">Другое</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="story" className="block text-sm font-medium text-gray-700 mb-1">
              История ветерана*
            </label>
            <textarea
              id="story"
              name="story"
              required
              value={formData.story}
              onChange={handleChange}
              rows={6}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
              placeholder="Расскажите о боевом пути, подвигах, наградах и жизни после войны..."
            />
          </div>
          
          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
              Фотография ветерана
            </label>
            <input
              id="photo"
              name="photo"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
            />
            <p className="mt-1 text-xs text-gray-500">
              Рекомендуемый размер фотографии: не менее 300x400 пикселей. Максимальный размер файла: 5 МБ.
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-4 text-victory-dark-blue">О вас</h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="submitterName" className="block text-sm font-medium text-gray-700 mb-1">
              Ваше имя*
            </label>
            <input
              id="submitterName"
              name="submitterName"
              type="text"
              required
              value={formData.submitterName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
            />
          </div>
          
          <div>
            <label htmlFor="submitterEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Ваш email*
            </label>
            <input
              id="submitterEmail"
              name="submitterEmail"
              type="email"
              required
              value={formData.submitterEmail}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
            />
            <p className="mt-1 text-xs text-gray-500">
              Мы не будем публиковать ваш email. Он нужен только для связи с вами по вопросам публикации.
            </p>
          </div>
          
          <div>
            <label htmlFor="relationship" className="block text-sm font-medium text-gray-700 mb-1">
              Кем приходится вам ветеран?*
            </label>
            <input
              id="relationship"
              name="relationship"
              type="text"
              required
              value={formData.relationship}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-victory-dark-red"
              placeholder="Дедушка, прадедушка, родственник..."
            />
          </div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          type="submit"
          className="btn-primary"
        >
          Отправить историю
        </button>
      </div>
      
      <p className="text-sm text-gray-500 text-center">
        * Обязательные поля для заполнения
      </p>
    </form>
  );
};

export default AddVeteranForm;
