import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Страница не найдена</p>
          <a href="/" className="text-victory-dark-red hover:text-victory-gold transition-colors underline">
            Вернуться на главную
          </a>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;
