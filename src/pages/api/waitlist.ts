import type { APIRoute } from 'astro';
import { z } from "zod";

// In-memory storage for waitlist
const waitlist = new Map<number, Subscriber>();
let currentId = 1;

// Types
interface Subscriber {
  id: number;
  email: string;
  createdAt: Date;
}

// Validation schema
const waitlistSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    
    // Validate request body
    const result = waitlistSchema.safeParse(body);
    
    if (!result.success) {
      return new Response(
        JSON.stringify({ 
          message: "Invalid email address"
        }),
        { status: 400 }
      );
    }
    
    const { email } = result.data;
    
    // Check if email already exists
    const emailExists = [...waitlist.values()].some(
      subscriber => subscriber.email.toLowerCase() === email.toLowerCase()
    );
    
    if (emailExists) {
      return new Response(
        JSON.stringify({ 
          message: "This email is already on our waitlist." 
        }),
        { status: 400 }
      );
    }
    
    // Add to waitlist
    const id = currentId++;
    const subscriber: Subscriber = {
      id,
      email,
      createdAt: new Date()
    };
    
    waitlist.set(id, subscriber);
    
    return new Response(
      JSON.stringify({
        message: "Successfully added to the waitlist",
        data: subscriber
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error('Waitlist submission error:', error);
    
    return new Response(
      JSON.stringify({ 
        message: "An error occurred while processing your request." 
      }),
      { status: 500 }
    );
  }
}

// Get waitlist count (for stats)
export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({ 
      count: waitlist.size 
    }),
    { status: 200 }
  );
}