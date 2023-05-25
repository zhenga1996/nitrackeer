import { useNavigate, useParams } from "react-router-dom";

export const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    return (   
    <div className = "center">
        <h1>{ productId }</h1>
        <form onSubmit={ () => navigate("/bazaar") }>
            <div className = "txt">
                <strong>Oh no! You're leaving... Are you sure?</strong>
            </div>
            <button type="submit">Go Back</button>
        </form>
    </div>);
}