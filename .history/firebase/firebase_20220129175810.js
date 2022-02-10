import app from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.auth = app.auth();
    }

    // Registra un usuario
    registrar(nombre, email, password) {
        const
    }
}

const firebase = new Firebase();
export default firebase;





















// NOTES 
// app.initializeApp(firebaseConfig);
///