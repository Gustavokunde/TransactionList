import { useState } from "react";

export function useErrorHandling(){
    const [errorMessage, setErrorMessage] = useState<string| null>(null)

    function setError(errorMessage: string){
        setErrorMessage(errorMessage)
    }

    function closeError(){
        setErrorMessage(null)
    }

    return {
        errorMessage, 
        setError,
        closeError
    }
} 