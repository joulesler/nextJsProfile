import { NextApiResponse } from "next"
import { comments } from "./comments"
import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import { cookies } from "next/headers"

export interface Comment {
    id: number
    text: string
}

export function GET(request: NextRequest, { params }: {
    params:
    {
        id: string
    }
}) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get("searchText")
    const filteredComments = query ?
        comments.filter(comment => comment.text.includes(query)) :
        comments
    return Response.json(filteredComments)
}

export async function POST(request: Request, res: NextApiResponse) {
    const reqComment = await request.json()
    const reqHeaders = new Headers(request.headers)
    const newComment: Comment = {
        id: comments.length + 1,
        text: reqComment.text
    }
    comments.push(newComment)
    cookies().set("theme", "clearer")
    return new Response(JSON.stringify(newComment), {headers: {
        "Content-Type" : "application/json",
        "Authorization": "Bearer 1234",
        "set-cookie" : "name=user1"
    }})

}