import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD-3f7Ef1gYI_wC54w4orpCNqYAJl9M83Y",
    authDomain: "coderfericos.firebaseapp.com",
    projectId: "coderfericos",
    storageBucket: "coderfericos.appspot.com",
    messagingSenderId: "467717429841",
    appId: "1:467717429841:web:0bc49d4c929144c8f57670"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

// const querySnapshot = await getDocs(collection(db, "products"));
// const products = querySnapshot
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });

// const colRef = collection(db, 'products')

// const allProducts = async () => {
//     await getDocs(colRef)
//         .then((snapshot) => {
//             let productos = []
//             snapshot.docs.forEach((doc) => {
//                 productos.push({...doc.data(), id: doc.id})
//             })
//             console.log('productos', productos)
            
//         })
// }

// export default {
//     // colRef,
//     // getDocs
//     // allProducts
//     db
// }