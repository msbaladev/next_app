"use client";

import { useAuth } from '@/Context/AuthContext';
import Cookies from 'js-cookie';
import { redirect } from 'next/navigation';

import React, { useLayoutEffect } from 'react'

function SignInPage() {


    const { name, user, login } = useAuth();
  
 

    const signin = () => {
      login("msbala", "msbala");
    };
  return (
    <div>SignInPage



<button onClick={signin} className="bg-black py-2 px-6 text-white">
        Sign In
      </button>
    </div>
  )
}

export default SignInPage