import React from "react"
import { useForm } from 'react-hook-form'
// import { useHistory } from 'react-router-dom'

export const ItemForm = ({ item , onSubmit }) => {

    // const history = useHistory();
    const {register, handleSubmit} = useForm({ defaultValues: {product_name: item ? item.product_name : "" ,
    product_qty: item ? item.product_qty : "", product_price: item ? item.product_price : "", product_des: item ? item.product_des : ""} });

    const submitHandler =  handleSubmit((data) => {
        onSubmit(data);
    });


    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <label className="mt-4" htmlFor="text">Product Name :</label>
                <input {...register('product_name', { required: true })} name="product_name" id="product_name" className="form-control mt-3"  />

                <label className="mt-4" htmlFor="text">Product Quantity :</label>
                <input {...register('product_qty', { required: true })} name="product_qty" id="product_qty" type="number" className="form-control mt-3"  />

                <label className="mt-4" htmlFor="text">Product Price :</label>
                <input {...register('product_price', { required: true })} name="product_price" id="product_price" type="number"  className="form-control mt-3"  />

                <label className="mt-4" htmlFor="text">Product Decription :</label>
                <textarea {...register('product_des', { required: true })} name="product_des" id="product_des" className="form-control mt-3"  />
            </div>
            <div className="form-group mt-5 ">
                <button type="submit" className="btn btn-primary ">Save Product</button>
            </div>
        </form>
    )
}
