import {createContext} from 'react';
/**
 * Context  
 */
const ShopContext = createContext({
    addItem : (item) => {}
});
export default ShopContext;