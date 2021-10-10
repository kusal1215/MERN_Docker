import React, { useState, useEffect } from "react"
import { useRouteMatch } from "react-router-dom";
import { getProduct, updateProduct } from "./api";
import { ItemForm } from "./ItemForm";
import { useHistory } from "react-router";


export const EditProduct = () => {

    const match = useRouteMatch();
    const [item, setItem] =  useState();
    const history = useHistory();


    useEffect(() => {
        const fetchProduct = async () => {

            const item = await getProduct(match.params.id);
            setItem(item);
        };
        fetchProduct()
    });

    const onSubmit = async (data) => {
        await updateProduct(data , match.params.id);
        history.push('/product-list');
    }


    return item ? 
    <div className="container">
        <div className="mt-3">
            <h3>Edit A Product</h3>
            <ItemForm item={item} onSubmit={onSubmit}/>
        </div>
    </div>
     : <div>Loading..</div>
}
