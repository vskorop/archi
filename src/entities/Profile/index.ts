import { fetchProfileData } from './model/services/fetchProfileData';
import { profileActions, profileReducer } from './model/slice/profileSlice';
import { Profile, ProfileSchema } from './model/types/profile';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export {
    profileActions, profileReducer, Profile, ProfileSchema, fetchProfileData, ProfileCard,
};
