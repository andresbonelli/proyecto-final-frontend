import { CountryCode } from ".";

export interface svgProps {
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
}

export interface ProductFromDB {
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

export interface ProductDetails {
  image_list?: string[] | null;
  sizes?: string[] | null;
  long_description?: string | null;
}

export interface RegisterUserDto {
  username: string;
  email: string;
  password: string;
}

export interface LoginDto {
  username_or_email: string;
  password: string;
}

export interface EditUserInfoDto {
  firstname?: string | null;
  lastname?: string | null;
  image?: string | null;
  address?: Address[] | null;
}

export interface Address {
  address_street_no?: string | null;
  address_street_name?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country_code?: CountryCode | null;
  address_postal_code?: string | null;
}
