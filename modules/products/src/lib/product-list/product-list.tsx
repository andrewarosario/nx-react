import { ModulesSharedUi } from 'modules/shared/ui';
import styles from './modules-products.module.scss';

/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProductList!</h1>
      <ModulesSharedUi />
    </div>
  );
}

export default ProductList;
