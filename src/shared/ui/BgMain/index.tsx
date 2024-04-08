import { ReactNode, useEffect, useRef } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './index.module.scss';

interface BgMainProps {
	children: ReactNode;
}

export const BgMain = ({ children }: BgMainProps) => {
	const bgMain = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const bgIcons = document.createElement('div');
		bgIcons.className = cls['bg-icons'];
		for (let i = 0; i < 60; i++) {
			const bgIcon = document.createElement('div');
			bgIcon.className = cls['container-icon'];
			bgIcon.id = `container-${i}`;
			bgIcons.appendChild(bgIcon);
			addIcons(bgIcon);
		}
		bgMain.current?.prepend(bgIcons);
	}, []);

	const addIcons = (containerId: HTMLElement) => {
		const unicode = [
			'\uf001', '\uf002', '\uf003', '\uf004', '\uf005', '\uf006', '\uf007', '\uf008',
			'\uf009', '\uf010', '\uf011', '\uf012', '\uf013', '\uf014', '\uf015', '\uf016',
			'\uf017', '\uf018', '\uf019', '\uf01a', '\uf01b', '\uf01c', '\uf01d', '\uf01e',
			'\uf021', '\uf022', '\uf023', '\uf024', '\uf025', '\uf026', '\uf027', '\uf028',
			'\uf029', "\uf2bb", "\uf042", "\uf5d0", "\uf037", "\uf039", "\uf036", "\uf038",
			"\uf461", "\uf0f9", "\uf2a3", "\uf13d", "\uf103", "\uf101", "\uf100", "\uf102",
			"\uf107", "\uf104", "\uf105", "\uf106", "\uf556", "\uf644", "\uf35d", "\uf187",
			"\uf299", "\uf354", "\uf359", "\uf35a", "\uf35b", "\uf0ab", "\uf0a8", "\uf0a9",
		];

		for (let i = 0; i < 60; i++) {
			const icon = document.createElement('i');
			icon.className = 'icon fas'
			icon.innerHTML = randomeIcon(unicode);
			containerId?.appendChild(icon);
		}
	};

	const randomeIcon = (values: string[]) => {
		const randomeIndex = Math.floor(Math.random() * values.length);
		return values[randomeIndex];
	};

	return <div ref={bgMain} className={classNames(cls['bg-main'])}>{children}</div>;
};

