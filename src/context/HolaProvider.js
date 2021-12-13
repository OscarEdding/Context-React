import React from 'react'

export const HolaProvider = React.useContext()

const HolaProvider = (props) => {

    const hola = 'Hola desde Global'

    return (
        <HolaProvider.Provider value={{hola}}>
            {props.children}
        </HolaProvider.Provider>
    )
}

export default HolaProvider
