import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { waitlistSchema } from "../shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Waitlist API route
  app.post("/api/waitlist", async (req, res) => {
    try {
      // Validate request body
      const data = waitlistSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getSubscriberByEmail(data.email);
      
      if (existingSubscriber) {
        return res.status(400).json({ 
          message: "This email is already on our waitlist." 
        });
      }
      
      // Add to waitlist
      const subscriber = await storage.addSubscriber(data);
      
      return res.status(201).json({
        message: "Successfully added to the waitlist",
        data: subscriber
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: validationError.message 
        });
      }
      
      console.error('Waitlist submission error:', error);
      return res.status(500).json({ 
        message: "An error occurred while processing your request." 
      });
    }
  });

  // Get waitlist stats (count) - useful for admin dashboard
  app.get("/api/waitlist/stats", async (_req, res) => {
    try {
      const count = await storage.getSubscriberCount();
      return res.status(200).json({ count });
    } catch (error) {
      console.error('Waitlist stats error:', error);
      return res.status(500).json({ 
        message: "An error occurred while retrieving waitlist stats." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
