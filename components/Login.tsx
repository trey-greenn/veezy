import React from 'react'
import {useSignInWithGoogle} from "react-firebase-hooks/auth"
import {auth} from "../firebaseconfig"

export default function Login(){
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div className='flex justify-center items-center text-white'>
      <button title="login" type="submit" onClick={() => signInWithGoogle([""], {prompt: "select_account"})}> 
        Sign In With Google
      </button>
      
    </div>
  )
}

