import { createContext, useContext, useState } from "react";


const AddressContext = createContext()

const key = 'at_ASmmgoy4LXd0w1z7ZXBOgl5jEnMZS'; 






function AddressProvider ({children}) {
   
    const [isLoading, setIsloading] = useState(false);
    const [Output, setOutput] = useState('');
    const [position,setPosition] = useState(null)
    const [error,setError] = useState('')
    
    async function getLocation({ value }) {
        setIsloading(true);
        const response = await fetch(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${key}&ipAddress=${value}&domain=${value}`
        );
       
        if (!response.ok) {
            setIsloading(false);
            setError("Input correct request parameters or search term.")
        }
        const data = await response.json();
        if(response.ok) setError('')
        
        setIsloading(false);
        setOutput(data);
        setPosition({
            lat:data?.location?.lat || 51.505,
            lng:data?.location?.lng || -0.09
        })
        
    }

    return (
        <AddressContext.Provider value={{ isLoading,Output,position,error,getLocation }}>
            {children}
        </AddressContext.Provider>
    )
}



function useAddress() {
    const context = useContext(AddressContext)
    return context
}

export { AddressProvider, useAddress }