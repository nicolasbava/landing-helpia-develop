//import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {CacheProvider} from '@emotion/react';
import {ThemeProvider, CssBaseline} from '@mui/material';

import createEmotionCache from '../utility/createEmotionCache';
import theme from '@/styles/theme';
import {EmotionCache} from "@emotion/cache";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import AppProvider from "@/context/app";
import Layout from "@/components/Layout";

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function App({Component, emotionCache = clientSideEmotionCache, pageProps}: MyAppProps) {
    return <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <AppProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </AppProvider>
        </ThemeProvider>
    </CacheProvider>
}
