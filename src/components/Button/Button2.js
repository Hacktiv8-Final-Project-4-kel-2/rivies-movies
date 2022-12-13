import React from 'react'

export const Button = ({onclick,className,Name}) => {
    return (
        <div className={className} onClick={onclick}>
            {Name}
        </div>
    )
}
