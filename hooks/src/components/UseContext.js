import React, {useContext} from "react";
import { ToggleTheme } from "../App";

function UseContext(){
    const theme = useContext(ToggleTheme);

    const themeStyle = {
        backgroundColor : theme ? "red" : "blue",
        color : theme ? "blue" : "red",
        padding : "2rem",
        margin : "2rem"
    }

    return (
        <div style={themeStyle}>
            This is made with React.
        </div>
    )
}

export default UseContext;