import '../styles/globals.css'
import '../Components/NavBar/navbar.css'
import Layout from '../Components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
