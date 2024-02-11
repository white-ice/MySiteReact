import './styles/main.scss'
import { Suspense, useEffect } from 'react';
import AppRouter from './providers/router';
import { Theme, useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import Sidebar from 'widgets/Sidebar/ui/Sidebar';
import { ErrorBoundary } from './providers/ErrorBoundary';
import './styles/main.scss';

const App = () => {
	const { theme } = useTheme()

	useEffect(() => {
		document.body.classList.remove(Theme.DARK, Theme.LIGHT)
		document.body.classList.add(theme)
	}, [theme])

	return (
		<Suspense fallback="">
			<div className={classNames('app app-grid')}>
				<header className="app-header">
					<div className="app-header__container">
						<Navbar />
					</div>
				</header>
				<aside className="app-sidebar">
					<Sidebar />
				</aside>
				<main className="app-content">
					<div className="app-content__container">
						<ErrorBoundary>
							<AppRouter />
						</ErrorBoundary>
					</div>
				</main>
			</div>
		</Suspense>
	)
}

export default App;