import { useCallback, useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Import the Firebase configuration

interface User {
  displayName: string,
  email: string,
  emailVerified: boolean
}
export const useFirebaseAuth = () => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState<User | null>(null); 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);


  // Google Sign-In
  const signInWithGoogle = useCallback(() => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log("Google User: ", user);
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.log("Popup closed by the user before completing sign-in.");
          alert("You closed the sign-in popup before signing in. Please try again.");
        } else {
          console.error("Google Sign-In Error: ", error);
        }
      });
  }, [auth]);
  
  const signInWithGithub = useCallback(() => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        console.log("GitHub User: ", user);
      })
      .catch((error) => {
        if (error.code === "auth/popup-closed-by-user") {
          console.log("Popup closed by the user before completing sign-in.");
          alert("You closed the sign-in popup before signing in. Please try again.");
        } else {
          console.error("GitHub Sign-In Error: ", error);
        }
      });
  }, [auth]);
  

  return { signInWithGoogle, signInWithGithub, user };
};
