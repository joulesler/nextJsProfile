import { NextRequest } from "next/server";
import { comments } from "../comments";
import { RedirectType, redirect } from "next/navigation"

export async function PUT(request: Request, { params }: {
    params:
    {
        id: number
        text: string
    }
}) {
    const index = comments.findIndex(
        (comment) => comment.id == params.id
    )

    comments[index].text = (await request.json()).text
    return Response.json(comments)
}


export function GET(request: NextRequest, { params }: {
    params:
    {
        id: string
    }
}) {
    const comment = comments.find(
        (comment) => comment.id === parseInt(params.id)
    )
    if (!comment) {
        redirect("/comments", RedirectType.replace)
    }
    return Response.json(comment)
}


export async function DELETE(request: Request, { params }: {
    params: {
        id: number
    }
}) {
    const body = await request.json()
    const index = comments.findIndex((comment) => {
        comment.id === params.id
    })
    comments.splice(index, 1)
    return Response.json(comments)

}