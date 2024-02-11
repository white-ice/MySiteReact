import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "app/App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "shared/config/i18n";
import { StoreProvider } from "app/providers/StoreProvider";

const container = document.getElementById('root')
const root = createRoot(container)

function AppWithCallbackAfterRender() {
	useEffect(() => {
		console.log('[APP] Rendered');
	});

	return (
		<StoreProvider>
			<BrowserRouter>
				<ThemeProvider>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</StoreProvider>
	)
}

root.render(<AppWithCallbackAfterRender />)
