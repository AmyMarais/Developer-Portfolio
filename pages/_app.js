import Layout from "../components/Layout";

function MyApp ( { Component, pageProps}) {
    return ( 
        <Layout>
            <Component {...pageProps}/> {/*here the pages are output*/}
        </Layout>
     );
}
 
export default MyApp;