import { CartItem } from "@/components/CartItem";
import { ProductLayout } from "@/layouts/ProductLayout";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { getRolls, getRollsError, getRollsLoading } from "@/redux/rolls/selectors/rollsSelector";
import { fetchNextRollsPage } from "@/redux/rolls/services/fetchNextRollsPage";
import { ProductLayoutSkeleton } from "@/layouts/ProductLayout/ui/ProductLayout";
import { LayoutContext } from "@/providers/LayoutContextProvider";

const RollsPage = () => {
    const rolls = useSelector(getRolls);
    const error = useSelector(getRollsError);
    const loading = useSelector(getRollsLoading);

    const {handleClick} = useContext(LayoutContext);

    const { ref, inView } = useInView({
        threshold: 1,
      });

    const dispatch = useDispatch();

    useEffect(() => {
        if (!error) {
            dispatch(fetchNextRollsPage());
        }
    }, [dispatch, inView]);

    if(error) {
        return <div className="error">{error}</div>
    }

    const item = rolls.map(el => {
        const prices = el.pieces.map(el => el.price);
        const minPriceRolls = Math.min(...prices);

        return <CartItem 
                id={el.id} 
                key={el.id} 
                product={el.product} 
                img={el.photo} 
                title={el.name} 
                ingredients={el.ingredients}
                price={minPriceRolls}
                handleClick={handleClick}
            />
    })

    return (
        <>
            <ProductLayout header={'Роллы'} item={item} />
            {loading && <ProductLayoutSkeleton />}
            {!loading && <div ref={ref} />}
        </>
    )
}
 
export default RollsPage;