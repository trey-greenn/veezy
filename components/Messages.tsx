import { signOut } from 'firebase/auth';
import {auth} from '../firebaseconfig'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';

const Chat = () =>{
    

    return (
        <div className="p-3 flex ml-4 items-center hover:bg-gray-200 hover:text-black">
                <span className="material-symbols-outlined text-white text-5xl hover:text-blac">account_circle</span>
                <h4 className="ml-3 text-white ">John Doe </h4>

            </div>    

    )
}



export default function Messages(){
    const [user, loading, error] = useAuthState(auth);
    
  return (
    <div>
        <div className="flex flex-col w-[300px] bg-black h-[100vh]" >
            <div className="flex h-[81px] w-full justify-between border-b">
                <div className="flex flex-row w-full items-center">
                    <span className="material-symbols-outlined text-white text-5xl">account_circle</span>
                    <h4 className="ml-3 text-white">{user?.displayName} </h4>
                </div>
                <div className="p-2 flex items-center">
                    <button title="logout" type="submit" onClick={() => signOut(auth)}  > 
                    <span className="material-symbols-outlined text-white" >logout</span>
                    </button>
                </div>
            </div>

            <button title="nex-chat" className="m-5 p-4 bg-gray-600 w-4/5 h-fit text-white rounded-xl">
                New Chat

            </button>
            <div className="overflow-y-scroll flex-1">
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>


            </div>
            
             

        </div>
      
    </div>
  )
}


