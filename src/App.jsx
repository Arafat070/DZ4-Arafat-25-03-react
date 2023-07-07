import {useEffect, useState} from 'react'
import Slider from "./components/Slider/Slider.jsx";
import './App.css'
import Input from "./components/Input/Input.jsx";

function App() {

    const [data, setData] = useState([])

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos')
        const response = await data.json()
        const sliceData = response.slice(0, 10)
        setData(sliceData)
        console.log(data)
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <div>
            <Input/>
            <Slider slides={data}/>
        </div>
    )
}

export default App