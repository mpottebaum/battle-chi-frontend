// const prod = {
//   url: {
//    API_URL: ‘https://myapp.herokuapp.com',
//    API_URL_USERS: ‘https://myapp.herokuapp.com/users'}
//  };
//  const dev = {
//   url: {
//    API_URL: ‘http://localhost:3000'
//   }
//  };
//  export const config = process.env.NODE_ENV === ‘development’ ? dev : prod;


const prod = {
  url: {
    API_ROOT: 'https://whispering-crag-66572.herokuapp.com',
    API_WS_ROOT: 'wss://whispering-crag-66572.herokuapp.com/'
  }
}

const dev = {
  url: {
    API_ROOT: 'http://localhost:3000',
    API_WS_ROOT: 'ws://localhost:3000/cable'
  }
}



const API_ROOT = process.env.NODE_ENV === 'development' ? dev.url.API_ROOT : prod.url.API_ROOT;

export const API_WS_ROOT = process.env.NODE_ENV === 'development' ? dev.url.API_WS_ROOT : prod.url.API_WS_ROOT;



export const HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

export const gamesUrl = `${API_ROOT}/games`
export const playersUrl = `${API_ROOT}/players`
export const neighborhoodsUrl = `${API_ROOT}/neighborhoods`


