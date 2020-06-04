# Battle For Chicago - Front End

Battle For Chicago is a two-player board game based on Risk that uses a map of Chicago's neighborhoods as its game board.

The app provides another way for socially distanced families and friends to spend time together remotely.

[Full Demo](https://www.youtube.com/watch?v=2QhTyIyUOZg) | [Live app](https://fathomless-cove-56346.herokuapp.com/) | [API Repo](https://github.com/mpottebaum/battle-chi-backend)

![Battle For Chicago demo](https://j.gifs.com/oVBZXz.gif)

## Installing Battle For Chicago

To install Battle For Chicago, follow these steps:

1. Clone the [API repo](https://github.com/mpottebaum/battle-chi-backend) and install gems

```
git clone git@github.com:mpottebaum/battle-chi-backend.git

cd battle-chi-backend
bundle
```

2. Clone this repo and install dependencies

```
git clone git@github.com:mpottebaum/battle-chi-frontend.git

cd battle-chi-frontend
npm install
```

## Using Battle For Chicago

To use Battle For Chicago, follow these steps:

1. From the battle-chi-backend directory, start the API server. Make sure the API server is running on `localhost:3000`.

```
rails s
```

2. From the battle-chi-frontend directory, start the front end server.

```
npm start
```

The front end server should run on `localhost:3001`, but any port will work. If you open the front end in an incognito/private window or a separate browser, you can establish separate WebSocket connections and play as both players.

## Contact

If you want to contact me you can reach me at mpottebaum@gmail.com.