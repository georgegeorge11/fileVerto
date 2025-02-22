import { Theme } from "../models/theme.model";

export let themes: Theme[] = [
  {
    id: 'light',
    primary: '#008080',
    displayName: 'Light Theme',
    icon: 'light_mode',
  },
  {
    id: 'dark',
    primary: '#092635',
    displayName: 'Dark Theme',
    icon: 'dark_mode',
  },
];
