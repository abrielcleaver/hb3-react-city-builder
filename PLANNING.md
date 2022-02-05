# Half-Baked #3: React City Builder

✨ Due on February 1 ✨

**Visit Abriels Live Netlify site here:** [Netlify Live Site](https://abriels-city-builder.netlify.app/)

---
## The Golden Rule:
🦸 🦸‍♂️ Stop starting and start finishing. 🏁

***If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.***

---
### Terminal Commands
npm i
npm start
npm test
git status
git commit -m "
git push origin -u dev
git reset --soft HEAD~1 
    - removes the last commit from the current branch - use only if commit hasn't been pushed
    - use if the commit being reset ONLY exists locally. This command changes the commit history and it might overwrite history 

git revert < commit to revert >
    - find the name of the commit you want to revert using git log
    - creates a new commit that undoes the changes, so if the commit to revert has already been pushed to a shared repository, it is best to use revert as it doesn't overwrite commit history.

---

### Keyboard shortcuts
- cmd + D selects same word
---

### To-do:
- [x] npm i
- [x] make dev branch
- [x] generate netlify deploy site
- [x] add netlify link to github repo


- /App
  - [x] tracks state for `skylineId`, `waterfrontId`, `castleId`, `slogans`, and `cityName`
  - passes state as props correctly to 
    - [X] `CityNameInput` and 
    - [x] `City`, 
    - [x] `SloganForm`, 
    - [x] `SloganList` 
- /City
  - [x] use the 3 props to render the correct images that live in the `public` directory
- /CityNameInput({ setCityName }) : 
  - [x] on change, call setCityName with the new e.target.value to change App.js state

- image changes when selected from dropdown
  - [x] waterfront
  - [x] skyline
  - [x] castle

- /SloganForm
  - `SloganForm({ setSlogans, slogans })`
    - [x] tracks state for the current slogan being typed
     - [x] OnChange of the input, this state changes
    - [x] On submit of the form, this slogan is injected into `App.js` state using a callback state handler passed down as a prop
- /SloganList
  - `SloganList({ slogans })`
    - [x] maps through the `slogans` prop and renders a `Slogan` for each item in the array
- /Slogan
  - `Slogan({ slogan} )`
    - [x] renders the `slogan` prop

  --- 


| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On typing in the name input, the city name changes with each keystroke  |        .5 |
| On changing the waterfront dropdown, the image for the waterfront changes appropriately  |        .5 |
| On changing the castle dropdown, the image for the castle changes appropriately  |        .5 |
| On changing the skyline dropdown, the image for the skyline changes appropriately  |        .5 |
| On submitting a new slogan, it is displayed with all the other slogans in a list |        1 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : tracks state for `skylineId`, `waterfrontId`, `castleId`, `slogans`, and `cityName` |1|
| `App()` : passes state as props correctly to `CityNameInput` and `City`, `SloganForm`, `SloganList` |1|
| `CityNameInput({ setCityName })` : on change, call `setCityName` with the new `e.target.value` to change `App.js` state |.5|
| `City({waterfrontId, skylineId, castleId })` : use the 3 props to render the correct images that live in the `public` directory |1|
| `SloganForm({ setSlogans, slogans })` : tracks state for the current slogan being typed. OnChange of the input, this state changes.  |1|
| `SloganForm({ setSlogans, slogans })` : On submit of the form, this slogan is injected into `App.js` state using a callback state handler passed down as a prop. |1|
| `SloganList({ slogans })` : maps through the `slogans` prop and renders a `Slogan` for each item in the array |1|
| `Slogan({ slogan} )` : renders the `slogan` prop |.5|

### Stretch goal ideas:
- Write two components: `OrderForm` (to hold all the input components) and `OrderDisplay` (to show the user what is selected). Import the appropriate components into these components so that App.js is only responsible for: 
  1) initializing state 
  2) calling `OrderForm` and `OrderDisplay` and
  3) passing the correct props to `OrderForm` and `OrderDisplay`.
- Write a component called `Dropdown`. Use this component to replace all 3 of your dropdowns. Ask yourself: what differs between these 3 dropdowns? The answer to that question will tell you what props your abstracted `Dropdown` component will need to be passed. This is a challenge :)
- Add a `Submit Order` button. The app will clear the current order and keep track of all past orders and render them to the page (like soccer scorekeeper).

![image](https://user-images.githubusercontent.com/16160135/150245906-64beead2-28a0-4062-b7d3-fc8734ec2ead.png)




