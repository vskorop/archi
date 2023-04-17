import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
function MainPage() {
    var t = useTranslation('main').t;
    var _a = useState(''), value = _a[0], setValue = _a[1];
    var onChange = function (newValue) {
        setValue(newValue);
    };
    return (_jsx("div", { children: t('Главная') }, void 0));
}
export default MainPage;
