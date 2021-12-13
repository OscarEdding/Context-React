import React from 'react'

export const ThemeContext = React.createContext()

const ThemeProvider = (props) => {

    const themes = {
        background: '#eee',
        color: '#000'
    }

    const [theme, setTheme] = React.useState(themes)

    React.useEffect(() => {
        if(localStorage.getItem('LocalTheme')){
            const LocalTheme = JSON.parse(localStorage.getItem('LocalTheme'))
            setTheme(LocalTheme)
        }
    }, [])
    
    const cambioColor = valor => {
        setTheme(valor)
        localStorage.setItem('themeLocal', JSON.stringify(valor))
        /* Guardamos los cambios de color en el localStorage */
    }

    return (
        <ThemeContext.Provider value={{theme, cambioColor}}>
            {props.children}
        </ThemeContext.Provider> /* Esto toma todo nuestros
        componentes hijos */
    )
}

export default ThemeProvider
