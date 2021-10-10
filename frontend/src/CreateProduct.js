import React from "react"
import { useHistory } from "react-router";
import { createProduct } from "./api";
import { ItemForm } from "./ItemForm";

export const CreateProduct = () => {

    const history = useHistory();

    const onSubmit = async (data) => {
        // alert(JSON.stringify(data))
       await createProduct(data)
       history.push('/product-list')
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3"></div>
              
                <div className="col-md-6 pt-4">
                    <h3 className=" pb-4">Create A Product</h3> 

                    <ItemForm onSubmit={onSubmit}/>
                </div>

                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
