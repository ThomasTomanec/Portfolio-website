// components/SignUpComponent.js

import React from "react";
import {useSession, signIn, signOut} from 'next-auth/react'


const Form = () => {
  const {data: session} = useSession()

if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
};

export default Form;
