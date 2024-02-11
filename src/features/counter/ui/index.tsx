import { classNames } from 'shared/lib/classNames/classNames'
// import cls from './style.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions, getCounterValue } from '..';
import { useTranslation } from 'react-i18next';

interface CounterProps {
	className?: string;
}

const Counter = ({ className }: CounterProps) => {
	const count = useSelector(getCounterValue)
	const dispatch = useDispatch()
	const { t } = useTranslation();


	const increment = () => {
		dispatch(counterActions.increment());
	};

	const decrement = () => {
		dispatch(counterActions.decrement());
	};

	return (
		<div className={classNames('', {}, [className])}>
			<button
				aria-label="Increment value"
				data-testid='increment-btn'
				onClick={increment}
			>
				{t('Increment')}
			</button>
			<span data-testid='value-title'>{count}</span>
			<button
				aria-label="Decrement value"
				data-testid='decrement-btn'
				onClick={decrement}
			>
				{t('Decrement')}
			</button>
		</div>
	)
}
export default Counter