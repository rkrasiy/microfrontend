import { mount as ProductsMount } from 'products/ProductIndex';
import { mount as CartMount} from 'cart/CartShow';

console.log('Container');

ProductsMount(document.querySelector('#app-products'));
CartMount(document.querySelector('#app-cart'));