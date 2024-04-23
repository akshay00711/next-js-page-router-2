import GuestLayout from "../components/layout/guestLayout";
import { signIn, signOut } from "next-auth/react";
import Router from "next/router"
//export default function Login() {


import { NextPage } from "next";
import { FormEventHandler, useState } from "react";


// const Login = (props) => {
  export default function Login() {
  const [userInfo, setUserInfo] = useState({ email: "john@gmail.com", password: "1234" });
  const handleSubmit = async (e) => {
    // validate your userinfo
    e.preventDefault();

   // const res = await signIn(); // to redirect to Next Auth Defaut pages
 
    const res = await signIn("credentials", {  // Custom credential check
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    if(res?.status == 200){
      Router.push("/")
    }
    console.log(res);
  };



  return (
    <div className=" m-auto bg-slate-100 rounded-xl p-12 ">
      <div className="flex justify-center pt-6 pb-4 border-gray-100">
                        <h1 className="text-lg text-blue-700">Login to Trail</h1>
                    </div>
      <form className="flex flex-col p-10 space-y-4 " onSubmit={handleSubmit}>
        <input
          className="p-3 text-base"
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
        className="p-3 text-base"
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input className="m-auto text-center rounded-md bg-amber-600 p-1 w-24 hover:opacity-75 hover:text-white hover:cursor-pointer" type="submit" value="Login" />
      </form>

{/* 
      <form onSubmit={handleLogout}>
        <h1>Sign Out</h1>
        
        <input type="submit" value="logout" />
      </form> */}
    </div>
  );
};

 Login.getLayout = page => <GuestLayout>{page}</GuestLayout>