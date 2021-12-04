import { writable } from 'svelte/store';
import { browser } from '$app/env';

interface CartItem {
	[x: string]: any;
	id: string;
	title: string;
	price: number;
	img: string;
}

const retrieved = browser && localStorage.getItem('favorites');

const favoritesStorage = browser && (JSON.parse(retrieved) || []);

export const favorites = writable<CartItem[]>(browser && favoritesStorage);

browser && favorites.subscribe((value) => (localStorage.favorites = JSON.stringify(value)));
