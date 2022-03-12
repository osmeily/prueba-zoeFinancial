export const agentReducer = (state, action) => {
    switch (action.type){
        case "FETCH_DATA":
            return {...state, agents: action.payload}

        case "SET_TEXT":
            return {...state, searchText: action.payload}

        case "SORT_BY_NAME":
            return {...state, agents: state.agents.sort(function(a, b) {
                return a.name.localeCompare(b.name);
            })}

        case "SORT_BY_ID":
            return {...state, agents: state.agents.sort(function(a, b) {
                return a.id - b.id})}

        case "SORT_HIGH_INCOME":
            return {...state, agents: state.agents.sort(function(a, b) {
                return b.income - a.income})}

        case "SORT_LOW_INCOME":
            return {...state, agents: state.agents.sort(function(a, b) {
                return a.income - b.income;
            })}

        case "HIDE_AGENT":
            return {...state, hiddenAgents: [...state.hiddenAgents, action.payload.id], agents: state.agents.filter(agent => agent.id !== action.payload.id)}
        default:
            return state
    }
}