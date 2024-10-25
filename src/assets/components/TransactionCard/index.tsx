import { Transaction } from "../../../interfaces/transaction"
import "./styles.css"

interface Props{
    transaction: Transaction
}

function formatNumberToUSDCurrency(num: number){
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(num)
}


export function TransactionCard({transaction}: Props){
    return(
        <div className="transaction-card"> 
            <p><strong>Transaction Id :</strong><span>{transaction.transactionID}</span></p>
            <p><strong>Date: </strong><span>{transaction.date.toDateString()}</span></p>
            <p><strong>Description: </strong>{transaction.description}</p>
            <p><strong>Amount in USD: </strong>{formatNumberToUSDCurrency(transaction.amount)}</p>
        </div>
    )
}