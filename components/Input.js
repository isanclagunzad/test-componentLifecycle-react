import { useEffect, useState } from 'react'

export default function Input() {
    const [inputData, setInputData] = useState('')

    useEffect(() => {
        console.log('test')

        return () => {
            console.log('!test')
        }
    },[])

    return (
        <>
            <input onChange={(e) => setInputData(e.target.value)} />
            <br></br>
            {inputData}
        </>
    )
}