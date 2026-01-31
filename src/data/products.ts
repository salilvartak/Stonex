export interface ProductSpecifications {
  purity?: string;
  features: string[];
  packaging: string[];
  properties: Record<string, string>;
  applications: string[];
  particleSizes: string[];
  characteristics: string[];
  chemicalFormula?: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  description: string;
  hero_image: string;
  specifications: ProductSpecifications;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "calcite-powder",
    name: "Calcite Powder",
    description: "High-purity Calcium Carbonate (CaCO₃) known for its high whiteness and chemical purity. Essential for various industrial applications.",
    hero_image: "https://images.unsplash.com/photo-1595856754044-64b581452932?auto=format&fit=crop&q=80",
    specifications: {
      purity: "High Purity CaCO₃",
      features: ["Excellent chemical purity", "High brightness and whiteness", "Controlled particle size distribution", "Low moisture content"],
      packaging: ["25 Kg Bags", "50 Kg Bags", "1 Tonne Jumbo Bags"],
      properties: {
        Moisture: "< 0.2%",
        "pH Value": "9 - 9.5",
        Whiteness: "97% Min",
        Brightness: "96% - 99%",
        "Bulk Density": "0.6 - 0.9 gm/cc",
        "Oil Absorption": "18 - 22 ml/100gm",
        "Specific Gravity": "2.7"
      },
      applications: ["Paints & Coatings", "Plastics", "Rubber", "Paper", "Construction"],
      particleSizes: ["Ultra Fine", "Super Fine", "Fine", "Custom Mesh Sizes"],
      characteristics: ["High Whiteness", "Low Oil Absorption", "High Dispersibility"],
      chemicalFormula: "CaCO₃"
    }
  },
  {
    id: 2,
    slug: "dolomite-powder",
    name: "Dolomite Powder",
    description: "Premium double carbonate of Calcium and Magnesium (CaMg(CO₃)₂). Offers excellent weather resistance and mechanical properties.",
    hero_image: "https://images.unsplash.com/photo-1618423238692-75d197609805?auto=format&fit=crop&q=80",
    specifications: {
      features: ["High degree of whiteness", "Low oil absorption", "Excellent dispersibility", "Cost-effective filler"],
      packaging: ["50 Kg HDPE Bags", "Jumbo Bags"],
      properties: {
        Hardness: "3.5 - 4 Mohs",
        Moisture: "< 0.2%",
        "pH Value": "9.5 - 10",
        Whiteness: "92% Min",
        Brightness: "90% - 95%",
        "Specific Gravity": "2.85",
        "Calcium Carbonate (CaCO₃)": "48% - 52%",
      },
      applications: ["Steel & Iron", "Glass", "Ceramics", "Soap & Detergent", "Paints"],
      particleSizes: ["300 Mesh to 700 Mesh", "Custom Micron Sizes"],
      characteristics: ["High Hardness", "Weather Resistance", "High Bulk Density"],
      chemicalFormula: "CaMg(CO₃)₂"
    }
  },
  {
    id: 3,
    slug: "quartz-powder",
    name: "Quartz Powder",
    description: "High-purity Silica (>99% SiO₂) powder. Known for its hardness, chemical inertness, and high melting point.",
    hero_image: "https://images.unsplash.com/photo-1566223789505-8854c602a832?auto=format&fit=crop&q=80",
    specifications: {
      purity: ">99% SiO₂",
      features: ["High silica content", "Low iron content", "Chemical stability", "Abrasion resistance"],
      packaging: ["50 Kg Bags", "1.25 MT Jumbo Bags"],
      properties: {
        Hardness: "7 Mohs",
        Moisture: "< 0.1%",
        Whiteness: "95% Min",
        "Melting Point": "1700°C",
        "Silica (SiO₂)": "99.5% Min",
        "Specific Gravity": "2.65"
      },
      applications: ["Glass", "Ceramics", "Foundry", "Electronics", "Construction Chemicals"],
      particleSizes: ["100 Mesh to 500 Mesh", "Micronized grades"],
      characteristics: ["High Hardness", "Chemical Inertness", "Electrical Insulation"],
      chemicalFormula: "SiO₂"
    }
  },
  {
    id: 4,
    slug: "quartz-grits",
    name: "Quartz Grits",
    description: "Premium quality Quartz Grits available in multiple grades and sizes. Ideal for engineered stone and construction.",
    hero_image: "https://images.unsplash.com/photo-1629196914375-f7e48f477b6d?auto=format&fit=crop&q=80",
    specifications: {
      purity: "High Purity Silica",
      features: ["Consistent particle size", "High purity", "Low iron content", "Excellent structural strength"],
      packaging: ["50 Kg Bags", "Jumbo Bags"],
      properties: {
        Color: "Snow White / Transparent",
        Hardness: "7 Mohs",
        "Fe₂O₃": "< 0.05%",
        "SiO₂ Content": "99.0% Min"
      },
      applications: ["Engineered Stone", "Countertops", "Water Filtration", "Flooring"],
      particleSizes: ["0.1-0.4mm", "0.3-0.7mm", "0.6-1.2mm", "1.2-2.5mm", "2.5-4.0mm"],
      characteristics: ["Uniform Size", "Low Dust", "High Strength"]
    }
  },
  {
    id: 5,
    slug: "talc-soapstone-powder",
    name: "Talc / Soapstone Powder",
    description: "Hydrated Magnesium Silicate known for its extreme softness, hydrophobicity, and lubricating properties.",
    hero_image: "https://images.unsplash.com/photo-1622329778263-883907c08a9a?auto=format&fit=crop&q=80",
    specifications: {
      features: ["Super soft texture", "High brightness", "Excellent lubricating properties", "Chemical inertness"],
      packaging: ["25 Kg / 50 Kg Bags"],
      properties: {
        Hardness: "1 Mohs (Softest Mineral)",
        Moisture: "< 0.5%",
        Whiteness: "90% - 96%",
        Brightness: "85% - 98%",
        "Loss on Ignition": "4% - 6%",
        "Specific Gravity": "2.7 - 2.8"
      },
      applications: ["Paper", "Paints", "Cosmetics", "Pharmaceuticals", "Plastics"],
      particleSizes: ["300 Mesh to 700 Mesh", "Micronized 10-20 Microns"],
      characteristics: ["Lamellar Structure", "Softness", "Hydrophobic"],
      chemicalFormula: "Mg₃Si₄O₁₀(OH)₂"
    }
  },
  {
    id: 6,
    slug: "coated-calcite-powder",
    name: "Coated Calcite Powder",
    description: "Calcium Carbonate coated with Stearic Acid. Improves dispersibility and compatibility with polymer matrices.",
    hero_image: "https://images.unsplash.com/photo-1594897030312-d81b37626993?auto=format&fit=crop&q=80",
    specifications: {
      purity: "Stearic Acid Coated",
      features: ["Reduced oil absorption", "Better dispersion in polymers", "Hydrophobic properties", "High gloss finish in products"],
      packaging: ["25 Kg Bags"],
      properties: {
        Moisture: "< 0.1%",
        "pH Value": "9 - 10",
        Whiteness: "96% Min",
        "CaCO₃ Content": "98% Min",
        "Coating Content": "0.5% - 1.2%"
      },
      applications: ["PVC Pipes", "Masterbatches", "Rubber Cables", "Plastics"],
      particleSizes: ["Micronized Top Cut 5-10 Microns"],
      characteristics: ["Hydrophobic", "Better Flow", "High Gloss"]
    }
  },
  {
    id: 7,
    slug: "coated-dolomite-powder",
    name: "Coated Dolomite Powder",
    description: "Surface-treated Dolomite Powder for enhanced performance in plastic and rubber applications.",
    hero_image: "https://images.unsplash.com/photo-1605557202138-097824c3f5c4?auto=format&fit=crop&q=80",
    specifications: {
      purity: "Stearic Acid Coated",
      features: ["Improved mechanical properties", "Higher loading capacity in plastics", "Reduced moisture absorption", "Excellent compatibility"],
      packaging: ["50 Kg Bags", "Jumbo Bags"],
      properties: {
        Coating: "Stearic Acid",
        Whiteness: "94% Min",
        "Bulk Density": "0.8 - 1.0",
        "Dolomite Content": "98% Min"
      },
      applications: ["Plastic Compounds", "Rubber Industry", "Thermoplastics"],
      particleSizes: ["Micronized"],
      characteristics: ["Low Moisture Pickup", "Good Dispersion", "Cost Effective"]
    }
  }
];