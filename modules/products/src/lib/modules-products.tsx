import styles from './modules-products.module.scss';

/* eslint-disable-next-line */
export interface ModulesProductsProps {}

export function ModulesProducts(props: ModulesProductsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ModulesProducts!</h1>
    </div>
  );
}

export default ModulesProducts;
