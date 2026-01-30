LAB 3
TASK1
<!-- How to Run? -->
1. npm install
2. npm run dev

<!-- Components -->
1. StepCounter;reusable counter with state(count, history, operations)
2. CounterApp:parent component rendering two independent counters.

<!-- Explanation -->
Props define initial configuration(initialValue, step).
State is manages inside the component using useState and changes on user interaction.
Each component instance has its own state

TASK2

API:
https://jsonplaceholder.typicode.com/users

How to run:
1. npm install
2. npm start

Explanation:
useEffect is used to fetch user data when the component mounts or when userId changes. AbortController is used to cancel the fetch request during cleanup to prevent memory leaks. userId is included in the dependency array so a new request is made when it changes.