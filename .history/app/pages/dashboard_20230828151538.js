"use client";
import { useState } from "react";
import axios from "axios";

export default function Home() {
    const [displayText, setDisplayText] = useState("");
    const [reversedText, setReversedText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [longestWord, setLongestWord] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post("/api/analyze-text", {
                text: displayText,
            });

            setReversedText(data.reversedText);
            setWordCount(data.wordCount);
            setLongestWord(data.longestWord);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
            Hello world
        </div>
    );
}
