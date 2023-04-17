import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
export var AvatarTheme;
(function (AvatarTheme) {
    AvatarTheme["L"] = "large";
    AvatarTheme["S"] = "small";
    AvatarTheme["M"] = "medium";
})(AvatarTheme || (AvatarTheme = {}));
export var Avatar = function (props) {
    var _a;
    var className = props.className, src = props.src, alt = props.alt, _b = props.theme, theme = _b === void 0 ? AvatarTheme.S : _b, size = props.size;
    var mods = (_a = {},
        _a[cls[theme]] = true,
        _a);
    var styles = useMemo(function () { return ({
        height: size,
        width: size,
    }); }, [size]);
    return (_jsx("img", { src: src, alt: alt, style: styles, className: classNames(cls.avatar, mods, [className]) }, void 0));
};
