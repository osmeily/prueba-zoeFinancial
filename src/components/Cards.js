import React, { useContext, useEffect, useState } from 'react'
import { Matches } from '../Context'
import Card from './Card'
import ShowBtn from './ShowBtn'

const Cards = () => {

    const {dataFiltered, setDataFiltered, hiddenAgents, sortBy} = useContext(Matches)
    const [agents, setAgents] = useState([])
    const [quantity, setQuantity] = useState(3)

    const sliceData = (num) =>{
        let slicedAgents = []
        for (let i = 0; i < num; i++) {
            slicedAgents.push(dataFiltered[i])
        }
        setAgents(slicedAgents)
    }

    useEffect(()=>{
        sliceData(quantity)
        let sortedData = dataFiltered
        switch (sortBy) {
            case "":
                
                break;
            case "name":
                
                sortedData.sort(function(a, b) {
                    return a.name.localeCompare(b.name);
                });
                setDataFiltered(sortedData)
                sliceData(quantity)
                break;
            case "id":
                sortedData.sort(function(a, b) {
                    return a.id - b.id;
                });
                setDataFiltered(sortedData)
                sliceData(quantity)
                break;
            case "high":
                sortedData.sort(function(a, b) {
                    return b.income - a.income;
                });
                setDataFiltered(sortedData)
                sliceData(quantity)
                break;
            case "low":
                sortedData.sort(function(a, b) {
                    return a.income - b.income;
                });
                setDataFiltered(sortedData)
                sliceData(quantity)
            break;
            default:
            
                
                break;
        }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [quantity, sortBy, dataFiltered, setDataFiltered])
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
            <ShowBtn setQuantity={setQuantity} quantity={quantity} agentsNumber={dataFiltered.length} />
        </div>
    )
}

export default Cards