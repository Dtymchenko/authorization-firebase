import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPassPage from './pages/ForgotPassPage';

import { collection, doc, setDoc } from 'firebase/firestore';
import { db  } from './firebase';

function App() {
    
  const usersCollection = collection(db, "usersss");
  const newDocRef = doc(usersCollection);
  const newData = {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  };
  // React.useEffect(() => {
  //   setDoc(newDocRef, newData)
  //   .then(() => {
  //     console.log("Document successfully written!");
  //   })
  //   .catch((error) => {
  //     console.error("Error writing document: ", error);
  //   });
  // },[])
  

  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/forgot' element={<ForgotPassPage/>}/>
    </Routes>
  );
}

export default App;
