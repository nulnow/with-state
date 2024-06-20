# WithState React component

A simple and easy-to-use React component that outsource state management for its children.

![Size Gzip](https://img.shields.io/bundlejs/size/with-state)
![Static Badge](https://img.shields.io/badge/coverage-100%25-success)
![NPM Downloads](https://img.shields.io/npm/d18m/with-state)
![NPM Version](https://img.shields.io/npm/v/with-state)
![NPM License](https://img.shields.io/npm/l/with-state)
![Node LTS](https://img.shields.io/node/v-lts/with-state)

## Installation

Install with npm:

```shell
npm i with-state
```

Or with yarn:

```shell
yarn add with-state
```

#### Links:
* NPM: [npmjs.com/package/with-state](https://www.npmjs.com/package/with-state)

## Example

Consider a scenario where you have a page with a small menu that needs just a minor piece of well isolated local state.
It might be too small to move it into separate component.

Usually you would declare your state at the top of the function using React's useState
hook. This approach can sometimes lead to scattered code and switch 
of context which can affect clarity and simplicity.

```tsx
import React from "react";
import { WithState } from "with-state";

export function App() {
  return (
    <div>
      <header>My Website</header>
      <main>
        <WithState initialState={{ open: false }}>
          {({ state, setState }) => (
            <>
              <button
                onClick={() => setState({ open: !state.open })}
              >
                { state.open ? "Close menu" : "Open menu" }
              </button>
              {state.open && (
                <div>My menu</div>
              )}
            </>
          )}
        </WithState>
        <h1>My Website</h1>
      </main>
    </div>
  );
}
```

However, with WithState, you can contain the state management within the scope of the component that actually uses it. This encapsulation not only makes your code easier to understand, but it also enhances modularity by keeping related logic together.
Here's the key: WithState allows you to manage local state right where you need it, keeping your code clean and organized."
Remember, the goal of this explanation is to clearly communicate the benefits of using your WithState component. It's important to highlight how it makes code more readable, maintainable, and elegant.


In this example, initialState is an object with a single property open that is initially set to false.
The state and setState are used within the children function to control the opening and closing of a menu.

## API

### WithState

A React component that provides state management for its children.

###### Parameters

*   `initialState` **T** initialState
*   `children` **({ state: T, setState: SetState\<T> }) => ReactNode** A function that takes the current state and a setState function, and returns a React node.
