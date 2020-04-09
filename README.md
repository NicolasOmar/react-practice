# React Practice
Repository created to record my practice learning React with exercices base on [React Course](https://www.udemy.com/user/sgslo/) of [Stephen Grider](https://www.udemy.com/course/react-redux).

## Requirements
 - [Node](https://nodejs.org/en/download/) v12.16.1 or above

 ## Setup
| App Setup | Command |
| ------ | ------ |
| All | npm run setup-all |
| Comments | npm run setup-comments |
| Seasons | npm run setup-seasons |
| Finder | npm run setup-finder |
| Videos | npm run setup-videos |
| Songs | npm run setup-songs |
| Blog | npm run setup-blog |

## How to run it
To use any app, you just have to enter into it´s folder and run any of the scripts listed on it´s 'package.json' file. Each command runs with the following structure:
```sh
npm run <command-name>
```
In case you want to run all available commands on a row, execute the following command:
```sh
npm start
```

## Repo Structure & what i learned in each exercise
 - Comments app ('1-comments' folder)
   - Create a React project created with [Create-react-app](https://www.npmjs.com/package/create-react-app)
   - Use css classes, styles and js variables in jsx
   - Component creation with data passing using `props` & composition using `props.children`
   - Add mocked data with [Faker.js](https://www.npmjs.com/package/faker)
   - Basic usage of [Semantic UI](https://semantic-ui.com/) as main UI library
 - Seasons app ('2-seasons' folder)
   - Use class based components
   - How to use [Gelocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
   - Handle states (creation and update)
   - How to use `componentDidMount`
   - How to use `DefaultProps`
 - Finder app ('3-finder' folder)
   - How to handle `Events`
   - Make a controlled input using `states`
   - Pass and invoke parent functions in children components
   - Use [Unsplash API](https://unsplash.com/developers) to get photos
   - Handle API request with [Axios](https://www.npmjs.com/package/axios)
   - Add API folder to have a better project structure isolating API logic
   - Handle a list of elements with [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function
   - Show date formats with [moment](https://www.npmjs.com/package/moment)
   - Css grid
   - Handle DOM style with `React.createRef`
 - Videos app ('4-videos' folder)
   - Work with [Google/Youtube API](https://console.developers.google.com/)
   - Better understanding of prop passing between parent and children components
 - Songs app ('5-songs' folder)
   - Integrate [Redux](https://www.npmjs.com/package/redux) into a React project using [React-Redux](https://www.npmjs.com/package/react-redux)
   - Work with `Providers`, `reducers` and `actions` to pass data between components
 - Blog app ('6-blog' folder)
   - Use Asyncronous action creators with [redux-thunk](https://www.npmjs.com/package/redux-thunk)
   - Refactor code on `mapStateToProps` to use component props on the function
   - Reduce endpoint calls in action creators
 

## Version (currently v0.6.0)
| Number | Meaning |
| ------ | ------ |
| 0 | Course has been not completed |
| 6 | How many exercices/apps i have completed |
| 0 | How many times i have updated the next exercise/app |