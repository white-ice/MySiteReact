import { render, screen } from "@testing-library/react"
import { ThemeButton, Button } from './index';

describe('Button', () => {
	test('Test render', () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<Button>Test</Button>)
		expect(screen.getByText('Test')).toBeInTheDocument()
	});
});

describe('Button', () => {
	test('Test clear theme', () => {
		// eslint-disable-next-line i18next/no-literal-string
		render(<Button theme={ThemeButton.DEFAULT}>Test</Button>)
		expect(screen.getByText('Test')).toHaveClass('btn__default');
		screen.debug();
	});
});
