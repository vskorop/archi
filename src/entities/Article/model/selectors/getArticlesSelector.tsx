import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesDataSelector = (state: StateSchema) => state.articles?.data;
export const getArticlesErrorSelector = (state: StateSchema) => state.articles?.error;
export const getArticlesIsLoadingSelector = (state: StateSchema) => state.articles?.isLoading;
