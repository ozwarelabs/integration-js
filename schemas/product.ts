import { Output, array, number, object, string } from 'valibot'

export const ProductSchema = object({
  metal: string(),
  type: string(),
  name: string(),
  bids: array(
    object({
      qty: number(),
      price: number(),
    })
  ),
  asks: array(
    object({
      qty: number(),
      price: number(),
    })
  ),
  updatedAt: string(),
  expiresAt: string(),
})

export type Product = Output<typeof ProductSchema>
