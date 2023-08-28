import { User } from '@app/types/user';

export type SigninPayload = {
  email: string;
  password: string;
};

export interface SigninResponse extends User {
  token: string;
}

export type SignupPayload = {
  email: string;
  password: string;
  confirm_password: string;
};
