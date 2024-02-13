import { getProductItem } from "@/redux/productItem/selectors/productItemSelectors";
import { useSelector } from "react-redux";

export const useModalItemsParams = () => {
  const product = useSelector(getProductItem);

  return {
    id: product.id,
    product: product.product,
    img: product.photo
  };
};
