import { z } from "zod";

const CustomerSearch = z.object({
  client_code: z.string().min(1, {
    message: "Client Code",
  }),
  cust_code: z.string().min(1, {
    message: "Cust Code",
  }),
});

const CustomerCreate = z.object({
  email: z.string().min(1, {
    message: "Email tidak boleh kosong",
  }),
  password: z.string().min(1, {
    message: "Password tidak boleh kosong",
  }),
});

const CustomerEdit = z.object({
  email: z.string().min(1, {
    message: "Email tidak boleh kosong",
  }),
  password: z.string().min(1, {
    message: "Password tidak boleh kosong",
  }),
});

// export { SearchCustomerFormSchema: SearchCustomer, CreateCustomer, EditCustomer };

export const CustSearchFormSchema = CustomerSearch;
export const CustCreateFormSchema = CustomerCreate;
export const CustEditFormSchema = CustomerEdit;
