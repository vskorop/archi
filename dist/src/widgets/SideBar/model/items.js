import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-button-icon.svg';
import AboutIcon from 'shared/assets/icons/instruction-manuals-book-icon.svg';
import ProfileIcon from 'shared/assets/icons/person-profile-image-icon.svg';
import ArticlesIcon from 'shared/assets/icons/web-pages-icon.svg';
export var SideBarItemsList = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: HomeIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        text: 'Статьи',
        Icon: ArticlesIcon,
        authOnly: true,
    },
];
