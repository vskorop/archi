import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import { SideBarItemType } from '../../../model/items';

import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    className?: string
    collapsed?: boolean;

    item: SideBarItemType
}
export const SideBarItem = memo((props: SideBarItemProps) => {
    const {
        collapsed, item,
    } = props;
    const { t } = useTranslation();
    return (
        <AppLink
            theme={AppLinkTheme.SECONDARY}
            to={item.path}
            className={cls.item}
        >
            <item.Icon className={cls.icon} width={32} height={32} />
            {!collapsed === true && <span className={cls.link}>{t(item.text)}</span>}
        </AppLink>
    );
});
