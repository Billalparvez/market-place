import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import MyPostedCart from "./MyPostedCart";


const MyPosted = () => {
    const { user } = useContext(AuthContext)
    const [post, setPost] = useState([])
    // console.log(post)
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
                    <MyPostedCart key={idx} myPost={myPost}>
                    </MyPostedCart>)
            }
        </div>
    );
};

export default MyPosted;