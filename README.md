# Adventure Quest

## Home Page
* HTML Elements
- [ ] Text input for User name
- [ ] Radio buttons for User race

* Events
- [ ] On Form Submit
    - [ ] Generate a User object using form data (generateUser)
    - [ ] Store user data in localStorage (setuser)
    - [ ] Redirect to the map page

## Map Page
* HTML Elements
- [ ] List of links for each Quest (generated from the Quest-data)
    - [ ] Link should NOT be clickable if the User has already completed Quest
    - [ ] Link should contain a URL search parament containing the Quest ID

* Events
- [ ] On Page Load -- TBD GAME LOGIC

## Quest Detail Page
* HTML Elements
- [ ] Title
- [ ] Description
- [ ] Quest Image
- [ ] Quest Choices (radio buttons)

* Events
- [ ] On page load, get the quest ID from the URL Search Parameters and load the quest data onto the page
- [ ] On form submit
    - [ ] Update the user data
    - [ ] Redirect to map page
