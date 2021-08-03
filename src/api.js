const API_KEY = '95de0a9e89952bf61969931e3a379af7e418a0f3b50accb617ac4b21e9a342b9'

// TODO refactor to use URLSearchParams
export const loadTickers = (tickers) => {
  return fetch(
    `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${tickers.join(',')}&tsyms=USD&api_key=${API_KEY}`
  )
    .then((r) => r.json())
    .then((rawData) => Object.fromEntries(Object.entries(rawData).map(([key, value]) => [key, value.USD])))
}

export const loadCoinList = () => {
  return fetch('https://min-api.cryptocompare.com/data/all/coinlist?summary=true').then((r) => r.json())
}
