import { writable } from 'svelte/store';
import { browser } from '$app/env';

interface CartItem {
	[x: string]: any;
	id: string;
	title: string;
	price: number;
	img: string;
}

const retrieved = browser && localStorage.getItem('cart');

const cartStorage = browser && (JSON.parse(retrieved) || []);

export const cart = writable<CartItem[]>(browser && cartStorage);

browser && cart.subscribe((value) => (localStorage.cart = JSON.stringify(value)));
