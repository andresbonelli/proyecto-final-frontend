interface svgProps {
  width: number;
  height: number;
  fill: string;
  stroke?: string;
}

interface navLink {
  label: string;
  link: string;
}

interface navbarProps {
  fixed?: boolean;
  padded?: boolean;
  inverted?: boolean;
  links: navLink[];
}

interface ProductFromDB {
  name: string;
  description: string;
  price: number;
  old_price?: any;
  stock: number;
  sku?: string | null;
  image?: string | null;
  category?: string;
  details?: ProductDetails;
  tags?: string[] | null;
  id: string;
  staff_id: string;
  sales_count?: number | null;
  created_at: string;
  modified_at?: string | null;
}

interface ProductDetails {
  image_list?: string[] | null;
  sizes?: string[] | null;
  long_description?: string | null;
}
