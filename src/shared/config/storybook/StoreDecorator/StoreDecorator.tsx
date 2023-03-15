import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { Story } from '@storybook/react';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultReducers: ReducersList = {
    login: loginReducer,
};
export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
