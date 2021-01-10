import React from 'react';
import './button.css';

function getBtnClass(props) {
    if (props.primary) {
        return 'primary'
    } else if (props.secondary) {
        return 'secondary'
    } else {
        return ''
    }
}

export default function Button(props) {
    return (
        <>
            <button className={getBtnClass(props)}>
                {props.label}
            </button>
        </>
    )
}