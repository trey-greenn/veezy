import "@/styles/globals.css";
import type { AppProps } from "next/app";


import { SessionProvider } from "next-auth/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebaseconfig";
import Login from "@/components/Login";
import { redirect } from 'next/navigation'



function App({ Component, pageProps }: AppProps) {
  // const router = useRouter()

  // const [user, loading, error] = useAuthState(auth);
  // if(loading){
  //   return(
  //     "trey"
  //   )
  // }
  // if(user){
  //   return(
  //     router.push("/")
  //     )
  // }
  return (
   <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
   </SessionProvider>
  );
 }
 
 export default App;
