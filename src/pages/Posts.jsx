import { useEffect } from "react"

const Posts = () => {
    useEffect(() => {
        console.log('mount component Posts')
        return () => {
            console.log('unmount component Posts')
        }
    }, [])

    return <div>
        <header>Header Posts</header>
        <h1>Posts</h1>
    </div>
}

export default Posts;