import { useEffect } from "react"
import MainNav from "../components/MainNav"

const About = () => {
    useEffect(() => {
        console.log('mount component About')
        return () => {
            console.log('unmount component About')
        }
    }, [])

    return <div>
        <h1>About</h1>
    </div>
}

export default About;