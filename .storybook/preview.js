// Global CSS
import '../src/index.css';

// How to customize the style
import { create } from "@storybook/theming";


const sbTheme = create({
  //appContentBg : "#b4d1e7",
  brandTitle : 'Glossary of UI',
  colorPrimary: 'red',
  colorSecondary : "#b4d1e7",
  appBg : '#f4524d'
})

export const parameters = {
  //actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    theme : sbTheme
  }
};
