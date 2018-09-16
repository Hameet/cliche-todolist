# A cliche todo list but with stateless functional components
## This also has a 100% test coverage

## Clone the repo and then do the following to run

Step 1:
```
npm install
- or -
yarn install
```
Step 2:
```
npm start
- or -
yarn start
```
Step 3:
Open your browser and navigate to http://localhost:3000 .
You should be able to view the App.

### Tests!

To run the tests and check coverage, run the following command in terminal:
```
npm test
- or -
yarn test
- or -
yarn coverage
```
You should be able to see a fully passing coverage report, like this:

<img src="./public/Screenshot todo.png" alt="screenshot showing my test suite passing" width="500px"/>


## Why Functional programming?

The real aim for this project was to follow a different approach to the one I'm used to. One of the projects I'm currently working one <a href="https://github.com/PaperHat/legal-checkup-client">Legal Check-up</a>, involves similar structuring of code. 

Seperating the "state" and "store" from the components and test each individual part of the code seperately. 
