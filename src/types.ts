import { z } from "zod";

export type ProductType = {
  id: string | number;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};

export type ProductsType = ProductType[];

export type CartItemType = ProductType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
  image: string;
};
export type CartItemsType = CartItemType[];

export const shippingFormSchema = z.object({
  name:z.string().min(1, "Name must be at least 1 characters long"),
  email: z.email().min(1,"Invalid email address"),
  phone: z.string().min(7, "Phone number must be at least 7 characters long")
  .max(15, "Phone number must be at most 15 characters long").regex(/^[0-9+\-\s()]*$/, "Phone number can only contain numbers, spaces, and special characters (+, -, (, ))"),
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
})

export type ShippingFormInputs  = z.infer<typeof shippingFormSchema>;


export const paymentFormSchema = z.object({
  cardHolder:z.string().min(1, "Card Holder is required"),
  cardNumber: z.string().min(16,"Card Number is required").max(16, "Card Number must be 16 digits"),
  expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration Date must be in MM/YY format"),
  cvv : z.string().min(3, "CVV must be at least 3 digits").max(4, "CVV must be at most 4 digits"),
})

export type PaymentFormInputs  = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
  cart: CartItemsType;
  hasHydrated: boolean;
};

export type CartStoreActionsType = {
  addToCart: (product: CartItemType) => void;
  removeFromCart: (product: CartItemType) => void;
  clearCart: () => void;
};