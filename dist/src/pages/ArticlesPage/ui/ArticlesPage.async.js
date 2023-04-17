import React from 'react';
var ArticlesPageAsync = React.lazy(function () { return import('./ArticlesPage'); });
export default ArticlesPageAsync;
