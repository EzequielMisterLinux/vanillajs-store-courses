import { initHeader } from './Header';
import { initFooter } from './Footer';
import { initMain } from './Main';
import { renderCart } from './Cart';

export const initContent = () => {
  initHeader();
  initMain();
  initFooter();
  renderCart();
};
