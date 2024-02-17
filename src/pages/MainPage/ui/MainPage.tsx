import { useTranslation } from "react-i18next"
// import { Loader, LoaderTheme, PageContent, TypingText } from "shared"
import { classNames } from "shared/lib/classNames/classNames"
import cls from "./style.module.scss"

const MainPage = () => {
	const { t } = useTranslation()
	return (
		<div className={classNames(cls.page)}>
			{/* <Loader text={t('Load main page title')} theme={LoaderTheme.TEXT} />
			<PageContent>
				<h1 className={classNames(cls.page__title)}>
					<TypingText
						text={'Title main page'}
						delay={2000} />
				</h1>
			</PageContent> */}
		</div>
	)

}

export default MainPage