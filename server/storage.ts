import { waitlist, users, type Subscriber, type InsertSubscriber, type User, type InsertUser } from "@shared/schema";
import { db } from './db';
import { eq, count } from 'drizzle-orm';

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Waitlist methods
  addSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  getSubscriberCount(): Promise<number>;
  getAllSubscribers(): Promise<Subscriber[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private subscribers: Map<number, Subscriber>;
  currentUserId: number;
  currentSubscriberId: number;

  constructor() {
    this.users = new Map();
    this.subscribers = new Map();
    this.currentUserId = 1;
    this.currentSubscriberId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Waitlist methods
  async addSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.currentSubscriberId++;
    const createdAt = new Date();
    const subscriber: Subscriber = { 
      ...insertSubscriber, 
      id, 
      createdAt 
    };
    
    this.subscribers.set(id, subscriber);
    return subscriber;
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email.toLowerCase() === email.toLowerCase()
    );
  }

  async getSubscriberCount(): Promise<number> {
    return this.subscribers.size;
  }

  async getAllSubscribers(): Promise<Subscriber[]> {
    return Array.from(this.subscribers.values());
  }
}

// PostgreSQL storage implementation
export class PgStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username)).limit(1);
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const result = await db.insert(users).values(insertUser).returning();
    return result[0];
  }

  // Waitlist methods
  async addSubscriber(insertSubscriber: InsertSubscriber): Promise<Subscriber> {
    const result = await db.insert(waitlist).values(insertSubscriber).returning();
    return result[0];
  }

  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const result = await db.select().from(waitlist).where(eq(waitlist.email, email)).limit(1);
    return result[0];
  }

  async getSubscriberCount(): Promise<number> {
    const result = await db.select({ count: count() }).from(waitlist);
    return Number(result[0].count);
  }

  async getAllSubscribers(): Promise<Subscriber[]> {
    return await db.select().from(waitlist).orderBy(waitlist.createdAt);
  }
}

// Export the selected storage implementation
export const storage = new PgStorage();
