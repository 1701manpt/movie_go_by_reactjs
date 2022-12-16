import '../styles/globals.scss'

// redux
import { store } from "../redux/store"
import { Provider } from "react-redux"

function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	)
}

export default MyApp
