import localFont from 'next/font/local';

const interVariableFont = localFont({
    src: './fonts/Inter-VariableFont_slnt,wght.ttf',
    variable: '--font-inter-variable'
});

const interFont = localFont({
    src: [
        {
            path: './fonts/static/Inter-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/static/Inter-Semibold.ttf',
            weight: '600',
            style: 'normal'
        },
        {
            path: './fonts/static/Inter-Bold.ttf',
            weight: '700',
            style: 'normal'
        },
    ],
    variable: '--font-inter'
});

export { interFont, interVariableFont };