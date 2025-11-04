import { User } from "./user.entity";

export const mapToUser = ({ id, name, email }: any): User => ({
  id,
  name,
  email,
});
