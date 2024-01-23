import { redirect } from "next/navigation"
import { NextRequest, NextResponse } from "next/server"


export function middleware(request: NextRequest) {
    console.log("hit middleware with path", request.nextUrl.pathname)
    const response = NextResponse.next()
    // if (request.nextUrl.pathname == "/more") {
    //     return NextResponse.rewrite(new URL("/", request.url))
    // }

    if (request.nextUrl.pathname == "/home") {
        return NextResponse.redirect(new URL("/", request.url))
    }
    const preference = request.cookies.get("name")
    if (!preference) {
        response.cookies.set("name", "annonymous")
    }
    const username = request.cookies.get("name")?.value
    response.headers.set("x-user-id", username? username: "")
    return response
}

export const config = {
}