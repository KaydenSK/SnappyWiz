import React from 'react'
import { UserButton } from "@clerk/nextjs";
import Auth from '../(auth)/auth';
import { auth } from "@clerk/nextjs/server";


const Home = () => {
  const { userId } = auth(); /* 
  if (userId) {
    redirect("/dashboard");
  } */
  
  return (
    <div>
      <p>Home</p>

      <Auth/>
    </div>
  )
}

export default Home