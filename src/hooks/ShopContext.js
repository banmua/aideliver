import React, {useContext, useState} from 'react';
import data from '../data';

const ShopContext = React.createContext(data);

export const ShopContextProvider = ({children}) => {
    const {items, setItems} = useState([]);
    return (
        <ShopContext.Provider value={{...data, items, setItems}}>
            {children}
        </ShopContext.Provider>
    )
}


export default ShopContext;
