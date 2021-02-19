# Conditional Rendering

![conditional](https://s3.ap-southeast-1.amazonaws.com/arrowhitech.com/wp-content/uploads/2020/07/09073745/conditional_rendering_react-1024x576.jpg)


## Overview
In this lesson we'll be covering conditional rendering with React by building a small greeting application. Conditional rendering is important because it allows us to control the flow of user experience in an application.

## Lesson Objectives
- Understand several methods for conditional rendering with React components
- Use conditional rendering with state to affect real time changes in our application's UI

## Getting Started
- `Fork` and `clone` this repository and `cd` into the new directory
- Create a new React app with `npx create-react-app conditional-react`
- `cd` into the new React app and run `npm start` to open your app in the browser
- Within `src`, create a `components` folder to store components we'll be creating in this lesson

## Instructions
### Setup
In React, you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.

Conditional rendering in React works the same way conditions work in JavaScript. Use JavaScript operators like `if` or the conditional operator to create elements representing the current state, and let React update the UI to match them.

We'll start by adding two components into our `components` directory:

#### UserGreeting.js
```js
import React, {Component} from 'react';

export default class UserGreeting extends Component {
  render() {
    return <h1>Welcome back!</h1>
  }
}
```
#### GuestGreeting.js
```js
import React, {Component} from 'react';

export default class GuestGreeting extends Component {
  render() {
    return <h1>Please sign up.</h1>
  }
}
```

We’ll then create a Greeting component that displays either of these components depending on whether a user is logged in:

#### Greeting.js
```js
import React, {Component} from 'react';
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

export default class Greeting extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn
    
    if (isLoggedIn) {
      return <UserGreeting />
    }
    return <GuestGreeting />
  }
}
```

Make sure to import our `Greeting` component into `App.js` so it is rendered and pass props to it for the `isLoggedIn` boolean value.

#### App.js
```js
import React, {Component} from 'react';
import Greeting from './components/Greeting';

export default class App extends Component {
  constructor() {
    super()
  }
  
  render() {
    return <Greeting isLoggedIn={false} />
  }
}
```

This example renders a different greeting depending on the value of `isLoggedIn` prop.
- Which greeting is our component rendering?
- Now let's try changing value of `isLoggedIn` being passed from `App.js` to `true`
- Has anything changed with our rendered components?

### Element Variables

You can use variables to store elements. This can help you conditionally render a part of the component while the rest of the output doesn’t change.

Let's create two more new components in our `components` folder representing `Logout` and `Login` buttons:

#### LoginButton.js
```js
import React, {Component} from 'react';

export default class LoginButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Login
      </button>
    );
  }
}
```
#### LogoutButton.js
```js
import React, {Component} from 'react';

export default class LogoutButton extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Logout
      </button>
    );
  }
}
```

In the example below, we will now add `state` to our `App` component within it's `constructor()` to track our `isLoggedIn` variable. We'll also import our two button components from above and attach methods to set the state of `isLoggedIn` with `onClick` event listeners. 

- `App.js` will now render either `<LoginButton />` or `<LogoutButton />` depending on its current state. 
- It will also render a `<Greeting />` from the previous example:

```js
import React, {Component} from 'react';
import Greeting from './components/Greeting';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  handleLoginClick = () => this.setState({isLoggedIn: true});

  handleLogoutClick = () => this.setState({isLoggedIn: false});
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}
```

While declaring a variable and using an if statement is a fine way to conditionally render a component, sometimes you might want to use a shorter syntax. There are a few ways to inline conditions in JSX, explained below.

### Inline If with Logical && Operator

You may embed any expressions in JSX by wrapping them in curly braces. This includes the JavaScript logical `&&` operator. It can be handy for conditionally including an element:

```js
import React, {Component} from 'react';

export default class Mailbox extends Component {
  
  render() {
    const unreadMessages = this.props.unreadMessages
    return (
      <div>
        <h1>Hello!</h1>
        {unreadMessages.length > 0 &&
          <h2>
            You have {unreadMessages.length} unread messages.
          </h2>
        }
      </div>
    );
  }
}
```

[Try it on CodePen](https://codepen.io/gaearon/pen/ozJddz?editors=0010)

It works because in JavaScript, `true && expression` always evaluates to `expression`, and `false && expression` always evaluates to `false`.

Therefore, if the condition is `true`, the element right after `&&` will appear in the output. If it is `false`, React will ignore and skip it.

### Inline If-Else with A Ternary Operator

Another method for conditionally rendering elements inline is to use the JavaScript conditional operator `condition ? true : false`.

In the example below, we use it to conditionally render a small block of text.

```js
render() {
  const isLoggedIn = this.state.isLoggedIn
  return (
    <div>
      The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
  );
}
```

### Preventing Component from Rendering

In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.

[Try it on CodePen](https://codepen.io/gaearon/pen/Xjoqwm?editors=0010)

Source:
- https://github.com/reactjs/reactjs.org/tree/master/content/docs/conditional-rendering.md


## Recap

## Resources

