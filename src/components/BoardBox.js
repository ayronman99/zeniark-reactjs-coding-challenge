import React from 'react'

export default function BoardBox({ children, theStyle }) {
    return (
        <div className="page page-home" style={theStyle}>
            {children}
        </div>
    )
}
