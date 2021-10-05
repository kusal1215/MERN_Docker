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
            <div className="mt-3">
                <h3>Product List</h3>

                <table className="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Action</th>
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


