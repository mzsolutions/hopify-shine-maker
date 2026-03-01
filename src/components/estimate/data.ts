import americanSheer from "@/assets/curtain-american-sheer.jpg";
import americanBlackout from "@/assets/curtain-american-blackout.jpg";
import curtainCombo from "@/assets/curtain-combo.jpg";
import waveSheer from "@/assets/curtain-wave-sheer.jpg";
import waveBlackout from "@/assets/curtain-wave-blackout.jpg";
import curtainRing from "@/assets/curtain-ring.jpg";
import rollerBlinds from "@/assets/curtain-roller-blinds.jpg";
import zebraBlinds from "@/assets/curtain-zebra-blinds.jpg";
import romanBlinds from "@/assets/blind-roman.jpg";
import venetianBlinds from "@/assets/blind-venetian.jpg";
import verticalBlinds from "@/assets/blind-vertical.jpg";
import pleatedBlinds from "@/assets/blind-pleated.jpg";
import panelBlinds from "@/assets/blind-panel.jpg";
import { Category, Accessory } from "./types";

export const categories: Category[] = [
  {
    id: "american",
    name: "American",
    description: "Classic pleated elegance with timeless draping",
    subcategories: [
      {
        id: "american-sheer",
        name: "Sheer",
        image: americanSheer,
        description: "Light-filtering soft fabric",
        formula: "curtain",
        rate: 210,
        minPrice: 210,
      },
      {
        id: "american-blackout",
        name: "Blackout",
        image: americanBlackout,
        description: "Total darkness & privacy",
        formula: "curtain",
        rate: 230,
        minPrice: 230,
      },
      {
        id: "american-combo",
        name: "Sheer + Blackout",
        image: curtainCombo,
        description: "Double-layer versatility for full light control",
        formula: "curtain",
        rate: 430,
        minPrice: 410,
        isDoubleLayer: true,
      },
    ],
  },
  {
    id: "wave",
    name: "Wave",
    description: "Modern S-fold ripple for a sleek, contemporary look",
    subcategories: [
      {
        id: "wave-sheer",
        name: "Sheer",
        image: waveSheer,
        description: "Flowing wave sheer fabric",
        formula: "curtain",
        rate: 240,
        minPrice: 240,
      },
      {
        id: "wave-blackout",
        name: "Blackout",
        image: waveBlackout,
        description: "Premium wave blackout",
        formula: "curtain",
        rate: 270,
        minPrice: 270,
      },
      {
        id: "wave-combo",
        name: "Sheer + Blackout",
        image: curtainCombo,
        description: "Complete light control with wave elegance",
        formula: "curtain",
        rate: 500,
        minPrice: 500,
        isDoubleLayer: true,
      },
    ],
  },
  {
    id: "ring",
    name: "Ring",
    description: "Grommet-top curtains with bold, structured folds",
    subcategories: [
      {
        id: "ring-sheer",
        name: "Sheer",
        image: curtainRing,
        description: "Sheer fabric with ring-top hardware",
        formula: "curtain",
        rate: 240,
        minPrice: 240,
      },
      {
        id: "ring-blackout",
        name: "Blackout",
        image: curtainRing,
        description: "Blackout fabric with ring-top hardware",
        formula: "curtain",
        rate: 270,
        minPrice: 270,
      },
      {
        id: "ring-combo",
        name: "Sheer + Blackout",
        image: curtainCombo,
        description: "Double layer with ring-top styling",
        formula: "curtain",
        rate: 500,
        minPrice: 500,
        isDoubleLayer: true,
      },
    ],
  },
  {
    id: "blinds",
    name: "Blinds",
    description: "Functional & minimal window solutions",
    subcategories: [
      {
        id: "roller-blinds",
        name: "Roller Blinds",
        image: rollerBlinds,
        description: "Clean, modern roller mechanism",
        formula: "blind-area",
        rate: 100,
        subOptions: ["Blackout Roller", "Sunscreen Roller", "Day & Night Roller"],
      },
      {
        id: "roman-blinds",
        name: "Roman Blinds",
        image: romanBlinds,
        description: "Soft pleated folds for a premium look",
        formula: "quote",
        subOptions: ["Flat Roman", "Hobbled Roman", "Blackout Roman"],
      },
      {
        id: "venetian-blinds",
        name: "Venetian Blinds",
        image: venetianBlinds,
        description: "Horizontal tilting slats for offices & kitchens",
        formula: "quote",
        subOptions: ["Aluminum", "Wooden", "Faux Wood"],
      },
      {
        id: "vertical-blinds",
        name: "Vertical Blinds",
        image: verticalBlinds,
        description: "Ideal for large windows & sliding doors",
        formula: "quote",
        subOptions: ["Fabric Vertical", "PVC Vertical"],
      },
      {
        id: "zebra-blinds",
        name: "Zebra Blinds",
        image: zebraBlinds,
        description: "Alternating sheer & solid stripes",
        formula: "blind-area",
        rate: 145,
        subOptions: ["Manual Zebra", "Motorized Zebra"],
      },
      {
        id: "pleated-blinds",
        name: "Pleated Blinds",
        image: pleatedBlinds,
        description: "Accordion-style cellular insulation",
        formula: "quote",
        subOptions: ["Standard Pleated", "Honeycomb Cellular"],
      },
      {
        id: "panel-blinds",
        name: "Panel Blinds",
        image: panelBlinds,
        description: "Large panels for wide glass doors & partitions",
        formula: "quote",
      },
    ],
  },
];

export const accessories: Accessory[] = [
  {
    id: "motor-remote",
    name: "Motor + Remote",
    description: "Remote or mobile operated · 7-year warranty",
    priceType: "fixed",
    price: 850,
    priceDouble: 1600,
  },
  {
    id: "extra-weight",
    name: "Extra Weight at Bottom",
    description: "Added weight for better draping",
    priceType: "per-meter-width",
    price: 20,
    onlyFor: "curtain",
  },
  {
    id: "side-stick",
    name: "Side Stick for Opening/Closing",
    description: "Convenient side stick mechanism",
    priceType: "per-unit",
    price: 20,
    maxQty: 4,
    onlyFor: "curtain",
  },
  {
    id: "side-returns",
    name: "Side Returns",
    description: "Extra curtain wrapping on the sides",
    priceType: "per-side",
    price: 50,
    maxQty: 2,
    onlyFor: "curtain",
  },
  {
    id: "bend-rail",
    name: "Bend Rail for Curved Spaces",
    description: "Custom rail for curved window areas",
    priceType: "per-meter-width",
    price: 40,
    onlyFor: "curtain",
  },
  {
    id: "velcro-stitching",
    name: "Light Reduction Velcro",
    description: "Velcro stitching to block side light gaps",
    priceType: "per-curtain",
    price: 150,
    maxQty: 1,
    onlyFor: "curtain",
  },
  {
    id: "tie-belt",
    name: "Tie Belt + Side Hooks",
    description: "Matching fabric tie with decorative hooks",
    priceType: "per-curtain",
    price: 50,
    maxQty: 2,
    onlyFor: "curtain",
  },
  {
    id: "box-blinds",
    name: "Box for Blinds",
    description: "Covering box for blind mechanism",
    priceType: "blind-area",
    price: 30,
    maxQty: 1,
    onlyFor: "blind",
  },
];
