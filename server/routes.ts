import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

const SEED_DATA = [
  {
    slug: "calcite-powder",
    name: "Calcite Powder",
    heroImage: "https://images.unsplash.com/photo-1595856754044-64b581452932?auto=format&fit=crop&q=80",
    description: "High-purity Calcium Carbonate (CaCO₃) known for its high whiteness and chemical purity. Essential for various industrial applications.",
    specifications: {
      purity: "High Purity CaCO₃",
      chemicalFormula: "CaCO₃",
      characteristics: ["High Whiteness", "Low Oil Absorption", "High Dispersibility"],
      features: [
        "Excellent chemical purity",
        "High brightness and whiteness",
        "Controlled particle size distribution",
        "Low moisture content"
      ],
      properties: {
        "Brightness": "96% - 99%",
        "Whiteness": "97% Min",
        "Moisture": "< 0.2%",
        "Specific Gravity": "2.7",
        "pH Value": "9 - 9.5",
        "Bulk Density": "0.6 - 0.9 gm/cc",
        "Oil Absorption": "18 - 22 ml/100gm"
      },
      particleSizes: ["Ultra Fine", "Super Fine", "Fine", "Custom Mesh Sizes"],
      packaging: ["25 Kg Bags", "50 Kg Bags", "1 Tonne Jumbo Bags"],
      applications: ["Paints & Coatings", "Plastics", "Rubber", "Paper", "Construction"]
    }
  },
  {
    slug: "dolomite-powder",
    name: "Dolomite Powder",
    heroImage: "https://images.unsplash.com/photo-1618423238692-75d197609805?auto=format&fit=crop&q=80",
    description: "Premium double carbonate of Calcium and Magnesium (CaMg(CO₃)₂). Offers excellent weather resistance and mechanical properties.",
    specifications: {
      chemicalFormula: "CaMg(CO₃)₂",
      characteristics: ["High Hardness", "Weather Resistance", "High Bulk Density"],
      features: [
        "High degree of whiteness",
        "Low oil absorption",
        "Excellent dispersibility",
        "Cost-effective filler"
      ],
      properties: {
        "Brightness": "90% - 95%",
        "Whiteness": "92% Min",
        "Moisture": "< 0.2%",
        "Specific Gravity": "2.85",
        "pH Value": "9.5 - 10",
        "Hardness": "3.5 - 4 Mohs"
      },
      particleSizes: ["300 Mesh to 700 Mesh", "Custom Micron Sizes"],
      packaging: ["50 Kg HDPE Bags", "Jumbo Bags"],
      applications: ["Steel & Iron", "Glass", "Ceramics", "Soap & Detergent", "Paints"]
    }
  },
  {
    slug: "quartz-powder",
    name: "Quartz Powder",
    heroImage: "https://images.unsplash.com/photo-1566223789505-8854c602a832?auto=format&fit=crop&q=80",
    description: "High-purity Silica (>99% SiO₂) powder. Known for its hardness, chemical inertness, and high melting point.",
    specifications: {
      purity: ">99% SiO₂",
      chemicalFormula: "SiO₂",
      characteristics: ["High Hardness", "Chemical Inertness", "Electrical Insulation"],
      features: [
        "High silica content",
        "Low iron content",
        "Chemical stability",
        "Abrasion resistance"
      ],
      properties: {
        "Silica (SiO₂)": "99.5% Min",
        "Whiteness": "95% Min",
        "Moisture": "< 0.1%",
        "Specific Gravity": "2.65",
        "Hardness": "7 Mohs",
        "Melting Point": "1700°C"
      },
      particleSizes: ["100 Mesh to 500 Mesh", "Micronized grades"],
      packaging: ["50 Kg Bags", "1.25 MT Jumbo Bags"],
      applications: ["Glass", "Ceramics", "Foundry", "Electronics", "Construction Chemicals"]
    }
  },
  {
    slug: "quartz-grits",
    name: "Quartz Grits",
    heroImage: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80",
    description: "Premium quality Quartz Grits available in multiple grades and sizes. Ideal for engineered stone and construction.",
    specifications: {
      purity: "High Purity Silica",
      characteristics: ["Uniform Size", "Low Dust", "High Strength"],
      features: [
        "Consistent particle size",
        "High purity",
        "Low iron content",
        "Excellent structural strength"
      ],
      properties: {
        "SiO₂ Content": "99.0% Min",
        "Fe₂O₃": "< 0.05%",
        "Hardness": "7 Mohs",
        "Color": "Snow White / Transparent"
      },
      particleSizes: ["0.1-0.4mm", "0.3-0.7mm", "0.6-1.2mm", "1.2-2.5mm", "2.5-4.0mm"],
      packaging: ["50 Kg Bags", "Jumbo Bags"],
      applications: ["Engineered Stone", "Countertops", "Water Filtration", "Flooring"]
    }
  },
  {
    slug: "talc-soapstone-powder",
    name: "Talc / Soapstone Powder",
    heroImage: "https://images.unsplash.com/photo-1622329778263-883907c08a9a?auto=format&fit=crop&q=80",
    description: "Hydrated Magnesium Silicate known for its extreme softness, hydrophobicity, and lubricating properties.",
    specifications: {
      chemicalFormula: "Mg₃Si₄O₁₀(OH)₂",
      characteristics: ["Lamellar Structure", "Softness", "Hydrophobic"],
      features: [
        "Super soft texture",
        "High brightness",
        "Excellent lubricating properties",
        "Chemical inertness"
      ],
      properties: {
        "Brightness": "85% - 98%",
        "Whiteness": "90% - 96%",
        "Moisture": "< 0.5%",
        "Specific Gravity": "2.7 - 2.8",
        "Hardness": "1 Mohs (Softest Mineral)",
        "Loss on Ignition": "4% - 6%"
      },
      particleSizes: ["300 Mesh to 700 Mesh", "Micronized 10-20 Microns"],
      packaging: ["25 Kg / 50 Kg Bags"],
      applications: ["Paper", "Paints", "Cosmetics", "Pharmaceuticals", "Plastics"]
    }
  },
  {
    slug: "coated-calcite-powder",
    name: "Coated Calcite Powder",
    heroImage: "https://images.unsplash.com/photo-1594897030312-d81b37626993?auto=format&fit=crop&q=80",
    description: "Calcium Carbonate coated with Stearic Acid. Improves dispersibility and compatibility with polymer matrices.",
    specifications: {
      purity: "Stearic Acid Coated",
      characteristics: ["Hydrophobic", "Better Flow", "High Gloss"],
      features: [
        "Reduced oil absorption",
        "Better dispersion in polymers",
        "Hydrophobic properties",
        "High gloss finish in products"
      ],
      properties: {
        "CaCO₃ Content": "98% Min",
        "Coating Content": "0.5% - 1.2%",
        "Whiteness": "96% Min",
        "Moisture": "< 0.1%",
        "pH Value": "9 - 10"
      },
      particleSizes: ["Micronized Top Cut 5-10 Microns"],
      packaging: ["25 Kg Bags"],
      applications: ["PVC Pipes", "Masterbatches", "Rubber Cables", "Plastics"]
    }
  },
  {
    slug: "coated-dolomite-powder",
    name: "Coated Dolomite Powder",
    heroImage: "https://images.unsplash.com/photo-1605557202138-097824c3f5c4?auto=format&fit=crop&q=80",
    description: "Surface-treated Dolomite Powder for enhanced performance in plastic and rubber applications.",
    specifications: {
      purity: "Stearic Acid Coated",
      characteristics: ["Low Moisture Pickup", "Good Dispersion", "Cost Effective"],
      features: [
        "Improved mechanical properties",
        "Higher loading capacity in plastics",
        "Reduced moisture absorption",
        "Excellent compatibility"
      ],
      properties: {
        "Dolomite Content": "98% Min",
        "Coating": "Stearic Acid",
        "Whiteness": "94% Min",
        "Bulk Density": "0.8 - 1.0"
      },
      particleSizes: ["Micronized"],
      packaging: ["50 Kg Bags", "Jumbo Bags"],
      applications: ["Plastic Compounds", "Rubber Industry", "Thermoplastics"]
    }
  }
];

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed Products on startup
  await storage.seedProducts(SEED_DATA);

  // Products API
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.getBySlug.path, async (req, res) => {
    const product = await storage.getProductBySlug(req.params.slug);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  });

  // Inquiries API
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      const inquiry = await storage.createInquiry(input);
      res.status(201).json(inquiry);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
