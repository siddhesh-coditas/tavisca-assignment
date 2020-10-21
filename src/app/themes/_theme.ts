export interface Theme {
    name: string;
    properties: any;
}

export const Light: Theme = {
    name: 'light',
    properties: {
        '--foreground-default': '#08090A',
        '--foreground-secondary': '#41474D',
        '--foreground-tertiary': '#797C80',
        '--foreground-quaternary': '#F4FAFF',
        '--foreground-light': '#41474D'
    }
};

export const Dark: Theme = {
    name: 'dark',
    properties: {
        '--foreground-default': '#5C7D99',
        '--foreground-secondary': '#A3B9CC',
        '--foreground-tertiary': '#F4FAFF',
        '--foreground-quaternary': '#E5E5E5',
        '--foreground-light': '#FFFFFF'
    }
};
