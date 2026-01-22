export interface Industry {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  products: string[];
}

export const industries: Industry[] = [
  {
    id: "1",
    slug: "automotive",
    title: "Automotive",
    description: "Comprehensive solutions for the automotive manufacturing sector, from assembly line automation to quality control systems. Our technologies help automotive manufacturers increase efficiency, reduce defects, and meet the highest industry standards.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop",
    products: ["1", "3", "4"]
  },
  {
    id: "2",
    slug: "food-beverage",
    title: "Food & Beverage",
    description: "Specialized automation and quality control solutions for food and beverage production. Our systems ensure compliance with safety regulations while maximizing production efficiency and product consistency.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop",
    products: ["2", "4", "5"]
  },
  {
    id: "3",
    slug: "pharmaceutical",
    title: "Pharmaceutical",
    description: "Precision automation solutions for pharmaceutical manufacturing with strict adherence to regulatory requirements. Our systems ensure product quality, traceability, and compliance with FDA and other regulatory standards.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    products: ["1", "4", "6"]
  },
  {
    id: "4",
    slug: "electronics",
    title: "Electronics",
    description: "Advanced manufacturing solutions for the electronics industry, featuring high-precision assembly, automated testing, and quality inspection systems. Enable rapid production of complex electronic components.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    products: ["2", "3", "4"]
  },
  {
    id: "5",
    slug: "chemical",
    title: "Chemical",
    description: "Robust automation and monitoring solutions for chemical processing plants. Our systems ensure safe operations, precise control of chemical processes, and compliance with environmental regulations.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    products: ["1", "6"]
  },
  {
    id: "6",
    slug: "textile",
    title: "Textile",
    description: "Automation solutions for textile manufacturing, from yarn production to fabric finishing. Our systems optimize production workflows, reduce material waste, and improve product quality.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    products: ["1", "2", "5"]
  }
];
