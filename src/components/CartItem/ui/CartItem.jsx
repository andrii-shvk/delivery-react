import { Button } from "@/ui/Button";
import cls from "./CartItem.module.scss";
import { productsName } from "@/const/const";
import { useDispatch } from "react-redux";
import { fetchProductItem } from "@/redux/productItem/services/fetchProductItem";

const CartItem = (props) => {
    const {
        id, 
        img = '', 
        title = '', 
        product = '', 
        ingredients = [], 
        description = '',
        price = 0,
        handleClick
    } = props;

    const dispatch = useDispatch();

    const ingredientsText = ingredients.join(", ");

    const onClick = () => {
        handleClick();
        dispatch(fetchProductItem({
            id: id,
            product: product
        }))
    }

    return (
        <article className={cls.card}>
            <img className={cls.img} src={img} />

            <div className={cls.body}>
                <div className={cls.info}>
                    <p className={cls.title}>{title}</p>

                    <span className={cls.text}>{product === productsName.OTHERS ? description : ingredientsText}</span>
                </div>

                <div className={cls.footer}>
                    <Button border className={cls.button} onClick={onClick}>
                        Выбрать
                    </Button>
                    {product === productsName.OTHERS ? <span>{price} $</span> : <span>От {price} $</span>}
                </div>
            </div>
        </article>
    );
}

export {CartItem};