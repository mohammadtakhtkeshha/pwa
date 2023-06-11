export const watchlistsUrl = '/watchlists';

export const pokeUrl = '/ability';

export const watchlistUrl = (watchlistId: number) =>
  `/watchlists/${watchlistId}`;

export const coinsUrl = (watchlistId: number) =>
  `/watchlists/${watchlistId}/coins`;

export const deleteCoinUrl = (watchlistId: number, coinId: number) =>
  `/watchlists/${watchlistId}/coins/${coinId}`;
