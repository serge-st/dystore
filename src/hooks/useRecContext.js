import { useEffect } from 'react';

function useRecContext(context) {
    useEffect(() => {
        window.DY = window.DY || {};
        // eslint-disable-next-line no-undef
        DY.recommendationContext = { type: context, data: [""] };
    }, []);
}

export default useRecContext;