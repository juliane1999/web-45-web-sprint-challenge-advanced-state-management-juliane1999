# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Helps make our code looks cleaner by cleaning up the props, making it more efficient.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
The store is where we hold our application, working together with the actions and reducers to make changes. The actions are where the payload is located to contain information. The reducers are pure functions that takes the actions to return a new state.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Redux thunk allows us to make action creators that returns a function instead of an action. 

4. What is your favorite state management system you've learned and this sprint? Please explain why!
Redux seems to be the most relaible state management system, therefore my favorite at the moment.