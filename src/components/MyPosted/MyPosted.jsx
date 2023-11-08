import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import MyPostedCart from "./MyPostedCart";
import { useLoaderData } from "react-router";


const MyPosted = () => {
    const data=useLoaderData()
    console.log(data)

    const { user } = useContext(AuthContext)
    console.log(user)
    const [post, setPost] = useState([])
    const url = `http://localhost:5000/category?email=${user.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [url])
    return (
        <div>
            {
                post.map((myPost, idx) =>
                    <MyPostedCart
                     key={idx}
                     data={data}
                      myPost={myPost}>
                    </MyPostedCart>)
            }
        </div>
    );
};

export default MyPosted;