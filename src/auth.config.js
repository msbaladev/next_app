"use client"

import Cookies from "js-cookie";

export async function token(){
    const user_token=await  Cookies.get("token");
    console.log(user_token);
    return user_token;
}