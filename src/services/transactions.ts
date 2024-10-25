import { Transaction } from "../interfaces/transaction";

const transactions: Transaction[] = [
    {
        transactionID: "1",
        amount: 200,
        date: new Date(), description: "transaction desc"
    },
    {
        transactionID: "2",
        amount: 200,
        date: new Date(), description: "transaction desc"
    },
    {
        transactionID: "3",
        amount: 200,
        date: new Date(), description: "transaction desc"
    },
    {
        transactionID: "4",
        amount: 200,
        date: new Date(), description: "transaction desc"
    },
    {
        transactionID: "5",
        amount: 200,
        date: new Date(), description: "transaction desc"
    },
    {
        transactionID: "6",
        amount: 200,
        date: new Date(), description: "transaction desc"
    }
]


export async function getAllTransactions(dateStart:Date| null, dateEnd: Date| null ){
    if(dateStart && dateEnd){
        return Promise.resolve(transactions.filter(transaction=> {
            return removeSecondFromDate(transaction.date).getTime() >= 
            removeSecondFromDate(dateStart).getTime() 
            && removeSecondFromDate(transaction.date).getTime()
            <= removeSecondFromDate(dateEnd).getTime()
        }));
    } else   return Promise.resolve(transactions);

}

function removeSecondFromDate(date: Date){
    date.setSeconds(0)
    date.setMilliseconds(0)
    
    return(date);
}