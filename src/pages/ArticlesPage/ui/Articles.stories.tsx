import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article } from 'entities/Article';
import { ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';
import ArticlesPage from './ArticlesPage';

const article: Article = {
    id: '2',
    title: 'Javascript news',
    subtitle: 'Что нового в JS за 2022 год?',
    img: 'https://yt3.googleusercontent.com/ytc/AGIKgqM8zh66fZ'
        + 'qGKeTkopHaU9GM4zvyuFnQhXThr37u=s900-c-k-c0x00ffffff-no-rj',
    views: 521,
    createdAt: '02.04.2023',
    type: ArticleType.IT,
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'Заголовок этого блока',
            paragraphs: [
                'Программа, которую по традиции называют «Hello, world!», очень проста.'
                + ' Она выводит куда-либо фразу «Hello, world!», или другую подобную, '
                + 'средствами некоего языка.',
                'JavaScript — это язык, программы на котором можно выполнять в'
                + ' разных средах. В нашем случае речь идёт о браузерах и о серверной '
                + 'платформе Node.js. Если до сих пор вы'
                + ' не написали ни строчки кода на JS и читаете этот текст в браузере,'
                + ' на настольном компьютере, это значит, что вы буквально в считанных '
                + 'секундах от своей первой JavaScript-программы.',
                'Существуют и другие способы запуска JS-кода в браузере. Так, если '
                + 'говорить об обычном использовании программ на JavaScript, они загружаются '
                + 'в браузер для обеспечения работы веб-стран'
                + 'иц. Как правило, код оформляют в виде отдельных файлов с расширением .js, '
                + 'которые подключают к веб-страницам, но программный код можно включать и '
                + 'непосредственно в код страницы. Всё эт'
                + 'о делается с помощью тега <script>. Когда браузер обнаруживает такой '
                + 'код, он выполняет его. Подробности о теге script можно посмотреть на '
                + 'сайте w3school.com. В частности, рассмотрим пример,'
                + ' демонстрирующий работу с веб-страницей средствами JavaScript,'
                + ' приведённый на этом ресурсе. Этот пример можно запустить и средствами'
                + ' данного ресурса (ищите кнопку Try it Yourself), но мы '
                + 'поступим немного иначе. А именно, создадим в каком-нибудь '
                + 'текстовом редакторе (например — в VS Code или в Notepad++) новый'
                + ' файл, который назовём hello.html, и добавим в него следующий код:',
            ],
        },

    ],
};
export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Normal = Template.bind({});
Normal.decorators = [StoreDecorator({
    articles: {
        data: article,
    },
})];
Normal.args = {};
