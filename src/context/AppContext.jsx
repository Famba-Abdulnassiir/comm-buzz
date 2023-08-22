import { createContext, useState, useContext} from "react";


//create the context here
const AdsContext = createContext()

export function AdsProvider({children}) {

    const [adverts, setAdverts] = useState([]);

    // function updateAdverts(value){
    //     setAdverts(value);
    // }
    
    return(
        <AdsContext.Provider value={{adverts, setAdverts}}>
            {children}
        </AdsContext.Provider>
    )
}

export default function useAdsContext(){
    return useContext(AdsContext)

};