import React from 'react'

import { ThemeContext } from '../context/ThemeProvider'

const Navbar = () => {

    const {theme, cambioColor} = React.useContext(ThemeContext)


    return (
        <div style={
            {
                background: theme.background, /* Modifica el color del fondo */
                color: theme.color /* Modifica el color del texto */
            }
        }>
            <h1>Navbar</h1>
            <label>Color Texto</label>
            <input 
                type="color"
                onChange={e => cambioColor({...theme, color: e.target.value})}
            /> {/* Permite seleccionar el color del fondo */}
            {/* ...theme: Copia de nuestro objeto themes (color y background).
            color: El valor por defecto de color es reemplazado por e.target.value */}

            <label>Color Fondo</label>
            <input 
                type="color"
                onChange={e => cambioColor({...theme, background: e.target.value})}
            /> {/* Permite seleccionar el color del texto */}
            {/* background: El valor por defecto de background es reemplazado por e.target.value */}
        </div>
    )
}

export default Navbar
