import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (newValue:string) => {
        setValue(newValue);
    };
    return (
        <div>
            {t('Главная')}
        </div>
    );
}

export default MainPage;
