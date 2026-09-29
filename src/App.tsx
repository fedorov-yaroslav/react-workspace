import { useState } from 'react'

interface Order {
  id: string
  tableNumber: number
  status: 'pending' | 'ready'
  items: string[]
}

const INITIAL_ORDERS: Order[] = [
  { id: '1', tableNumber: 5, status: 'pending', items: ['Пицца', 'Кола'] },
  { id: '2', tableNumber: 2, status: 'ready', items: ['Суп', 'Кофе'] },
  { id: '3', tableNumber: 8, status: 'pending', items: ['Бургер', 'Картошка', 'Кола'] },
]

export default function App() {
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS)
  const [input, setInput] = useState('')
  const filteredOrders = orders.filter(order => 
    order.items.join(', ').toLowerCase().includes(input.toLowerCase())
  )
  
  const makeReady = (id: string) => {
    setOrders(
      orders.map(order => 
          (id === order.id) 
            ? {...order, status: 'ready'}
            : order
      ))
  }

  const cancelOrder = (id: string) => {
    setOrders(
      orders.filter(order => 
        order.id !== id 
      )
    )
  }

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
      <p>Заказы готовятся: {orders.filter(order => order.status === 'pending').length}</p>
      <p>Готовые заказы: {orders.filter(order => order.status === 'ready').length}</p>
    </div>
  )
}