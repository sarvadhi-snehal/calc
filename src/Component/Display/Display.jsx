import React from 'react'
import './Display.scss'
function Display({value}) {
    return (
        <section className="dispaly">
            <h2 className="value">{value ? value : 0}</h2>
        </section>
    )
}

export default Display
