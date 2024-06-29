import { comments } from "$lib/comments";
import { json } from "@sveltejs/kit";

//! GET 
export function GET() {
    return json(comments);
}

//! POST 
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export async function POST(requestEvent) {
    const {request} = requestEvent;
    const {text} = await request.json();
    const newComment = {
        id: comments.length + 1,
        text
    }
    comments.push(newComment);
    // return new Response(JSON.stringify(newComment), { status: 201});
    return json(newComment, { status: 201});

}