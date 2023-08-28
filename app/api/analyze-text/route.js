import { NextResponse } from "next/server";

export async function POST(req) {
    const { text } = await req.json();
    try {
        const reversedText = text.split("").reverse().join("");
        const words = text.match(/\b\w+\b/g);
        const wordCount = words ? words.length : 0;
        const longestWord = words
            ? words.reduce((a, b) => (a.length > b.length ? a : b))
            : "";
        console.log({ reversedText, wordCount, longestWord });
        return NextResponse.json({ reversedText, wordCount, longestWord });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ status: 500, error: "An error occurred" });
    }
}
