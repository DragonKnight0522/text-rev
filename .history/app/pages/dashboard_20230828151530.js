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
            <form onSubmit={handleSubmit}>
                <div className="col-span-full">
                    <label
                        htmlFor="displayText"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Input Text
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="displayText"
                            id="displayText"
                            value={displayText}
                            onChange={(event) =>
                                setDisplayText(event.target.value)
                            }
                            autoComplete="displayText"
                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end mt-6 gap-x-6">
                    <button
                        type="submit"
                        className="px-3 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Submit
                    </button>
                </div>
            </form>

            {reversedText && (
                <div>
                    <p>Reversed Text: {reversedText}</p>
                    <p>Word Count: {wordCount}</p>
                    <p>Longest Word: {longestWord}</p>
                </div>
            )}
        </div>
    );
}
