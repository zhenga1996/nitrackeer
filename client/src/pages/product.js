import { useParams } from "react-router-dom";

export const Product = () => {
    const { productId } = useParams();

    return (
    <h2>
        { productId }
    </h2>);
}