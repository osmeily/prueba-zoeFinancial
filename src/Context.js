import React, { createContext, useContext, useReducer, useState } from 'react'
import { agentReducer } from './Reducers'

export const Agents = createContext()

const Context = ({children}) => {

    const [state, dispatch] = useReducer(agentReducer, {
        agents : [],
        hiddenAgents : [],
        searchText : ""
    })

    // const [sortBy, setSortBy] = useState("")

    return (
        <Agents.Provider value={{state, dispatch}}>{children}</Agents.Provider>
    )
}

export default Context

export const AgentState = () => {
    return useContext(Agents)
}