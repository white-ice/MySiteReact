import { useTranslation } from "react-i18next"

const AboutPage = () => {
	const { t } = useTranslation('about')

	return (
		<div>
			<h1>{t('about page title')}</h1>
		</div>
	)

}

export default AboutPage