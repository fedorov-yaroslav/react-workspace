export interface Order {
	id: string
	tableNumber: number
	status: 'pending' | 'ready'
	items: string[]
}

export const INITIAL_ORDERS: Order[] = [
	{ id: '1', tableNumber: 5, status: 'pending', items: ['Пицца', 'Кола'] },
	{ id: '2', tableNumber: 2, status: 'ready', items: ['Суп', 'Кофе'] },
	{ id: '3', tableNumber: 8, status: 'pending', items: ['Бургер', 'Картошка', 'Кола'] },
]