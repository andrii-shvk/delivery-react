import { Link } from "react-router-dom";
import cls from './ProductLayout.module.scss';
import { CartItemSkeleton } from "@/components/CartItem";
import { Skeleton } from "@/ui/Skeleton";

export const ProductLayoutSkeleton = () => {
    return (
        <section className={cls.productBody}>
            <h2 className={cls.title}>
                <Skeleton width={500} height={50} />
            </h2>

            <div className={cls.content}>
                {
                    new Array(4).fill(0).map((_, i) => (
                        <CartItemSkeleton key={i} />
                    ))
                }
            </div>
        </section>
    )
}

const ProductLayout = (props) => {
    const {header, item} = props;

    return (
        <>

            <Link className={cls.link} to={'/'}>
                Вернуться назад
            </Link>

            <section className={cls.productBody}>
                <h2 className={cls.title}>{header}</h2>

                <div className={cls.content}>
                    {item}
                </div>
            </section>
        </>
    );
}
 
export {ProductLayout};