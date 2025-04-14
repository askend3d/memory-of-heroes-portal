
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddVeteranForm from "@/components/AddVeteranForm";

const AddPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center text-victory-dark-blue">Добавить историю ветерана</h1>
            <p className="text-gray-600 text-center mb-8">
              Расскажите о своем родственнике, участвовавшем в Великой Отечественной войне
            </p>
            
            <AddVeteranForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AddPage;
