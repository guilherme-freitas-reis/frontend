import mockedCarros from '../../../public/utils/carros.json';
import Categoria from '../../views/Categoria/Categoria';
import mockedCategorias from '../../../public/utils/mockedCategorias';

const fetchCategoryDetails = async (category) => {
  // const res = await fetch('endpoint');
  // const categorias = await res.json();
  console.log(category);
  // const cat = categorias.filter(categoria => categoria.name === category)[0];
  return mockedCategorias.find((categoria) => categoria.name === category);
};

const fetchCars = async (/* categoryDetails */) => mockedCarros.carros;

// metodo server side render
export async function getServerSideProps(context) {
  const { categoria } = context.params;
  const categoryDetails = await fetchCategoryDetails(categoria);
  const carList = await fetchCars(/* categoryDetails */);

  // Segunda chamada: Obtem todos os veiculos daquela categoria

  return {
    props: {
      carList,
      categoryDetails,
    },
  };
}

function CategoriaPage({ categoryDetails, carList }) {
  return (
    <Categoria carList={carList} categoryName={categoryDetails.name} />
  );
}

export default CategoriaPage;
