import { NextResponse } from "next/server";

async function fetchContacts() {
    const response = await fetch('https://vhloybnwf3poctpcjw2m66uh6q0kruyq.lambda-url.ap-southeast-2.on.aws/', {
        "method": "GET"
    })
    
    const contacts = await response.json();
    return contacts;
}

export async function GET() {
    const contacts = await fetchContacts();
    return NextResponse.json(contacts);
}