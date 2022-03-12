import React, { createContext, useState } from 'react'

export const Matches = createContext()

const Context = ({children}) => {

    const [dataFiltered, setDataFiltered] = useState([])
    const [hiddenAgents, setHiddenAgents] = useState([])
    const [sortBy, setSortBy] = useState("")
    const [inputText, setInputText] = useState("")

    return (
        <Matches.Provider value={{inputText, setInputText, sortBy, setSortBy, dataFiltered, setDataFiltered, hiddenAgents, setHiddenAgents}}>{children}</Matches.Provider>
    )
}

export default Context