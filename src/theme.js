/* 
    Based on the theme spec https://theme-ui.com/theme-spec. The spec is a WIP so we aren't doing it exactly the same.
*/
const theme = {
    space: [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176, 184, 192, 200, 208, 216, 224, 232],
    fonts: {
        default: '"Graphik", sans-serif',
        alt: '"Tiempos Text", serif',
    },
    fontSizes: {
        uber: '111px',
        hero: '77px',
        h1: '34px',
        h2: '28px',
        h3: '24px',
        h4: '21px',
        h5: '17px',
        lead: '24px',
        body: '14px',
        small: '12px',
        caption: '12px',
        tiny: '10px',
    },
    fontWeights: {
        bold: 600,
        normal: 400,
    },
    lineHeights: {
        uber: 1.08,
        hero: 1.11,
        h1: 1.2,
        h2: 1.23,
        h3: 1.26,
        h4: 1.6,
        h5: 1.26,
        lead: 1.29,
        body: 1.6,
        small: 1.33,
        caption: 1.22,
        tiny: 1.38,
    },
    colors: {
        // basics
        black: '#111111',
        white: '#ffffff',

        // theme spec core
        text: '#484848',
        background: '#fff',
        primary: '#cc0000',
        secondary: '#0484E7',
        accent: '#0484E7',
        muted: '#dddddd',
        subduedText: '#6D6D6D',

        // states
        success: '#25BA6F',
        warning: '#FDDA35',
        error: '#ED3233',
        focus: '#4688F1',

        // extended palette
        extended: {
            reds: {
                R020: '#FCE3E3',
                R080: '#F2BFBF',
                R100: '#F89697',
                R250: '#F45D5E',
                R500: '#ED3233',
                R700: '#CC0000',
                R900: '#8A0F0F',
            },
            blues: {
                B020: '#ECF6FD',
                B080: '#CDE9FE',
                B100: '#78C3FD',
                B250: '#229DFB',
                B500: '#0484E7',
                B700: '#0361AA',
                B900: '#023F6E',
            },
            cyans: {
                C020: '#E6FCFF',
                C080: '#B3F5FF',
                C100: '#79E2F2',
                C250: '#00C7E6',
                C500: '#00B8D9',
                C700: '#00A3BF',
                C900: '#008DA6',
            },
            greens: {
                G020: '#EBF9F2',
                G080: '#C9EEDB',
                G100: '#7EC8A3',
                G250: '#4FC489',
                G500: '#25BA6F',
                G700: '#1E995B',
                G900: '#0C5F35',
            },
            yellows: {
                Y020: '#FEF9DC',
                Y080: '#FEEC9A',
                Y100: '#FEE367',
                Y250: '#FDDA35',
                Y500: '#FFBB33',
                Y700: '#FDA902',
                Y900: '#F37A02',
            },
            neutrals: {
                N000: '#FFFFFF',
                N020: '#FAFAFA',
                N100: '#DDDDDD',
                N250: '#ADADAD',
                N500: '#6D6D6D',
                N700: '#484848',
                N900: '#111111',
            },
            purples: {
                P020: '#EAE6FF',
                P080: '#C0B6F2',
                P100: '#998DD9',
                P250: '#8777D9',
                P500: '#6554C0',
                P700: '#5243AA',
                P900: '#403294',
            },
            greys: {
                grey80: '#484848',
                grey50: '#6D6D6D',
                grey25: '#DDDDDD',
                grey10: '#FAFAFA',
            },
            light: {
                primary: '#F2BFBF',
                secondary: '#ECF6FD',
                success: '#EBF9F2',
                warning: '#FEF9DC',
                error: '#FCE3E3',
            },
        },
    },
    shadows: {
        20: '0 1px 3px hsla(220, 3%, 19%, 0.14)',
        40: '0 1px 4px hsla(220, 3%, 19%, 0.14)',
        60: '0 2px 8px hsla(220, 3%, 19%, 0.14)',
        80: '0 4px 16px hsla(220, 3%, 19%, 0.14)',
        100: '0 7px 24px hsla(220, 3%, 19%, 0.14)',
    },
    radii: {
        none: '0',
        small: '4px',
        medium: '10px',
        large: '100px',
    },
    avatarSizes: {
        smaller: '24px',
        small: '32px',
        medium: '48px',
        large: '64px',
        jumbo: '80px',
    },
};

export default theme;
