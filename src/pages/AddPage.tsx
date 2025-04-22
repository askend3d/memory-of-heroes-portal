import PageLayout from "@/components/PageLayout";
import AddVeteranForm from "@/components/AddVeteranForm";

const AddPage = () => {
  return (
    <PageLayout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2 text-center text-victory-dark-blue">Добавить историю ветерана</h1>
            <p className="text-gray-600 text-center mb-8">
              Расскажите о своем родственнике, участвовавшем в Великой Отечественной войне
            </p>
            
            <AddVeteranForm />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AddPage;
