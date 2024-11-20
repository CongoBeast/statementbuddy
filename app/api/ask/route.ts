import { NextResponse } from "next/server";
import OpenAI from "openai";


// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Replace with your OpenAI API Key if not using env
});

// Define the POST request handler
export async function POST() {
  try {
    // Create a test completion request
    const completion = await openai.chat.completions.create({
      model: "gpt-4", // Specify the OpenAI model
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: "Write a haiku about recursion in programming.",
        },
      ],
    });

    // Extract the generated text
    const result = completion.choices[0]?.message?.content || "No response";

    // Return the result as JSON
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error connecting to OpenAI:", error);
    return NextResponse.json(
      { error: "Failed to connect to OpenAI", details: error.message },
      { status: 500 }
    );
  }
}
