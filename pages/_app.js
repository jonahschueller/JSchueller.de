import NavigationBar from '../common/navigationbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavigationBar/>
      <Component {...pageProps} />
    </div>)
}

export default MyApp
