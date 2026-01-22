export const productsByCategory: Record<
  string,
  { id: number; name: string; desc: string; image: string }[]
> = {
  pigment: [
    {
      id: 1,
      name: "Water-Based Pigment Paste",
      desc: "High performance water-based pigment system",
      image: "/band-1.jpg",
    },
    {
      id: 2,
      name: "Solvent-Based Pigment Paste",
      desc: "Highly concentrated pigment paste for solvent coatings",
      image: "/band-2.jpg",
    },
  ],

  silicone: [
    {
      id: 1,
      name: "Industrial Silicone Emulsion",
      desc: "Durable silicone solution for coatings and textiles",
      image: "/band-3.jpg",
    },
  ],

  biocides: [
    {
      id: 1,
      name: "Antibacterial Preservative",
      desc: "Protection against bacteria and fungi",
      image: "/band-4.jpg",
    },
  ],

  additives: [
    {
      id: 1,
      name: "Rheology Modifier",
      desc: "Improves viscosity and flow behavior",
      image: "/band-2.jpg",
    },
  ],
};
