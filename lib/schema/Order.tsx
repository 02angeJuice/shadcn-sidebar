import { z } from "zod";

const loginForm = z.object({
  client: z.string().min(1, { message: "msg" }),
  create_date: z.string().min(1, { message: "msg" }),
  invoice_no: z.string().min(1, { message: "msg" }),
  order_no: z.string().min(1, { message: "msg" }),
  delivery_no: z.string().min(1, { message: "msg" }),
  delivery_no: z.string().min(1, { message: "msg" }),
});

export const OrderFormSchema = loginForm;
