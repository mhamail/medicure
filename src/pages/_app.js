import '@/styles/globals.css'
import { Provider } from "react-redux";
import { wrapper, store } from '../utils/redux/store'


function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default wrapper.withRedux(App)
