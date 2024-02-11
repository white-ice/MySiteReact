import { screen } from "@testing-library/react"
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Navbar } from "widgets/Navbar"

describe('Navbar', () => {
	test('Navbar render', () => {
		renderWithTranslation(<Navbar />)
		expect(screen.getByTestId('navbar')).toBeInTheDocument
	});
});
