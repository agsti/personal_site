---
title: Climbing the React state ladder
date: "2020-05-26" 
draft: false
---

# Intro
This is a blog post summarizing my learnings and choice of libraries in the React-Redux world. Specifically I will talk about why I choose __redux-toolkit__ and __redux-saga__.

You've probably heard of [React](https://reactjs.org/), it's the trendy UI framework made by Facebook that everyone uses nowadays. It's main goal is to __make frontend web development scalable to teams and codebases of any size__.

In order to make the codebase scalable, code needs to be predictable and easy to understand. Code changes in one part of the code should not ripple through all the codebase. 

Traditional frontend codebases usually evolved into spagheti dishes. Global variables, heavy coupling between javascript and html files, event handlers everywhere...
Luckily this is history now, (a lot of) tooling and ES6 have come a long way, and now frontend code is way more maintainable.

React has been a key contributor on making frontend code more maintainable, but also has increased the amount of tools and libraries required to understand. 
In this post I will explain some of the tools I've come across that make React code more maintainable.

I'm going to assume some knowledge of React, reading the Overview section of [the official documentation](https://reactjs.org/tutorial/tutorial.html#overview) should be enough.

# Unidirectional data flow
The way which data is represented in the React ecosystem, is through __properties__ and __state__. State is when data is held within the component and props is when data comes from a parent component.
This is what is know as __unidirectional data flow__ where data travels from parent components to child components. This restriction complicates some code that traditionally would have not been an issue.

```js
function TodoList ({todos}) {
    return <ul>  
        {todos.map(t => <li key={t} >{t}</li>)}
    </ul>
}

function AddTodoView ({addTodo}) {
    const [newTodo, setNewTodo] = useState("")
    const onInputChange = e => {
        setNewTodo(e.currentTarget.value)
    }
    const _addTodo = () =>{
        addTodo(newTodo)
        setNewTodo("")
    }
    return <div>
        <input type="text" value={newTodo} onChange={onInputChange} />
        <button onClick={_addTodo}>Add</button>
    </div>
}

function TodoView () {
    const [todos, setNewTodos] = useState([])
    const addTodo = (newTodo) => {
       setNewTodos([...todos, newTodo]) 
    }
    return <div>
        <TodoList todos={todos}/>
        <AddTodoView addTodo={addTodo}/>
    </div>
}

function App() {
  return (
    <div className="App">
        <TodoView />
    </div>
  );
}
```
In this classic example we have a barebones TO-DO list. We are using [react hooks](https://reactjs.org/docs/hooks-intro.html), so the state is defined by the return of the `useState` calls. 
We are not going to talk about the state within the `AddTodoView` function. That is only there to handle the form data.
The one that is interesting is the one inside the `TodoView` function. If you notice, the state is held in said component and then passed as a property to the `TodoList` component.

The problem I'm trying to explain comes when another components requires this state. Let's say that now we need a header that should show the amount of todos we have.

```js
function TodoView ({todos, addTodo}) {
    return <div>
        <TodoList todos={todos}/>
        <AddTodoView addTodo={addTodo}/>
    </div>
}

function Header({todos}) {
    return <header className="App-header">
        We have {todos.length} things to do!
      </header>
}

function App() {
    const [todos, setNewTodos] = useState([])
    const addTodo = (newTodo) => {
        setNewTodos([...todos, newTodo]) 
    }
    return (
        <div className="App">
            <Header todos={todos}/>
            <TodoView todos={todos} addTodo={addTodo}/>
        </div>
    );
}

```
As you can see now we have __lifted the state up__ one level. As you can see now the state is in the new common parent component and flows down through properties. This becomes a problem as the state grows bigger or the hierarchy taller.

That's why React is most commonly used with some kind of state management library.

# State management frameworks
State management libraries provide piping in order to access some kind of global state.

There's a few state management libraries out there, there's [MobX](https://mobx.js.org/README.html) and the original [Flux](https://facebook.github.io/flux/) but the most popular one, and probably the one you have heard about, is [Redux]() . 

I used Redux as is the most mainstream one and I'm not even sure what things Redux will be lacking.

## Redux
Redux adds a lot of new concepts, but it's not too hard to wrap our heads around. 
I summarize it as follows:
Redux state is defined in the __store__, changes are requested through __actions__, the __reducer__ processes actions in series, altering the state.

### Actions
Actions are plain objects that indentify a request for a state change. It is common practice to use [redux standard actions](https://github.com/redux-utilities/flux-standard-action#example) which establishes a format that is meant to be used by middlewares (more on that later)

This is an example of a non-error based action.
```js
const action = {
      type: 'ADD_TODO',
      payload: {
 	     text: 'Do something.'  
      }
}
```
It's important to remember that __actions are plain objects__. They are dispatched through the dispatch method which can be obtained by the `useDispatch` hook.
```js
import { useDispatch } from 'react-redux';
...
const dispatch = useDispatch()
dispatch(action)
...
```


### Reducer
Reducers are functions that take an action as a parameter and change the global state accordingly. It is done in an inmutable way (we don't mutate the state variable, but we return a new object with the new state)
```js
function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodos = [...state.todos, action.text]
      return Object.assign({}, state, {
        todos: newTodos
      })
    default:
      return state
  }
}
```
### Store
The store is where the state is held. It's created through the `createStore` function, which takes the reducer function and the initial state.
```js
import { createStore } from 'redux'
const store = createStore(reducer, ['Use Redux'])
```

It is used within the Provider react component that will expose it to every child component.
```js
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
	, document.getElementById('root'));
```


### Redux Caveats
During my time using Redux I found few things that were _not great_, 

#### 1. Inmutability on reducers
I get it, due to how React works, it's better if reducers are inmutable. __But__ it is annoying to be remembering all the inmutable functions. Like, did you know `slice` is an inmutable function but `splice` is not? 
Also when modifying the state, results are quite unpredictable. Actually If you notice the example in the Reducer section, dealing with inmutability ends up being most of the code within the reducer.

#### 2. Dependency between actions and reducers
So, most of the time, we will have an action for every `case` in the reducer. I find this approach rather redundant. 

#### 3. Side effects
I think this is a big issue as it's not only an inconvenience but an actual limiting factor. 
Every time that we need to coordinate a few asynchronous operations with state changes, side effects are actually required

For example, when we login our users, we might want to:
- Show a loading indicator while API call is being done
- Call login API
- Stop loading indicator
- If there's an error
    - display the error
- If it was successful
    - Request more profile information
    - Redirect to home screen


## Redux-toolkit
Redux toolkit greatly simplifies Redux code, and thus solves 1 and 2. I particularly like `slices` that merge the action definitions with the reducers definitions.

```js
const todosSlice = createSlice({
  name: 'todos',
  initialState: {todos = []},
  reducers: {
    addTodo: (state, action) => {
        state.todos.append(action.payload.text)
    },
    resetTodos: (state, action) => {
        state.todos = []
    }
  }
})
```

This code is equivalent to all the reducer and actions code we have seen before. It not only reduces line count, but it makes our code more robust, as every action reducer is contained in its own function and state is completely mutable.


## Redux-Saga
For this one I'm really excited about, redux saga is a Middleware framework that enables handling side effects in a reliable and easy way. It is daunting at first, my first approach was to use [RxJs](https://rxjs-dev.firebaseapp.com/) but I found it's interface really cumbersome compared to [redux-saga](https://redux-saga.js.org/) .

Redux-saga, uses not a very well known ES6 feature called [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*). I know, it's not great to have some syntax that is _potentially_ used only in one part of the codebase.

But believe me it's worth it. And it's not that complex.

> "Generators are functions that can be exited and later re-entered."

Basically are functions that use the `yield` keyword to give control to the redux-saga middleware.
```js
export function* performLogin({payload}) {
  const {username, password} = payload
  try {
    yield put(setIsLoading(true))
    yield call(api.login, {username, password})

    const profile = yield call(api.getProfile)
    cont todos = yield call(api.getTodos)

    yield put(setProfile(profile))
    yield put(setIsLoggedIn(true))
    yield put(setTodos(todos))

    redirect('/')
  } catch (error) {
    yield put(setError(error)
  } finally {
    yield put(setIsLoading(false))
  }
}

export function* watchUserLogin() {
  yield takeEvery(userLogin.type, performLogin)
}
```

This is the code for the example in the _caveats_ section. 
It implements a basic login flow:
- Show a loading indicator while API calls are being done
- Calls multiple APIs
- If there's an error
    - display the error
- If it was successful
    - Redirects to home screen


Here I'm just using two __redux-saga effects__ `call` and `put`. But [there's plenty](https://redux-saga.js.org/docs/api/). 

Redux-saga effects basically tell the middleware to do something. `put` simply puts a new action in the pipeline and `call` calls an asynchronous function and waits until it's execution is completed.




