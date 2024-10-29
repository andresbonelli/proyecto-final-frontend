export interface svgProps {
  width: number;
  height: number;
  fill?: string;
  stroke?: string;
}

export interface ProductDetails {
  image_list?: string[] | null;
  sizes?: string[] | null;
  long_description?: string | null;
  // using snake case to match with Python backend.
  // (Python likes snakes :D)
}
export interface ProductFromDB {
  id: string;
  name: string;
  description: string;
  price: number;
  old_price?: number | null;
  stock: number;
  staff_id: string;
  sku?: string | null;
  image?: string | null;
  category?: string;
  details?: ProductDetails;
  tags?: string[] | null;
  sales_count?: number | null;
  created_at: string;
  modified_at?: string | null;
}

export interface ProductDto {
  name: string;
  description: string;
  price: number;
  old_price?: number | null;
  stock: number;
  sku?: string | null;
  image?: string | null;
  category?: string | null;
  details?: ProductDetails | null;
  tags?: string[] | null;
}

export interface ProductFromCart extends Partial<ProductFromDB> {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface ProductFromOrder extends Partial<ProductFromCart> {
  product_id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

enum OrderStatus {
  PENDING = "pending",
  COMPLETED = "completed",
  CANCELLED = "cancelled",
}

export interface OrderFromDB {
  products: ProductFromOrder[];
  id: string;
  customer_id: string;
  created_at: string;
  status: OrderStatus;
  total_price?: number | null;
  modified_at?: string | null;
}

export interface ProductQuery {
  filter?: string | null;
  limit?: number;
  offset?: number | null;
  sortBy?:
    | "name"
    | "description"
    | "price"
    | "old_price"
    | "stock"
    | "category"
    | "created_at"
    | "modified_at"
    | "sales_count";
  sortDir?: "asc" | "desc";
  projection?: string;
}

export interface AutocompleteResult {
  id: string;
  name: string;
}

export interface RegisterUserDto {
  username: string;
  email: string;
  password: string;
}

export interface LoginDto {
  input: string;
  password: string;
}

export interface UserInfoDto {
  firstname?: string | null;
  lastname?: string | null;
  image?: string | null;
  address?: Address[] | null;
}

export interface AdminUserInfoDto extends UserInfoDto {
  role?: Role | null;
  is_active?: boolean | null;
}

export interface NewUserDto extends AdminUserInfoDto {
  username: string;
  email: string;
  password: string;
  role: Role.STAFF;
  is_active: true;
}

export interface AccessToken {
  subject: UserFromDB;
  type: string;
  exp: number;
  iat: number;
  jti: string;
}

export interface UserFromDB {
  username: string;
  role: Role;
  email: string;
  firstname?: string | null;
  lastname?: string | null;
  image?: string | null;
  address?: Address[] | null;
  id: string;
  is_active: boolean;
  created_at: string;
  modified_at?: string | null;
}

export interface Address {
  address_street_no?: string | null;
  address_street_name?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country_code?: string | null;
  address_postal_code?: string | null;
}

export enum Role {
  CUSTOMER = "customer",
  STAFF = "staff",
  ADMIN = "admin",
}

export interface SideBarLink {
  label: string;
  link: string;
}
