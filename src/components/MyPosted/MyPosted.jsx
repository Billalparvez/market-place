import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import MyPostedCart from "./MyPostedCart";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";


const MyPosted = () => {
    const data = useLoaderData()
    const [post, setPost] = useState([])
    const [postCart, setPostCart] = useState([])
    console.log(data)
    const { user } = useContext(AuthContext)
    console.log(user)
    const url = `http://localhost:5000/category?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [url])
    // delete
    const handlDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if(result.isConfirmed){
                fetch(`http://localhost:5000/category/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            // remove brand
                            const remaining = postCart.filter(post => post._id !== _id)
                            setPostCart(remaining)
                        }
                    })
            }           
        })
    }
    return (
        <div>
            {
                post.map((myPost, idx) =>
                    <MyPostedCart
                        key={idx}
                        data={data}
                        handlDelete={handlDelete}
                        myPost={myPost}>
                    </MyPostedCart>)
            }
        </div>
    );
};

export default MyPosted;