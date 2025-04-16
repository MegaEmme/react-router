import { useEffect } from "react"

const About = () => {
    useEffect(() => {
        console.log('mount component About')
        return () => {
            console.log('unmount component About')
        }
    }, [])

    return <div>
        <header>Header About</header>
        <h1>About</h1>
    </div>
}

export default About;