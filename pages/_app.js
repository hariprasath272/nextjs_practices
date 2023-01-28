import '@/styles/globals.css'
import Layout from './components/Layout'
// import 'bootstrap/dist/css/bootstrap.css'

 function App({ Component, pageProps }) {
  return(
    <Layout>
    <Component {...pageProps} />
    </Layout>
  ) 
}
export default App
