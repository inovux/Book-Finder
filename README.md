# Book Finder

To run this application locally you have to set 2 environment variables. You have to create a file called `.env.local`.

This file should have 2 variables:

```
REACT_APP_BOOK_API_URI=<YOUR API URI>
REACT_APP_BOOK_API_KEY=<YOUR API KEY>
```

To get an API key visit the Google books API website and create an API key there and paste it into the file I have explained above together with the URI.

___

Now you have your environment ready you can start to install all the dependencies of the project. Open the terminal and navigate to this project directory. 

Run `yarn install` to install all the dependencies. After this is finished you have to run `yarn start` to start the project.

___

Make sure you have set up prettier and eslint for your IDE so everything will be formatted automatically for this project.

If you don't want to set this up then just run the following command when finishing your changes:
`yarn format`, `yarn lint`.

___

A demo can be found of this project at the following link: [Demo](https://youthful-montalcini-bb3709.netlify.app/)