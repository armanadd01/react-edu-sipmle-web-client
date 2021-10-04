# ArmanEnt Education Site

This project deployed on [netlify: https://hardcore-hermann-30946d.netlify.app/](https://hardcore-hermann-30946d.netlify.app/).

## 

In the project src folder user can find a component folder, 
Here some short description or details of those folders

### `App.js`

In `App.js` file you can see the Router of this website. I just simply rename the `BrowserRoter as Router` and I use Header Component before the `Switch` and footer after the `Switch` for show in all pages.I use `Navlink` instant of a tag for load the data without loading the site

### `Header`

In Header Component, site details added. 
user can fiend here Two Services header div. One is `top-header` and `header-bottom`
`top-header` contain Header information like "The porupose of this project total Budget of the concert and a short text about project" and `header-bottom` contain site logo and navigation bar and search


### `Services`

In `Services` component lots of thing added here. 
In this component all the  `JSON` data fetched here by using `useState` and `useEffect`
This Services component pass data to `Service`.
On `return` of data I returned `Service` component data under the hood of Service-container by using `.map` method and pass a unique key. 

### `Teacers`

This `Teachers` component is one of the Services component of this projects here user shaw Teacher/trainer information. 
This Component can .map an array and pass data to `Teacher` component. 

### `About`

**Note: In `About` Section you can see the about details and also can see the teacher component**

This `About` component can show up the About data and Teacher data as well. 
user can shaw 3 data updated


for icon  I use `FontAwesome` . And for Css I use `React-Bootstrao` and I also added some custom css. 

## Thanks Giving

**Thanks for visiting my 1st react project :smiley: :smiley: :smiley:**