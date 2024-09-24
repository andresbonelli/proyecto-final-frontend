import { CountryCode } from ".";

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

interface Address {
  address_street_no?: string | null;
  address_street_name?: string | null;
  address_city?: string | null;
  address_state?: string | null;
  address_country_code?: CountryCode | null;
  address_postal_code?: string | null;
}
