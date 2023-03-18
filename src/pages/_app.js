import '~/styles/globals.scss'
import 'tailwindcss/tailwind.css'

// redux
import { Provider } from 'react-redux'
import { persistor, store } from '~/redux/store'

// redux persist
import { PersistGate } from 'redux-persist/integration/react'

function MyApp ( { Component, pageProps } )
{
    return (
        <Provider store={ store }>
            <PersistGate loading={ null } persistor={ persistor }>
                <Component { ...pageProps } />
            </PersistGate>
        </Provider>
    )
}

export default MyApp
