# Hyper todo list!

Had a blast making this little app. I decided to use styled components for the reusable components, and regular CSS for jsx elements and over all mark up structure. This process of initial style design took about 3 hours. Also installed React router for routing the login and main pages.


# Data Design / business logic

Next, I started structuring the data design and flow through the app. This probably took longer than it should, because I was struggling with a few different design patterns I had in my head. I ended up writing a couple of custom `useValidate` and `useTodo`, so I could share a few pieces of integral data and methods, namely with the `Form` and `ToDo` components. I thought this might be a good solution, as the project didn't seem complex enough to require high level third party state management. I decided to put the input data into a list which could be iterable and updated pretty easily. And of course give each `ToDo` component an id, so they could be selected and passed in update and delete methods. Data design and implementation took up most of my time, probably a total of 8 hours if I'm honest because of all the experimentation.

# API Issue

Not sure if this was part of the test, but I wasn't able to solve the CORS Error I kept receiving when performing the `POST` request to the api you guys gave me. If you check out the `handleSubmit` method in the index.js folder of `Form` component, you'll see everything is correct, at least as far as I could tell. I downloaded an Allow CORS chrome extension and it still didn't work. Since I couldn't get it to respond properly I went ahead and routed the login to the main page if the validation methods passed.

# persistant state and filtered search bar

This took about 3-4 hours, had to re-learn how the `localStorage` method works, and ended up saving changes to the `todoInputValue` and `todoList` when the component updated with `useEffect`, then called `useEffect` again to retrieve and parse the `localData` pass it into `setTodoList`. This is defined in the `useTodo` hook, and passed to the `ToDo` component, then mapped on the `list` arry in `Main`. The `todoSearch` feature was fun and tricky, ended up defining and grabbing the `todoSearchValue` and filtering out the index in a new `filteredTodos` array, defined in the `Main` component.

# Side Note

Probably a data design issue, but I ended up having the `ToDo` component's default state not be in  `editMode`. I couldn't figure out an efficient way have one render that way without breaking other things. Maybe I should have used the Context api to share `editMode` instead of prop drilling from `Main`. Or in retrospect, I might have added an `isSelected` boolean state value as a prop, and somehow defined a specific `ToDo` to have `isSelected = true` when `Main` rendered. Since It's almost been a week, I decided to leave it like this as I was spending too much time on that one detail.
