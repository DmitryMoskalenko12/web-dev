import './index.html';
import './index.scss';
import header from './modules/header';
import tabs from './modules/tabs';
import carousel from './modules/carousel';
import products from './modules/products';

window.addEventListener('DOMContentLoaded', () => {
 header();
 tabs();
 carousel();
 products();
})
