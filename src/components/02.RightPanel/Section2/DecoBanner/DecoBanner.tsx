import './DecoBanner.css'
import { useEffect, useState } from 'react'



const DecoBanner = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 3000)
    }, [])

    const intervale = () => {

        const element = (
            <div className='box-reloj'>
                <h1> {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</h1>
            </div>
        )

        // ReactDOM.render(
        //     element, document.getElementById('clock')
        // );
        return element
    }

    return (
        <div className='clock'>{intervale()}</div>
    )
}



export default DecoBanner