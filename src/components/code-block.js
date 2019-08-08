import React from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { useMDXComponents, mdx } from '@mdx-js/react';
import { Box } from 'lucas-test-design-system';
import theme from '../theme';
const { colors } = theme;

const liveTheme = {
    plain: {
        color: colors.extended.neutrals.N500,
        backgroundColor: colors.extended.neutrals.N020,
    },
    styles: [
        {
            types: ['comment', 'prolog', 'doctype', 'cdata'],
            style: {
                color: '#999988',
                fontStyle: 'italic',
            },
        },
        {
            types: ['namespace'],
            style: {
                opacity: 0.7,
            },
        },
        {
            types: ['string', 'attr-value'],
            style: {
                color: colors.primary,
            },
        },
        {
            types: ['punctuation', 'operator'],
            style: {
                color: colors.extended.neutrals.N500,
            },
        },
        {
            types: [
                'entity',
                'url',
                'symbol',
                'number',
                'boolean',
                'variable',
                'constant',
                'property',
                'regex',
                'inserted',
            ],
            style: {
                color: '#36acaa',
            },
        },
        {
            types: ['atrule', 'keyword', 'attr-name', 'selector'],
            style: {
                color: colors.accent
            },
        },
        {
            types: ['function', 'deleted', 'tag'],
            style: {
                color: '#d73a49',
            },
        },
        {
            types: ['function-variable'],
            style: {
                color: '#`6f42c1`',
            },
        },
        {
            types: ['tag', 'selector', 'keyword'],
            style: {
                color: colors.text,
            },
        },
    ],
};

export default ({ children, className, live, render, ghost }) => {
    const components = useMDXComponents();

    const liveProviderProps = {
        transformCode: code => `/* @jsx mdx */ <> ${code} </>`,
        scope: { mdx, ...components },
    };

    if (live) {
        return (
            <Box mt={4}>
                <LiveProvider code={children.trim()} {...liveProviderProps} theme={liveTheme}>
                    <LivePreview
                        style={{
                            padding: theme.space[3],
                            border: `1px solid ${colors.extended.neutrals.N100}`,
                            borderTopLeftRadius: theme.radii[2],
                            borderTopRightRadius: theme.radii[2],
                        }}
                    />
                    <LiveEditor
                        padding={theme.space[3]}
                        style={{
                            borderBottomLeftRadius: theme.radii[2],
                            borderBottomRightRadius: theme.radii[2],
                            border: `1px solid ${colors.extended.neutrals.N100}`,
                            borderTop: 'none',
                            fontSize: theme.fontSizes.body,
                            fontFamily: theme.fonts.default,
                            fontWeight: 400,
                            letterSpacing: '-0.0175em',
                            lineHeight: 1.5,
                        }}
                        css={{ textarea: { outline: 0 } }}
                    />
                    <LiveError />
                </LiveProvider>
            </Box>
        );
    }

    return (
        <Box mt={4}>
            <LiveProvider code={children.trim()} {...liveProviderProps} theme={liveTheme}>
                <LiveEditor
                    padding={theme.space[3]}
                    style={{
                        borderRadius: theme.radii[2],
                        border: `1px solid ${colors.extended.neutrals.N100}`,
                        fontSize: theme.fontSizes.body,
                        fontFamily: theme.fonts.default,
                        fontWeight: 400,
                        letterSpacing: '-0.0175em',
                        lineHeight: 1.5,
                    }}
                    css={{ textarea: { paddingBottom: '0 !important' } }}
                    disabled
                />
            </LiveProvider>
        </Box>
    );
};
