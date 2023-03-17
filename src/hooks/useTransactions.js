import {useContext} from 'react';
import { ExpenseTrackerContext } from '../context/context';
import {incomeCategories, expenseCategories, resetCategories} from '../constants/categories';
const useTransactions =(title)=>{
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext);
    const transactionPerType = transactions.filter((trans)=>{return trans.type === title});
    let total = transactionPerType.reduce((acc,curr)=>{return acc+curr.amount},0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;
    transactionPerType.forEach((t)=>{
        const category = categories.find((c)=> c.type === t.category);
        if(category) category.amount+=t.amount;
    });
    const filteredCategories = categories.filter((c)=> c.amount > 0);

    const chartData = transactionPerType.length !== 0 ? {
        datasets: [{
            data: filteredCategories.map((c)=> c.amount),
            backgroundColor: filteredCategories.map((c)=>c.color)   
        }],
        labels: filteredCategories.map((c)=> c.type)      
    } : {
        datasets: [{
            data: [1],
            backgroundColor: [categories[0].color]
        }],
        labels: [categories[0].type]
    }
    return {filteredCategories, total, chartData};

}

export default useTransactions;