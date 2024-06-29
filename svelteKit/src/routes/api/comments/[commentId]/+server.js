import { comments } from "$lib/comments";
import { json } from "@sveltejs/kit";

/**
 * @param {{ params: any; }} requestEvent
 */
export function GET(requestEvent) {
    const {params} = requestEvent;
    const {commentId} = params;
    const comment = comments.find(comment => comment.id === parseInt(commentId));
    return json(comment);
}

/**
 * @param {{ params: any; request: any; }} requestEvent
 */
export async function PATCH(requestEvent) {
    const {params, request} = requestEvent;
    const {commentId} = params;
    const {text} = await request.json();
    const comment = comments.find(comment => comment.id === parseInt(commentId));

    if (comment) {
        comment.text = text;
    }
    return json(comment);
}