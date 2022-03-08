import React, { useState } from 'react'

const Landing = ({data}) => {

    console.log(data)

    const [inputText, setInputText] = useState("")
    const [dataFiltered, setDataFiltered] = useState([])

    const handleInput = (e) => {
        // const integer = parseInt(e.target.value)
        // setInputText(integer)
        setInputText(e.target.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const integer = parseInt(inputText)
        console.log(integer)
        const dataFilter = data.filter((agent) => agent.income > (integer-10000) && agent.income < (integer+10000))

        setDataFiltered(dataFilter)
    }

    return (
        <div className='input'>
            <form action="" onSubmit={handleOnSubmit}>
                <input onChange={handleInput} type="number" placeholder='Ingrese income' required/>
                <button type='submit' disabled={ inputText.length !== 5 }>Match</button>
            </form>
            <div>
                <ol>
                {
                dataFiltered.map(agent => (
                    <li>{agent.income}</li>
                ))
            }
                </ol>
            </div>
        </div>
    )
}

export default Landing