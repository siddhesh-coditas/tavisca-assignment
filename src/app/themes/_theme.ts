export interface Theme {
    name: string;
    properties: any;
}

export const Light: Theme = {
    name: 'light',
    properties: {
        '--body-background': '#fff',
        '--foreground-default': '#3f6bc2',
        '--foreground-secondary': '#214385',
        '--foreground-tertiary': '#fff',
        '--foreground-border': '#3f6bc2',
        '--foreground-text-title': '#fff',
        '--foreground-text-primary': '#3f6bc2',
        '--foreground-text-secondary': '#666666'
    }
};

export const Dark: Theme = {
    name: 'dark',
    properties: {
        '--body-background': '#6a6a6a',
        '--foreground-default': '#343434',
        '--foreground-secondary': '#a7a7a7',
        '--foreground-tertiary': '#a0a0a0',
        '--foreground-border': '#343434',
        '--foreground-text-title': '#fff',
        '--foreground-text-primary': '#343434',
        '--foreground-text-secondary': '#666666'
    }
};
