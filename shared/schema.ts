import { pgTable, text, serial, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  heroImage: text("hero_image").notNull(),
  // Storing complex structured data as JSONB for flexibility
  specifications: jsonb("specifications").$type<{
    purity?: string;
    chemicalFormula?: string;
    characteristics?: string[];
    features?: string[];
    howWeSource?: string;
    properties?: {
      chemical?: Record<string, string>;
      physical?: Record<string, string>;
    };
    particleSizes?: string[];
    packaging?: string[];
    applications?: string[];
  }>().notNull(),
});

export const inquiries = pgTable("inquiries", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// === SCHEMAS ===
export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export const insertInquirySchema = createInsertSchema(inquiries).omit({ id: true, createdAt: true });

// === EXPLICIT API TYPES ===
export type Product = typeof products.$inferSelect;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type CreateInquiryRequest = InsertInquiry;
export type InquiryResponse = typeof inquiries.$inferSelect;
