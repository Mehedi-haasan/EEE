
import { Provider } from 'react-redux';
import { store } from './store';
import { useRef, ReactNode } from 'react'; 


export default function StoreProvider({ children }) {
    const storeRef = useRef(store());
    return <Provider store={storeRef.current}>
        {children}
    </Provider>;
}
