import { useEffect } from "react"
import MainNav from "../components/MainNav"

const Home = () => {
    useEffect(() => {
        console.log('mount component Home')
        return () => {
            console.log('unmount cmponent Home')
        }
    }, [])

    return <div>
        {/* <header><MainNav /></header> */}
        <h1>Home Page</h1>
    </div>
}

export default Home;