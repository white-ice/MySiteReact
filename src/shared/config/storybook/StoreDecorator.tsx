import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { ReactNode } from 'react';

type StoryComponentProp = {
	children: ReactNode,
}

export const StoreDecorator = (state: StateSchema) => ({ children }: StoryComponentProp) => (
	<StoreProvider initialState={state}>
		{children}
	</StoreProvider>
);