
"use client"
import { useAuth } from '@/Context/AuthContext'
import Link from 'next/link'
import React from 'react'

function Header() {
const {user}= useAuth()


  return (
    <div>
<header>
    <div className='flex justify-between  h-12 items-center w-full bg-pink-500 text-white'>
     
        <div><Link href="/">Logo</Link></div>
       { user?.data.is_superadmin && <div><Link href="/"> Home</Link></div>}
        { user?.data.is_superadmin && <div><Link href="/data"> Data</Link></div>}
        <div><Link href={user?'/':'/signin'} >{user?<h2>{user?.data.username}</h2>:"sign in"}</Link></div>
        
    </div>
</header>

    </div>
  )
}

export default Header