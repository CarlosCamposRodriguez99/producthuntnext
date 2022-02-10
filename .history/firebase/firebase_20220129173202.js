import app from 'firebase/app';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
    }

    // Registra un usuario
    regi
}

const firebase = new Firebase();
export default firebase;





















// NOTES 
// app.initializeApp(firebaseConfig);
///