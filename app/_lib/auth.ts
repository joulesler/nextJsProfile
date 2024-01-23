import { redirect } from "next/navigation"

import CredentialsProvider, { CredentialsConfig } from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"
import CredentialInput from "next-auth/providers/credentials"
import { NextAuthOptions, User } from "next-auth"
import { randomUUID } from "crypto"


async function authorizerFn(credentials: Record<keyof Record<string, typeof CredentialInput>, string> | undefined,): Promise<User | null>{
    if (!credentials){
        return {id: "randomUUID.toString()"} as User
    }

    return {id: randomUUID.toString()} as User

}

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name:"Email Sign In",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "email@domain.com"
                },
                password: { label: "Password", type: "password"}
            },
            authorize: authorizerFn,
        })
    ]
}