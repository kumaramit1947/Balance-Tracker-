const contextReducer =(state,action)=>{
    switch(action.type){
        case 'ADD_TRANSACTION': {
            const newTransactions = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(newTransactions))
            return newTransactions;
        }
        case 'DELETE_TRANSACTION': {
            const newTransactions = state.filter((t) => t.id !== action.payload);
            localStorage.setItem('transactions', JSON.stringify(newTransactions))
            return newTransactions;
        }
        default: {
            return state;
        }
    }
}
export default contextReducer;