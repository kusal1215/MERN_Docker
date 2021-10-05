import React from "react"
import { useForm } from 'react-hook-form'
// import { useHistory } from 'react-router-dom'

export const ItemForm = ({ item , onSubmit }) => {

    // const history = useHistory();
    const {register, handleSubmit} = useForm({ defaultValues: {product_name: item ? item.product_name : "" } });

    const submitHandler =  handleSubmit((data) => {
        onSubmit(data);
    });


    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="text">Product Name :</label>
                <input {...register('product_name', { required: true })} name="product_name" id="product_name" className="form-control"  />
            </div>
            <div className="form-group mt-5">
                <button type="submit" className="btn btn-primary">Save Product</button>
            </div>
        </form>
    )
}
