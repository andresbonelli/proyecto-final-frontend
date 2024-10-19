// round difference between price and old_price

import { OrderFromDB } from "./interfaces";

// into a fixed percentage, eg:5%, 10%, 15%, etc..
export function calculateDiscountPerc(
  old_price: number,
  price: number
): number {
  const discountPercentage = ((old_price - price) / old_price) * 100;

  const roundedDiscount = Math.round(discountPercentage / 5) * 5;

  return roundedDiscount;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const currentYear = new Date().getFullYear();

  if (year === currentYear) {
    return `${day} de ${month}`;
  } else {
    return `${day} de ${month} de ${year}`;
  }
}

export function getMonthlySales(orders: OrderFromDB[]) {
  if (!orders) return;
  const now = new Date();
  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(now.getFullYear() - 1);

  type MonthlySales = {
    [monthYear: string]: number;
  };

  const monthlySales: MonthlySales = {};

  orders.forEach((order) => {
    const createdAt = new Date(order.created_at);
    if (createdAt >= oneYearAgo) {
      const monthYear = `${createdAt.getFullYear()}-${
        createdAt.getMonth() + 1
      }`;

      if (!monthlySales[monthYear]) {
        monthlySales[monthYear] = 0;
      }

      monthlySales[monthYear] += order.total_price || 0;
    }
  });

  return monthlySales;
}

export function validateCardNumber(value: string): boolean {
  // accept only digits, dashes or spaces
  if (/[^0-9-\s]+/.test(value)) return false;

  // The Luhn Algorithm. It's so pretty.
  let nCheck = 0;
  let bEven = false;
  value = value.replace(/\D/g, "");

  for (let n = value.length - 1; n >= 0; n--) {
    const cDigit = value.charAt(n);
    let nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 == 0;
}

export function detectCardType(
  number: string
): "Visa" | "MasterCard" | "American" | "" {
  // Visa: 4111 1111 1111 1111
  // MasterCard: 5500 0000 0000 0004
  // American Express: 3400 0000 0000 009
  const visaPattern = /^4/;
  const masterCardPattern = /^5[1-5]/;
  const amexPattern = /^3[47]/;

  if (visaPattern.test(number)) return "Visa";
  if (masterCardPattern.test(number)) return "MasterCard";
  if (amexPattern.test(number)) return "American";
  return "";
}

export function formatCardNumber(number: string): string {
  // Remove all non-digit characters
  const cleaned = number.replace(/\D/g, "");

  // Split the cleaned string into groups of 4 and join with spaces
  const formatted = cleaned.match(/.{1,4}/g)?.join(" ") ?? "";

  return formatted;
}
