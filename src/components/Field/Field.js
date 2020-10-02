import React from 'react'
import { createUseStyles } from "react-jss";
import PropType from "prop-types";

const useStyles = createUseStyles({
    input : {
        backgroundColor : 'transparent',
        border : '2px solid purple !important',
        color : 'purple !important',
        padding : '10px !important',
        borderRadius : '6px !important',
        fontSize : '22px !important',
        fontFamily : 'inherit'
    }
})

const Field = ({type, fieldValue, handleChange, disabledValue}) => {
    const classes = useStyles()
    return (<input 
        type={type}
        value={fieldValue}
        onChange={handleChange}
        disabled={disabledValue}
        className={classes.input}
        //style = {{padding: '10px', borderRadius : '10px', borderColor : '2px solid green', color: 'white', backgroundColor : 'purple'}}
        />)
}

Field.propTypes = {
    /**
     * Type of field (text, password, email ...)
     */
    type : PropType.oneOf(['text', 'password', 'email', 'number', 'button', 'date', 'month', 'day', 'tel']).isRequired,
    /**
     * Field data
     */
    fieldValue : PropType.string,
    /**
     * Handler after texte change
     */
    handleChange : PropType.func.isRequired,
    /**
     * Field is disabled ???
     */
    disabledValue : PropType.bool.isRequired
}

export default Field