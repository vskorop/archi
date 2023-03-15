import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-button-icon.svg';
import AboutIcon from 'shared/assets/icons/instruction-manuals-book-icon.svg';
import ProfileIcon from 'shared/assets/icons/person-profile-image-icon.svg';

export interface SideBarItemType {
path: string;
text: string;
Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemsList: SideBarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'О cайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
    },
];
