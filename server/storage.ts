import { db } from "./db";
import { products, inquiries, type Product, type InsertInquiry, type InquiryResponse } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProductBySlug(slug: string): Promise<Product | undefined>;
  createInquiry(inquiry: InsertInquiry): Promise<InquiryResponse>;
  seedProducts(data: any[]): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getProducts(): Promise<Product[]> {
    return await db.select().from(products);
  }

  async getProductBySlug(slug: string): Promise<Product | undefined> {
    const [product] = await db.select().from(products).where(eq(products.slug, slug));
    return product;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<InquiryResponse> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async seedProducts(data: any[]): Promise<void> {
    const count = await db.select().from(products);
    if (count.length === 0) {
      await db.insert(products).values(data);
    }
  }
}

export const storage = new DatabaseStorage();
