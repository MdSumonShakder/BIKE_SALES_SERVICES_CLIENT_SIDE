import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";



const Review = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://whispering-basin-37190.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h1 className="gum mt-5 mb-5 fw-bolder pb-5">Add A Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("description")} placeholder="Description" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Review;