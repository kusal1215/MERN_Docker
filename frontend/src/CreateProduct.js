import React from "react"
import { useHistory } from "react-router";
import { createProduct } from "./api";
import { ItemForm } from "./ItemForm";

export const CreateProduct = () => {

    const history = useHistory();

    const onSubmit = async (data) => {
        // alert(JSON.stringify(data))
       await createProduct(data)
       history.push('/')
    }

    return (
        <div className="container">
            <div className="mt-3">
                <h3>Create A Product</h3>

                <ItemForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
