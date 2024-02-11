import { classNames } from 'shared/lib/classNames/classNames'
import cls from './style.module.scss'

interface LoaderProps {
	className?: string;
}
const Loader = ({ className }: LoaderProps) => {
	return (
		<div className={classNames(cls['loader'], {}, [className])}>
		</div>
	)
}
export default Loader