import React, { useEffect, useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MyOrders = () => {
    const {user}=useAuth();
    const [myOrders,setMyOrders]=useState([]);

useEffect(()=>{
    const url=`http://localhost:5000/users?email=${user.email}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setMyOrders(data));
},[]);

    return (
        <div>
            <h1>This is MyOrders</h1>
            <h1>This is MyOrders</h1>
            <h1>This is MyOrders</h1>
            <h1>This is MyOrders</h1>
            <h1>This is MyOrders</h1>
            <h1>This is MyOrders</h1>
            <h1>This is MyOrders</h1>
            <h1>This is MyOrders:{myOrders.length}</h1>
        </div>
    );
};

export default MyOrders;