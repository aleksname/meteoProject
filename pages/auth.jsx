// import React, { useEffect, useState } from 'react'
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
// import {app, googleAuthProvider} from './firebase'

// export default function auth() {
//     const auth = getAuth(app);
//     const [user, setUser] = useState(auth.currentUser)

//     useEffect(() => {
//        const unsub = auth.onAuthStateChanged((maybeUser) => {
//             if (maybeUser != null) {
//                 return setUser(maybeUser);
//             }

//             signInWithPopup(auth, GoogleAuthProvider)
//             .then((credential) => setUser(credentials.user))
//             .catch((e) => console.log(e));
//         })
//         return unsub
//     })

//     return (
//         user != null ? <>{user.displayName}</> : <>loading</>   
//     )
// }
