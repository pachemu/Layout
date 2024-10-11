import { lazy } from 'react';
const LazyHomePage = lazy(() =>
    import('./ui/Home')
);

export default LazyHomePage;