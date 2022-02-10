import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';

const MyApp = () => {

    const {  }
    
    return (
        <FirebaseContext.Provider
            value={{
                firebase
            }}
        >

        </FirebaseContext.Provider>
    )
}

export default MyApp;




































// Notes 
// Este archivo tenia como codigo antes este:
// import '../styles/globals.css'
///
// function MyApp({ Component, pageProps }) {
//  return <Component {...pageProps} />
// }
// 
// export default MyApp
///