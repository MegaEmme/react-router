import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        console.log('mount component Home')
        return () => {
            console.log('unmount cmponent Home')
        }
    }, [])

    return <div>
        <header>Header</header>
        <h1>Home Page</h1>
    </div>
}

export default Home;