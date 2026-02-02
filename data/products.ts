export const productsByCategory: Record<
  string,
  {
    id: number;
    name: string;
    weight: string;
    desc: string;
    long_desc: string;
    images: string[];
  }[]
> = {
  polyols: [
    {
      id: 1,
      name: "(PPG) Kukdo",
      weight: "Drum @210kg",
      desc: "Base materials for flexibility and mechanical strength in polyurethane foam",
      long_desc:
        "Kukdo Polypropylene Glycol (PPG) is a high-quality polyether polyol designed for flexible polyurethane foam applications. It provides excellent flexibility, elasticity, and mechanical strength, making it suitable for furniture, bedding, and automotive seating. With consistent quality and stable processing behavior, Kukdo PPG ensures reliable foam performance and uniform cell structure.",
      images: [
        "/images/products/PPG-Kukdo.jpg",
        "/images/products/PPG-Kukdo(2).jpg",
      ],
    },
    {
      id: 2,
      name: "(PPG) Chang Hua",
      weight: "Drum @210kg",
      desc: "Base materials for flexibility and mechanical strength in polyurethane foam",
      long_desc:
        "Chang Hua Polypropylene Glycol (PPG) is a cost-effective polyether polyol suitable for flexible polyurethane foam applications. It offers good flexibility and processability, making it ideal for furniture and bedding foam production where performance stability and economic efficiency are required.",
      images: ["/band-1.jpg"],
    },
    {
      id: 3,
      name: "(PPG) Long Hua",
      weight: "Drum @210kg",
      desc: "Base materials for flexibility and mechanical strength in polyurethane foam",
      long_desc:
        "Long Hua Polypropylene Glycol (PPG) is a reliable polyether polyol designed for flexible polyurethane foam manufacturing. It delivers balanced flexibility and mechanical strength, supporting stable foam production for furniture, mattress, and general cushioning applications.",
      images: [
        "/images/products/PPG-Long-Hua.jpg",
        "/images/products/PPG-Long-Hua(2).jpg",
      ],
    },
    {
      id: 4,
      name: "(POP) K-POP 3045",
      weight: "Drum @210kg",
      desc: "Base materials for flexibility and mechanical strength in polyurethane foam",
      long_desc:
        "K-POP 3045 is a polymer polyol designed to enhance load-bearing capacity and mechanical strength in flexible polyurethane foam. It is commonly used in high-quality furniture and bedding foam where improved durability and comfort are required.",
      images: [
        "/images/products/KPOP-3045.jpg",
        "/images/products/KPOP-3045(2).jpg",
      ],
    },
    {
      id: 5,
      name: "(POP) K-POP 3055",
      weight: "Drum @210kg",
      desc: "Base materials for flexibility and mechanical strength in polyurethane foam",
      long_desc:
        "K-POP 3055 is a high-performance polymer polyol formulated to provide higher firmness and superior load-bearing properties in flexible polyurethane foam. It is suitable for premium foam applications requiring enhanced durability and structural support.",
      images: [
        "/images/products/KPOP-3055.jpg",
        "/images/products/KPOP-3055(2).jpg",
      ],
    },
    {
      id: 6,
      name: "(POP) LHS 100",
      weight: "Drum @210kg",
      desc: "Base materials for flexibility and mechanical strength in polyurethane foam",
      long_desc:
        "LHS 100 is a polymer polyol developed to improve mechanical strength and processing stability in flexible polyurethane foam. It supports consistent foam quality and is suitable for a wide range of furniture and cushioning applications.",
      images: [
        "/images/products/LHS-100.jpg",
        "/images/products/LHS-100(2).jpg",
      ],
    },
    {
      id: 7,
      name: "(POP) LHS 200",
      weight: "Drum @210kg",
      desc: "Base materials for flexibility and mechanical strength in polyurethane foam",
      long_desc:
        "LHS 200 is an advanced polymer polyol offering enhanced load-bearing capacity and improved foam resilience. It is ideal for flexible polyurethane foam applications requiring higher durability and long-term performance.",
      images: [
        "/images/products/LHS-200.jpg",
        "/images/products/LHS-200(2).jpg",
      ],
    },
  ],

  isocyanates: [
    {
      id: 1,
      name: "Lupranate T-80 / TDI",
      weight: "Drum @250kg",
      desc: "Reactive components forming the polyurethane polymer structure",
      long_desc:
        "Lupranate T-80 is a toluene diisocyanate (TDI) widely used as a key reactive component in flexible polyurethane foam systems. It reacts with polyols to form the polyurethane polymer structure, delivering excellent elasticity, resilience, and mechanical performance. Lupranate T-80 is commonly applied in furniture, bedding, and automotive seating foam where consistent quality and reliable processing are required.",
      images: ["/images/products/TDI.jpg", "/images/products/TDI(2).jpg"],
    },
  ],

  "blowing-agents": [
    {
      id: 1,
      name: "Methylene Chloride (MC – LUXI)",
      weight: "Drum @270kg",
      desc: "Control foam density and cell structure",
      long_desc:
        "Methylene Chloride (MC – LUXI) is a physical blowing agent commonly used in flexible polyurethane foam production. It helps create a uniform cellular structure while controlling foam density and softness. MC provides stable processing performance and is widely applied in furniture, bedding, and cushioning foam applications.",
      images: [
        "/images/products/MC-LUXI.jpg",
        "/images/products/MC-LUXI(2).jpg",
      ],
    },
  ],

  "pu-catalysts": [
    {
      id: 1,
      name: "Stannous Octoate T9",
      weight: "Jerigen @25kg",
      desc: "Regulate reaction speed and process balance",
      long_desc:
        "Stannous Octoate T9 is a tin-based catalyst widely used in flexible polyurethane foam systems. It functions as a gel catalyst, promoting polymer formation and improving foam strength and curing efficiency. Stannous Octoate T9 provides reliable reaction control and is commonly applied in furniture, bedding, and automotive foam production.",
      images: ["/images/products/T9.jpg"],
    },
    {
      id: 2,
      name: "Amine Catalyst A33",
      weight: "Jerigen @25kg",
      desc: "Regulate reaction speed and process balance",
      long_desc:
        "Amine Catalyst A33 is a tertiary amine catalyst commonly used in flexible polyurethane foam systems. It primarily functions as a blowing catalyst, accelerating the reaction between isocyanates and water to generate gas and form the foam structure. Amine Catalyst A33 helps control cream time and rise profile, ensuring consistent foam quality and stable processing conditions.",
      images: ["/images/products/A33.jpg"],
    },
  ],

  "silicone-surfactants": [
    {
      id: 1,
      name: "Silicone Oil 580",
      weight: "Drum @210kg",
      desc: "Stabilize foam cells for consistent foam quality",
      long_desc:
        "Silicone Oil 580 is a silicone-based surfactant used as a cell stabilizer in flexible polyurethane foam systems. It helps control cell structure, improve foam uniformity, and prevent defects such as collapse and irregular pores. Silicone Oil 580 supports stable processing and is widely applied in furniture, bedding, and cushioning foam production.",
      images: [
        "/images/products/Sil-Oil-580.jpg",
        "/images/products/Sil-Oil-580(2).jpg",
      ],
    },
  ],
};
