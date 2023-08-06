import { useContext } from "react";
import { ExpenseTrackerContext } from "./context/context";

import { incomeCategories, expenseCategories, resetCategories } from "./constants/categories";
// import { Label } from "@material-ui/icons";

// const transaction = [
    //     {id: 1, type: "Income", category: "Business", amount: 50, date: new Date()},
    //     {id: 2, type: "Expense", category: "Grocery", amount: 100, date: new Date()},
    //     {id: 3, type: "Income", category: "Clothes", amount: 500, date: new Date()}
    // ]


// export const incomeCategories = [
//     { type: 'Business', amount: 0, color: incomeColors[0] },
//     { type: 'Investments', amount: 0, color: incomeColors[1] },
//     { type: 'Extra income', amount: 0, color: incomeColors[2] },
//   ];

const useTransactions = (title) => {
    resetCategories();
    const { transaction } = useContext(ExpenseTrackerContext);
    const transactionPerType = transaction.filter((t) => t.type === title);
    const total = transactionPerType.reduce((acc, currVal) => acc += currVal.amount, 0);
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({ transactionPerType, total, categories });

    transactionPerType.forEach(e => {
        const category = categories.find((c) => c.type === e.category) 

        if(category)
            category.amount += e.amount;
    });

    const filteredCategories = categories.filter((c) => c.amount > 0)
    
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    }

    return { filteredCategories, total, chartData };
};

export default useTransactions;
