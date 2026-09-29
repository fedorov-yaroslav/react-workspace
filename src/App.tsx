import { useOrders } from './useOrders'

export default function App() {
  const {
    input,
		setInput,
		makeReady,
		cancelOrder,
		pendingOrdersCount,
		readyOrdersCount,
		filteredOrders
  } = useOrders()

return (
    <div>
      <p>Заказы: </p>
      <input 
        type="text" 
        placeholder='Поиск по продуктам...' 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
      />
      <ul>
        {filteredOrders.map(order => (
          <li key={order.id}>
            <p>Ваш заказ в статусе: {order.status}</p>
            {order.items.join(', ')}
            <button onClick={() => makeReady(order.id)}>Готово!</button>
            <button onClick={() => cancelOrder(order.id)}>Отмена</button>
          </li>
        ))}
      </ul>
      <p>Заказы готовятся: {pendingOrdersCount}</p>
      <p>Готовые заказы: {readyOrdersCount}</p>
    </div>
  )
}