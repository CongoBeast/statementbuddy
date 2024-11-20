import { NextResponse } from 'next/server';
import OpenAI from 'openai'; // Assuming you are using OpenAI's SDK

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: "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", // Use environment variable for API key
});

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
  } catch (error: unknown) {
    // Type the error object properly
    if (error instanceof Error) {
      console.error("Error connecting to OpenAI:", error.message);
      return NextResponse.json(
        { error: "Failed to connect to OpenAI", details: error.message },
        { status: 500 }
      );
    } else {
      console.error("An unknown error occurred:", error);
      return NextResponse.json(
        { error: "An unknown error occurred", details: String(error) },
        { status: 500 }
      );
    }
  }
}
