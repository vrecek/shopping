import React from 'react'
import styles from '@/styles/LogReg/LogReg.module.scss'
import { InputDivType } from '@/interfaces/LogRegInterfaces'


const InputDiv = ({label, type}: InputDivType) => {
    return (
        <div className={ styles['logreg-div'] }>

            <label>{label}</label>
            <input type={type} spellCheck='false' />

        </div>
    )
}


export default InputDiv