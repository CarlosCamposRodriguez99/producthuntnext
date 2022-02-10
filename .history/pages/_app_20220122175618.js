import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';

const MyApp = props => {

    const { Component, pageProps } = props;
    
    return (
        <FirebaseContext.Provider
            value={{
                firebase
            }}
        >
            <Component {...}
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