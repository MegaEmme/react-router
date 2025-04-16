import { useEffect } from "react"
import MainNav from "../components/MainNav"

const Posts = () => {
    useEffect(() => {
        console.log('mount component Posts')
        return () => {
            console.log('unmount component Posts')
        }
    }, [])

    return <div>
        {/* <header><MainNav /></header> */}
        <h1>Posts</h1>
    </div>
}

export default Posts;