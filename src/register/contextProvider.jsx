import { useState } from "react";
import { UserContext } from "./userContext";
import PropTypes from "prop-types"
export default function ContextProvider({children}){
    const [login,setLogin]=useState(false)
    return(<>
        <UserContext.Provider 
        value={{login,setLogin}}
        >
            {children}
        </UserContext.Provider>
    </>)
}
ContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};