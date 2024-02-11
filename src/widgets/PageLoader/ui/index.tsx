import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'
import Loader from 'shared/ui/Loader';

interface PageLoaderProps {
	className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {

	return (
		<div className={classNames(cls['page-loader'], {}, [className])}>
			<Loader />
		</div>
	)
}
export default PageLoader