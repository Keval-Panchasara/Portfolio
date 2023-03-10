import "./ProductList.css"
import Product from "../Product/Product"
import { products } from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Create & inspire. It's Lama</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that youur work has been waiting for. Beautiful homes, stunning portfolio styles & a whole lot more qwaits inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList