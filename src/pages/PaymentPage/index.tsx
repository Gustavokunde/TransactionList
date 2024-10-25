import { useEffect, useState } from "react"
import { Transaction } from "../../interfaces/transaction";
import { TransactionCard } from "../../assets/components/TransactionCard";
import { getAllTransactions } from "../../services/transactions";
import { useErrorHandling } from "../../hooks/errorHandling";
import "./styles.css";


export function PaymentPage(){
    const [transactions, setTransactions ] = useState<Transaction[] | null>(null);
    const {errorMessage, setError, closeError} = useErrorHandling();
    const [loading, setLoading] = useState<boolean>(false);
    const [startDateFilter, setStartDatefilter] = useState<Date |null>(null);
    const [endDateFilter, setEndDateFilter] = useState<Date |null>(null);


    useEffect(()=>{
        setLoading(true)
        getAllTransactions(startDateFilter, endDateFilter)
        .then(response=> {
            setTransactions(response);
            setLoading(false);
        })
        .catch(err=>{
            setError("An error occured when trying to get the data");
            setLoading(false);
        })
    },[startDateFilter, endDateFilter])

   function onDateStartChange(event: React.ChangeEvent<HTMLInputElement>){
        setStartDatefilter(new Date(event.target.value))
   }

   function onDateEndChange(event: React.ChangeEvent<HTMLInputElement>){
        setEndDateFilter(new Date(event.target.value))
    }

    return(
        <div>
            {loading && <p>Loading data...</p>}
           <section>
                <label htmlFor="startDate">Start Date: </label>
                <input  id="startDate" type="date" onChange={onDateStartChange}/>
           </section>
           <section>
                <label htmlFor="endDate">End Date: </label>
                <input  id="endDate" type="date" onChange={onDateEndChange}/>
           </section>
            {errorMessage? 
            <div><p>{errorMessage}</p> <button onClick={closeError}>close</button></div>
            :<section className="transactions-list"> {transactions?.map(
                transaction=>(
                <TransactionCard key={transaction.transactionID} transaction={transaction}/>
            ))}</section>}
        </div>
    )
}