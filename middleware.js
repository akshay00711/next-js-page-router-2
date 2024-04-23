// import { getToken } from "next-auth/jwt"
// import { NextResponse } from "next/server"

// export async function middleware(request) {

//     // Non-configured path
// //     var count = 0;
// //     //console.log("miidle" , count++)
// //     const session = await getToken({ req })
// //     if(isExactPath( req , "/login")){
// //         console.log('Hellp');
// //         return
// //     }else{
// //         console.log(' 12')
// //         return redirect( req, "/login")
// //     }
// //     console.log(session)
// //    //if(session){
// //         console.log(' 12');
// //        // return redirect( req, "/login")
// //     //}

// const path = request.nextUrl.pathname
// const token = request.cookies.get('token')?.value || ''
// const isPublicPath = path === '/login'

// console.log(path);

//     const session = false
//     if (!session && path !== "/login") {
//         return NextResponse.redirect(new URL('/login', request.url))
//     } else if (session && (path === '/login' || path === '/signup')) {
//         return NextResponse.redirect(new URL('/', request.url))
//     }
//     return NextResponse.next()
    
// }

// const redirect = (req, path) => NextResponse.redirect(new URL(path, req.url))

// const isExactPath = (req, path) => req.nextUrl.pathname === path


import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt"

export async function middleware(req){
     const session = await getToken({ req })
     //console.log(session)

     if(req.nextUrl.pathname!="/login" && !session){
        return NextResponse.redirect(new URL("/login",req.url)) 
     }

}

export const config={
    matcher:["/","/posts/:path*", "/contact"]
}