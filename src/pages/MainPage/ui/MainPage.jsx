import { useGetOthers, useGetPizzas, useGetRolls } from "@/api/rtkApi";
import { ProductTape } from "@/components/ProductTape";

const MainPage = () => {

    const {data: productPizzas, isLoading: pizzasLoading, error: pizzasError} = useGetPizzas();
    const {data: productRolls, isLoading: rollsLoading, error: rollsError} = useGetRolls();
    const {data: productOthers, isLoading: othersLoading, error: othersError} = useGetOthers();

    return (
        <>
            <ProductTape 
                title="Пиццы" 
                products={productPizzas} 
                isLoading={pizzasLoading} 
                error={pizzasError} 
            />
            <ProductTape 
                title="Роллы" 
                products={productRolls} 
                isLoading={rollsLoading} 
                error={rollsError} 
            />
            <ProductTape 
                title="Прочее" 
                products={productOthers} 
                isLoading={othersLoading} 
                error={othersError} 
            />
        </>
    )

}
 
export default MainPage;