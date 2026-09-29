import { useState } from 'react'
import { type Order, INITIAL_ORDERS } from './types.ts'

export function useOrders() {
	const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS)
	const [input, setInput] = useState('')
	

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
	

  const pendingOrdersCount = orders.filter(order => order.status === 'pending').length
  const readyOrdersCount = orders.filter(order => order.status === 'ready').length
  const filteredOrders = orders.filter(order => 
    order.items.join(', ').toLowerCase().includes(input.toLowerCase())
  )

	return {
		input,
		setInput,
		makeReady,
		cancelOrder,
		pendingOrdersCount,
		readyOrdersCount,
		filteredOrders
	}


}