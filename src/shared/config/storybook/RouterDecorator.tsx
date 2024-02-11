// import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ReactNode } from 'react';
type RouterDecoratorProp = {
	children: ReactNode,
}

export const RouterDecorator = ({ children }: RouterDecoratorProp) => (
	<BrowserRouter>
		{children}
	</BrowserRouter>
);
