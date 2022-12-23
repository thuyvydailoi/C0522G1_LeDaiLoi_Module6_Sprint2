import {IUser} from './i-user';
// @ts-ignore
import {IRole} from './i-role';

export interface IUserRole {
  user: IUser;
  role: IRole;
}
