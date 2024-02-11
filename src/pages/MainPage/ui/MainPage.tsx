import { Counter } from "features/counter"
import { useTranslation } from "react-i18next"

const MainPage = () => {
	const { t } = useTranslation()
	return (
		<div>
			<h1>{t('main page title')}</h1>
			<Counter />
		</div>
	)

}

export default MainPage