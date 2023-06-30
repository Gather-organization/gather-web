import { SignInDto } from 'shared/dtos';
import { requests } from './api';

const userController: string = '/users';

const userService = {
  signin: (signIn: SignInDto) =>
    requests.post<string>(`${userController}/auth`, signIn),
  details: () => requests.get<any>(`${userController}/me`),
};

export default userService;
