import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const registerWithEmail = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginWithEmail = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const setUserNamePhoto = (createdUser, name, photo) => {
    return updateProfile(createdUser, {
      displayName: name,
      photoURL: photo
    })
  }

  const logOut = () => signOut(auth);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log(loggedUser);
      setUser(loggedUser);
      setLoader(false);
    })

    return () => unsubscribe();
  }, []);

  const authInfo = { user, loader, registerWithEmail, loginWithEmail, logOut, setUserNamePhoto };
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
