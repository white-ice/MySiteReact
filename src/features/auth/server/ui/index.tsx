import { classNames } from 'shared/lib/classNames/classNames';
import cls from './style.module.scss';
import { Button, Input, Modal } from 'shared';
import { useTranslation } from 'react-i18next';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const ModalForm = ({ className, isOpen, onClose }: LoginModalProps) => {
	const { t } = useTranslation();

	return (
		<Modal
			className={classNames('', {}, [className])}
			isOpen={isOpen}
			onClose={onClose}
			lazy
		>
			<div className={classNames(cls.login__form, {}, [className])}>
				<Input
					autofocus
					type="text"
					className={cls.input}
					placeholder={t('Введите username')}
				/>
				<Input
					type="text"
					className={cls.input}
					placeholder={t('Введите пароль')}
				/>
				<Button
					className={cls.login__btn}
				>
					{t('Войти')}
				</Button>
			</div>
		</Modal>
	)
};
