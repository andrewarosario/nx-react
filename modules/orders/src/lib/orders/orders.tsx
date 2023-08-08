import { ModulesSharedUi } from 'modules/shared/ui';
import styles from './orders.module.scss';

/* eslint-disable-next-line */
export interface OrdersProps {}

export function Orders(props: OrdersProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Orders!!</h1>
      <h2>Visualize todos os produtos</h2>
      <ModulesSharedUi />
    </div>
  );
}

export default Orders;
