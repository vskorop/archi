import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
function AboutPage() {
    var t = useTranslation('about').t;
    return (_jsx("div", { children: t('О сайте') }, void 0));
}
export default AboutPage;
