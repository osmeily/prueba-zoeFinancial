import React, { useEffect, useState } from 'react'
import { AgentState } from '../Context'
import Card from './Card'
import ShowBtn from './ShowBtn'

const Cards = () => {
    const {state, dispatch} = AgentState
    const [agents, setAgents] = useState([])
    const [quantity, setQuantity] = useState(3)

    const sliceData = (num) =>{
        let slicedAgents = []
        for (let i = 0; i < num; i++) {
            slicedAgents.push(state.agents[i])
        }
        setAgents(slicedAgents)
    }

    useEffect(()=>{
        sliceData(quantity)
        let sortedData = state.agents
        switch (sortBy) {
            case "":
                
                break;
            case "name":
                
                sortedData.sort(function(a, b) {
                    return a.name.localeCompare(b.name);
                });
                setstate.agents(sortedData)
                sliceData(quantity)
                break;
            case "id":
                sortedData.sort(function(a, b) {
                    return a.id - b.id;
                });
                setstate.agents(sortedData)
                sliceData(quantity)
                break;
            case "high":
                sortedData.sort(function(a, b) {
                    return b.income - a.income;
                });
                setstate.agents(sortedData)
                sliceData(quantity)
                break;
            case "low":
                sortedData.sort(function(a, b) {
                    return a.income - b.income;
                });
                setstate.agents(sortedData)
                sliceData(quantity)
            break;
            default:
            
                
                break;
        }
    
    }, [quantity, sortBy, state.agents, setstate.agents])
    console.log(hiddenAgents)
    return (
        <div className='flex flex-col gap-4 w-4/5 m-auto lg:flex-col lg:gap-6 lg:m-auto lg:justify-center lg:items-center lg:w-full'>
            <div className='flex flex-col gap-4 lg:grid lg:grid-cols-3'>
            {
                agents.map( agent => {
                    if(!hiddenAgents.includes(agent.id)){
                        return <Card key={agent.id} agent={agent}/>
                    }
                    return ""
                }
                )
            }
            </div>
            <ShowBtn setQuantity={setQuantity} quantity={quantity} agentsNumber={state.agents.length} />
        </div>
    )
}

export default Cards