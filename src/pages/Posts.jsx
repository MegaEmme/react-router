import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
    // useEffect(() => {
    //     console.log('mount component Posts')
    //     return () => {
    //         console.log('unmount component Posts')
    //     }
    // }, [])

    const [postsData, setPostsData] = useState([])

    const endpoint = "https://jsonplaceholder.typicode.com/posts";

    function getPosts() {
        axios.get(endpoint)
            .then(res => {
                setPostsData(res.data)
            })
            .catch(err => {
                console.error(err)
                alert('Errore')
            })
    }
    useEffect(getPosts, []);
    console.log(postsData);

    return <div>
        <h1>Lista Posts</h1>
        {postsData.map((element) => (
            <div className="post-card" key={element.id}>
                <h2>Titolo:{element.title}</h2>
                <p>{element.body}</p>
                <h4>userId:{element.userId}</h4>
            </div>
        ))}
    </div>
}

export default Posts;