// import { Decorator } from '@storybook/react';
import '../../../app/styles/main.scss';
import { Theme } from 'app/providers/ThemeProvider';
import { ReactNode } from 'react';

type StyleDecoratorProp = {
  theme: Theme,
  children: ReactNode,
}

export const StyleDecorator = ({ theme, children }: StyleDecoratorProp) => {
  // document.body.classList.remove(Theme.DARK, Theme.LIGHT)
  // document.body.classList.add(theme)

  return (
    <div className={`app ${theme}`}>
      <div className='container'>
        {children}
      </div>
    </div>
  )
};
