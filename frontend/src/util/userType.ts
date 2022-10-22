export type UserType = {
  id?: string;
  name: string;
  username: string;
  email: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export type SignInType = Omit<UserType, 'name | username | avatar | createdAt | updatedAt>'>