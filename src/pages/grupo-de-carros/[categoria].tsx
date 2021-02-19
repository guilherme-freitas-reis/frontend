import Categoria from '../../views/Categoria/Categoria';
import {
  api, ApiCalls, CarDetails, CategoryDetails,
} from '../../services/api';

interface IProps {
  carList: CarDetails[];
  categoryDetails: CategoryDetails;
}
const fetchCategoryDetails = async (categoryName: string) => {
  const res = await api.get(ApiCalls.listCategory);
  const categorias: CategoryDetails[] = res.data;
  return categorias.find((categoria) => categoria.value === categoryName.toLocaleUpperCase());
};

const fetchCars = async (categoryId: number) => {
  const res = await api.get(ApiCalls.selectCars + categoryId);
  const carList: CarDetails[] = res.data;
  return carList;
};

// metodo server side render
export async function getServerSideProps(context) {
  const { categoria } = context.params;
  const categoryDetails: CategoryDetails = await fetchCategoryDetails(categoria);
  const carList = await fetchCars(categoryDetails.id);

  // Segunda chamada: Obtem todos os veiculos daquela categoria

  return {
    props: {
      carList,
      categoryDetails,
    },
  };
}

function CategoriaPage({ categoryDetails, carList }: IProps) {
  return (
    <Categoria carList={carList} categoryName={categoryDetails.value} />
  );
}

export default CategoriaPage;
