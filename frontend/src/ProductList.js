import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "./api";

export const ProductList = () => {

    const [items, setItmes] = useState([]);

    useEffect(() => {

        const fetchItems = async () => {
            const items = await getProducts();
            setItmes(items);
        } 
        fetchItems();
    }, []);

    return (
        <div className="container">
            <div className="mt-5">
                <h3 className="text-center">Product List</h3>

                <table className="table table-striped mt-5">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Product Qty</th>
                            <th>Product Price</th>
                            <th>Product Des</th>
                            <th>Edit Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => (
                        
                                <tr key={item._id}>
                                    <td>
                                        {item.product_name}
                                    </td>
                                    <td>
                                        {item.product_qty}
                                    </td>
                                    <td>
                                        {item.product_price}
                                    </td>
                                    <td>
                                        {item.product_des}
                                    </td>
                                    <td>
                                        <Link to={`/edit/${item._id}`}>
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}


