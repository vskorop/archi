import { userActions, userReducer } from './model/slice/userSlice';
import type { UserSchema, User } from '../User/model/types/user';
import { getUserAuthData } from './model/selectors/getUserAuthData';
import { getUserMounted } from './model/selectors/getUserMounted';

export {
    User,
    userReducer,
    UserSchema,
    userActions,
    getUserAuthData,
    getUserMounted,
};
