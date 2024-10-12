import { useGetProductsQuery } from "../../redux/api/product-api"
import { Product } from "../../types"

const Home = () => {
  const {data, isLoading} = useGetProductsQuery({})
  console.log(data);
  
  const productItems: JSX.Element[] = data?.products?.map((product:Product): JSX.Element => (
    <div key={product.id}>
      <img src={product.images[0]} width={200} alt={product.title} />
      <h3>{product.title}</h3>
      <h3>{product.price}</h3>
      <hr />
    </div>
  ) )
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {productItems}
    </div>
  )
}

export default Home