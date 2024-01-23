import clientPromise from "../../components/mongoDatabase";
import { Filter } from "mongodb";
import { NextResponse } from "next/server"

interface UserData {
    username: string;
    authProvider: AuthProviders;

}

enum AuthProviders {
    FACEBOOK,
    GOOGLE
}


export async function GET(req: Request) {
    try {
        const client = await clientPromise;
        const db = client.db("NextJsAuth");

        const user = await db
            .collection("users")
            .find({
                "username": "user1"
            })
            .sort({ metacritic: -1 })
            .limit(10)
            .toArray();
        console.log(user)
        return NextResponse.json(user);
    } catch (e) {
        console.error(e);
    }
};