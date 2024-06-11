
# TRY YOUR LUCK
___

![Devices showing the responsive nature of the site](assets/readme-images/amiresponsive.png)

This website is a simple lottery styled game. This site is targeted towards people who enjoy games of chance such as slots or gambling and to appeal to users who may enjoy card pack openings such as with trading Card or Sports games.

# Five UX Planes

## Strategy

Users want to be presented clear unambigous rules for the operation and mechanics of the game.<br>
Users want to be shown the results of every roll they make.<br>
Users want a clear indication in the difference of their roll results.<br>
Users want to be able to see their roll progress.<br>
Users will want to be able to quickly reset to try again.<br>
Users want a simple, no-nonsense, presentation that doesn't distract from the main focus of the game.<br>

## Scope

The site should be clean and simple and consistent across all devices.<br>
The site should have clearly defined UI elements.<br>
The site should present the rules and mechanics up front.<br>
The site should have its main focus be on the two buttons for rolling.<br>
The site should have counters to track all rolls.<br>
The site should clearly present results of varying rarity.<br>
The site should have a reset button.<br>
The site should be unobtrusive but attractive.<br>

## Structure

The achieve the above scope the structure of the webpage should consist of just one webpage.<br>
The page will have a header with the title.<br>
The page will have a footer with the creator and a link to their account.<br>
The page will have multiple divs that are shown and hidden as needed.<br>
It should display a simple welcome div that introduces the user to the rules and mechanics.<br>

### Intro Div

This div should be hidden when the user progresses, displaying divs for the game and result areas.<br>
This div should have a simple confirmation button for the user to progress after reading the rules.<br>

### Game Div

The game div should have buttons and counters to roll and track a users number of rolls.<br>
This div should have 2 buttons for single and multiple rolls.<br>
There should be counters for overall rolls.<br>
There should be counters to track number of rolls until guaranteed rarities.<br>

### Result Div

The result area should be empty and populate with each result as a user presses buttons in the game div.<br>
The result div should contain a reset button to set the game back to its beginning state.<br>

## Skeleton

The design and flow of the website remains consistent and clean.<br>
There is little change in the presentation of the website across various devices, save for some small resizing of elements.<br>
![A Wireframe of the webpage](assets/readme-images/try-your-luck-wireframe.png)

## Surface

I wanted everything on the site to be clear and bright.<br>
I chose a faded purple colour for the primary colour of the site.<br>
I chose to use a white colour for the text to stand against the dark background.<br>
The buttons follow a similar premise being primarily white and black to have suitable contrast.<br>
I chose a starry night background as I felt it provided a similar feel to the lights of somewhere like Las Vegas wihtout being too bright or distracting.<br>

# Features

## Header

The header simply contains the title of the Webpage/Game.

![A preview of the header](assets/readme-images/header-preview.png)

## Intro Div

The intro div acts as a welcoming splashscreen to the user.<br>
It offers a quick overview of how the game works.<br>
It has a button to start the game, at which point the div is hidden and the game divs are shown.<br>
![A preview of the intro div](assets/readme-images/intro-div.png)

## Button Div

The button div contains two buttons: Roll x1 and ROll x10.<br>
Both buttons will execute JS code to pull a randomly selected reward or rewards and add them to the results div.<br>
The button div also holds three counters.<br>
One counter displays how many remaining rolls a user has.<br>
Another displays how many rolls a user has until the next "Rare" drop they will receive.<br>
The last counter displays how many rolls a user has until the next "Ultra Rare" drop they will receive.<br>
Once the user has used all of their rolls a dialog will display informing them and asking them to reset the game.<br>
This will also disable the both buttons to prevent further attempts.<br>
![A preview of the dialog that displays when a user has used all rolls](assets/readme-images/dialog-modal-preview.png)

## Results Div

This div is mostly empty at first, containing only a small header and a reset button.<br>
As the user pressed the buttons in the Button-div this div will populate with the random rolls they have received.<br>
The reset button will empty the div back to its default state and also reset the three counters in the button div.<br>
If the user has prompted the dialog popup the Reset button will reactivate both Roll buttons.<br>
![A preview of both the button and results div](assets/readme-images/button-results-div.png)

## Footer

The footer quite simply contains my name as the creator and a GitHub icon linking to my account.<br>
![A preview of the footer](assets/readme-images/footer-preview.png)

## Features Left to Implement

All features were implemented as planned, however there are possible additions that could be made.<br>
Possible future additions to the game may include:<br>
1. A gallery page, which a user could use to view all possible results.<br>
This page could have a display of all rolls shadowed out, which then get unshaded when a user receives them through rolling.
2. A system to prevent receiving the same "Ultra Rare" drop twice in a row in one set of 100 pulls if the user was lucky enough to receive them.
3. The ability to bring up the intro div again if a user needs to double check the rules.

# Testing

There were multiple stages of testing as the project developed.<br>

|TEST|PROCESS|EXPECTATION|RESULT|
|--|--|--|--|
| HTML & CSS Positioning | Webpage resized to various devices | Elements would correctly adjust | SUCCESS |
| Roll Button Functionality | Button clicks | Elements would be created on click | SUCCESS |
| Reward Div Creation | After Button clicks | Element would be added to correct area as children | SUCCESS |
| Multiple Reward Div Creation | After Button clicks | Element would be added continually | SUCCESS |
| Roll Counter Testing | After Button clicks | All counters would correctly decrease or reset as required | SUCCESS |
| Reset Button Functionality | Button click | Reward Area would return to default state. Counters would reset. | SUCCESS  |
| Luck Calculation | Repeated runs of the Game | Rare and Ultra Rare drops would be rewarded as expected | SUCCESS  |
| Guarantee Confirmation | Repeated runs of the Game | Rare and Ultra Rare drops would be rewarded when guaranteed | SUCCESS  |
| Reward Image Confirmation | Repeated runs of the Game | Images would load into the reward divs correctly | SUCCESS  |
| Reward Image Randomisation | Repeated runs of the Game | Images would load randomly | SUCCESS  |
| Reward Image Rarity | Repeated runs of the Game | Images would load according to the corresponding rarity of the reward | SUCCESS  |

# Validating

## HTML

I have run the html through the validator and it is fully valid.<br>
![W3C HTML Validator Results](assets/readme-images/w3c-html-validation-result.png)

## CSS

I have run the css stylesheet through the validator and it is fully valid.<br>
![W3C CSS Validator Results](assets/readme-images/w3c-css-validation-result.png)

## JS

I have run the JavaScript through the JSHint validation and it is fully valid.<br>
![JSHint Validator Results](assets/readme-images/jshint-results.png)

## Lighthouse

I have tested the webpages performance with Lighthouse.<br>
![Lighthouse Results](assets/readme-images/lighthouse-result.png)

# Bugs

Any and all bugs have been found and removed.<br>
Notable bugs included:<br>
1. A calculation error that would produce an unexpected result and cause rolls to fail.<br>
This was an error with my if/else statements in the caclulateLuck function, a simple fix.<br>
![Unexpected Result Error](assets/readme-images/error-unexpected-roll-result.png)

2. Counters going into negative values. This could occur for both the overall counter and the rare counter.<br>
Simply required a check in the code to prevent rolling past 0. This would sometimes happen if Ultra Rares dropped when a Rare was guaranteed as Ultras take priority.
![Example of an Ultra Rare dropping on the 10th roll after a Rare, and that the fix is working](assets/readme-images/guarantee-catch-example.png)<br>

3. Errors with divs not correctly loading the reward image resulting in blank or coloured squares.<br>
This was an error with the pathing url provided.

4. Errors with divs displaying the wrong rarity of image.
This was solved by separating the containing array into a blank array that was then populated by the correct rarity results depending on what was rolled.<br>
![Image Result Error](assets/readme-images/error-image-failure.png)

# Deployment

The site has been deployed to GitHub pages. In order to deploy the site:<br>
1. I navigated to the `Settings` tab of the Repository.<br>
2. I navigated to the `Pages` menu.<br>
3. In the `Source` dropdown options I selected `main` for the branch option.<br>
4. I left the `/root` option as the default option.<br>
5. I saved my changes.<br>

GitHub deployed my website, it was live a few minutes later.<br>
The live link can be found here - https://christopher119.github.io/Project2-Try-Your-Luck/

# Credits

## Content

The glow effect used for the rewards was found here:<br>
https://wpshout.com/snippets/css-glow-effect/<br>
<br>
Use of a dialog box as a modal was adapted from here:<br>
https://blog.webdevsimplified.com/2023-04/html-dialog/<br>

Initially I used an array to store all the reward images and then randomly selecting one. This has since been refactored and changed but the initial concept was adapted from here:<br>
https://stackoverflow.com/questions/64993980/adding-a-random-background-image-in-css-using-javascript<br>
<br>

## Media

The night stars background used used for the site was found here:<br>
https://www.pexels.com/photo/stars-1257860/<br>
<br>
The icons used for the various rewards were found here:<br>
https://opengameart.org/content/flare-item-variation-60x60-only<br>