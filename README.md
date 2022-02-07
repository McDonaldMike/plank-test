# Mike McDonald's Take-Home Assessment for Plank

## Packages Used
**Styled Components:** Pretty self explanatory. This is just how I like to style my React components.

**React Router:** Once I saw that url slugs were part of the category api response, I figured I should make the filters navigable by url, so a shared link to `example.com/arts-culture` will go to the page pre-filtered by the `Arts & Culture` category. I'm actually not sure if using React Router was the right way to go about this. I'm pretty sure it could be accomplished just as easily without it, but with limited time to complete the test I decided to stick to my first idea.

## A Quick Overview of my Approach

`src/pages/App.js` has the currently selected category kept in its state, and renders the `Nav` and `CardList` components, with the category passed as a prop to each of them. `App` also passes `setCategory` as a prop to `Nav`, which is called when a `NavLink` is clicked.

`NavLinks` are just styled `Link` components from React Router, so they also navigate to `/:category`

`CardList` renders an array of `Card` components. It fetches all case studies and filters by category at render. I think this approach is best for now since there's so little data, the page is usually first rendered with 'All' selected, and I wasn't provided a filterable endpoint.

## Handling Weird Data

If `CardList` tries to render an empty `Card` array (due to a selected filter with no associated case studies), it instead renders a little *Oops...* message. Another approach would've been to filter out categories with no applicable case studies on the `Nav`, but I decided to keep them all since the 'Sports' category is in the design spec. (Maybe if this were a real site, the Sports data would be on the way. I don't know!).

There is also one case study with a missing image, and one with a missing excerpt. I set the `Card` component to show the provided placeholder in the case of a missing image, but for the missing excerpt I just left a blank. The card looks a little weird with an empty space, but I think adding placeholder text would be weirder.

## Accessibility

I tried to make the markup as semantic as possible, and made sure to include alt text on the images (including blank alt text on the arrow icons, so they get skipped by screen readers).

I also made the call to make the entire `Card` a link to its case study, mostly because it felt weird not to be able to click on the images, but I made the 'View Case Study' buttons actual styled `<button />` tags. This way, the `Cards` are navigable using Tab, and the links can be used by pressing Enter while a button is highlighted. 
