import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { getOthers, getOthersError, getOthersLoading } from "@/redux/others/selectors/othersSelector";
import { fetchNextOthersPage } from "@/redux/others/services/fetchNextOthersPage";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";

const OthersPage = () => {
    const others = useSelector(getOthers);
    const error = useSelector(getOthersError);
    const loading = useSelector(getOthersLoading);

    const { ref, inView, entry } = useInView({
        threshold: 1,
      });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!error) {
            dispatch(fetchNextOthersPage());
        }
    }, [dispatch, inView]);

    if(error) {
        return <div>{error}</div>
    }

    const item = others.map(el => {

        return <CartItem 
                id={el.id} 
                key={el.id} 
                product={el.product} 
                img={el.photo} 
                title={el.name} 
                description={el.description}
                price={el.price}
            />
    })

    return (
        <>
            <ProductLayout header={'Прочее'} item={item} />
            {loading && <ProductLayoutSkeleton />}
            {!loading && <div ref={ref} />}
        </>
    )
}
 
export default OthersPage;