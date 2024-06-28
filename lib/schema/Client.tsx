import { z } from "zod";

const ClientSearch = z.object({
  client_code: z.string().min(1, {
    message: "Client Code",
  }),
  cust_code: z.string().min(1, {
    message: "Cust Code",
  }),
});

const ClientCreate = z.object({
  client_code: z.string().min(1, {
    message: "client_code",
  }),
  name: z.string().min(1, {
    message: "name",
  }),
  description: z.string(),
});

const ClientEdit = z.object({
  email: z.string().min(1, {
    message: "Email tidak boleh kosong",
  }),
  password: z.string().min(1, {
    message: "Password tidak boleh kosong",
  }),
});

// export { SearchClientFormSchema: SearchClient, CreateClient, EditClient };

export const ClientSearchFormSchema = ClientSearch;
export const ClientCreateFormSchema = ClientCreate;
export const ClientEditFormSchema = ClientEdit;
