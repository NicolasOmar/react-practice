# <img src="https://cdn.simpleicons.org/react" title="React Practice Repo" alt="React Practice Repo" width="30"> React Practice
Repository created to record my practice learning React with exercises based on the [Udemy Course](https://www.udemy.com/course/react-redux) of [Stephen Grider](https://www.udemy.com/user/sgslo/).

## Table of contents
- [Status](#status)
- [Requirements](#requirements)
- [Setup](#setup)
- [How to run it](#how-to-run-it)
- [Repo structure & what i learned in each exercise](#repo-structure--what-i-learned-in-each-exercise)
- [Other practice repos](#other-practice-repos)

## Status
- Current repo's version is ![React practice version](https://img.shields.io/github/package-json/v/nicolasomar/react-practice?color=success&label=%20&style=flat-square)
- **This course has been completed on 28/04/2020 - [Certificate](https://www.udemy.com/certificate/UC-405f16fd-38f0-4907-a4a7-44a4c2d1f424/)**

### Why it has not any updated dependencies?
After finishing its related Udemy course, I archive this repository and unarchive it when I start a new training and add a link in the [`Other practice repos`](#other-practice-repos) section referring to its new repo. But I don't update any associated dependency due to technology changes during the years between each practice, and the produced code which works with the mentioned [`requirements`](#requirements).

## Requirements
 - [Node](https://nodejs.org/en/download/) `v12.16.1` or above
 - For the eight exercise only
   - [OBS](http://obsproject.com/)

 ## Setup
After cloning the repo, go to the created folder and install the node packages.
```sh
git clone https://github.com/NicolasOmar/react-practice.git
cd react-practice
npm run setup-all
```
`setup-all` is the command to install all the projects, but if you want to do it one by one, you can change that last line for one of the following:
| App Setup | Command |
| ------ | ------ |
| All | `npm run setup-all` |
| Comments | `npm run setup-comments` |
| Seasons | `npm run setup-seasons` |
| Finder | `npm run setup-finder` |
| Videos | `npm run setup-videos` |
| Songs | `npm run setup-songs` |
| Blog | `npm run setup-blog` |
| Streams | `npm run setup-streams` |
| Languages | `npm run setup-languages` |
| Posts | `npm run setup-posts` |

## How to run it
To run any specific exercise, execute the following command in the project´s folder:
```sh
npm start
```
In the seventh exercise, you have to run the following commands in different terminals:
```sh
npm run api
npm run media
npm start
```

## Repo structure & what i learned in each exercise
 - Comments app (`1-comments` folder)
   - Create a React project created with [Create-react-app](https://www.npmjs.com/package/create-react-app)
   - Use css classes, styles and js variables in jsx
   - Component creation with data passing using `props` & composition using `props.children`
   - Add mocked data with [Faker.js](https://www.npmjs.com/package/faker)
   - Basic usage of [Semantic UI](https://semantic-ui.com/) as main UI library
 - Seasons app (`2-seasons` folder)
   - Use class based components
   - How to use [Gelocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
   - Handle states (creation and update)
   - How to use `componentDidMount`
   - How to use `DefaultProps`
 - Finder app (`3-finder` folder)
   - How to handle `Events`
   - Make a controlled input using `states`
   - Pass and invoke parent functions in children components
   - Use [Unsplash API](https://unsplash.com/developers) to get photos
   - Handle API request with [Axios](https://www.npmjs.com/package/axios)
   - Add API folder to have a better project structure isolating API logic
   - Handle a list of elements with [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function
   - Show date formats with [moment](https://www.npmjs.com/package/moment)
   - Basic css grid
   - Handle DOM style with `React.createRef`
 - Videos app (`4-videos` folder)
   - Work with [Google/Youtube API](https://console.developers.google.com/)
   - Better understanding of prop passing between parent and children components
 - Songs app (`5-songs` folder)
   - Integrate [Redux](https://www.npmjs.com/package/redux) into a React project using [React-Redux](https://www.npmjs.com/package/react-redux)
   - Work with `Providers`, `reducers` and `actions` to pass data between components
 - Blog app (`6-blog` folder)
   - Handle asyncronous action creators by a middleware with [redux-thunk](https://www.npmjs.com/package/redux-thunk)
   - Refactor code on `mapStateToProps` to use component props on the function
   - Reduce endpoint calls in action creators
 - Streams app (`7-streams` folder)
   - Handle web navigation with [react-router-dom](https://www.npmjs.com/package/react-router-dom)
   - Understand differences between `BrowserRouter`, `HashRouter` & `MemoryRouter`
   - Basic knowledge of [Google Auth API](https://developers.google.com/identity)
   - Use redux on forms with [redux-form](https://www.npmjs.com/package/redux-form)
   - Mount a small REST server with [json-server](https://www.npmjs.com/package/json-server)
   - Use [lodash](https://www.npmjs.com/package/lodash) functions to array mapping and filtering
   - Handle `routing history` in programatic way
   - Refactor Form Components
   - Use `CreatePortal` to handle modals
   - Handle a Real Time Monitoring System
   - Create a streaming channel using [OBS](http://obsproject.com/), [node-media-server](https://www.npmjs.com/package/node-media-server) and [flv.js](https://www.npmjs.com/package/flv.js)
 - Languages app (`8-languages` folder)
   - Use `Context` as a alternative to `Redux` for distribute data to the other components
   - How to use `Provider` and `Consumer`
   - How to replace Redux using a custom Context implementation
 - Posts app (`9-posts` folder)
   - Use `Hooks` system to handle state data with `useState` and its updates with `useEffect`
   - How to isolate Hooks logic to use it in other contexts

## Other practice repos
| Node | Angular | GraphQL | Typescript | HTML & CSS | Styling | Docker | Next.js |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://cdn.simpleicons.org/node.js" title="Node Practice Repo" alt="Node Practice Repo" width="48px">](https://github.com/NicolasOmar/node-practice) | [<img src="https://cdn.simpleicons.org/angular" title="Angular Practice Repo" alt="Angular Practice Repo" width="48px">](https://github.com/NicolasOmar/angular-practice) | [<img src="https://cdn.simpleicons.org/graphql" title="GraphQL Practice Repo" alt="GraphQL Practice Repo" width="48px">](https://github.com/NicolasOmar/graphql-practice) |  [<img src="https://cdn.simpleicons.org/typescript" title="Typescript Practice Repo" alt="Typescript Practice Repo" width="48px">](https://github.com/NicolasOmar/typescript-practice) | [<img src="https://cdn.simpleicons.org/html5" title="HTML and CSS Practice Repo" alt="HTML and CSS Practice Repo" width="48px">](https://github.com/NicolasOmar/html-css-practice) | [<img src="https://cdn.simpleicons.org/sass" title="Styling Practice Repo" alt="Styling Practice Repo" width="48px">](https://github.com/NicolasOmar/styling-practice) | [<img src="https://cdn.simpleicons.org/docker" title="Docker Practice Repo" alt="Docker Practice Repo" width="48px">](https://github.com/NicolasOmar/docker-practice) | [<img src="https://cdn.simpleicons.org/nextdotjs" title="Next.js Practice Repo" alt="Next.js Practice Repo" width="48px">](https://github.com/NicolasOmar/next-practice) |