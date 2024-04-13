# @Zkine/React-select

React-select is a component that can be used in your React projects. You must know a minimum of HTML tags as well as the use of components in React to use it.

Link to HTML select element document : [click here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)

## Features

- This component can be used for React version 17 and higher
- Out of the box integration
- Small size and no dependencies

## Prerequisites

- Node version : 20.12.1
- npm version : 8.18.1
- VS Code version : 1.88.1

## Installation

Install my-project with npm

```bash
  npm install @Zkine/react-select
  # or
  yarn add @Zkine/react-select
```

## Usage/Examples

```javascript
import { Select } from "@zkine/react-select";
import { createRoot } from "react-dom/client";

function App() {
  // Object array used to increment the <option> tag
  const data = [
    { id: "1SA", children: "first child" },
    { id: "2MA", children: "second child" },
    { id: "3EN", children: "third child" },
    { id: "4HU", children: "fourth child" },
    { id: "5LE", children: "fifth child" },
  ];

  return (
    <>
      <Select
        htmlFor="htmlFor"
        className="className for label"
        name="name"
        id="id"
        className2="className for select"
      >
        // label tag title - Props reference children
        {"title label"}
        // map function allowing use of the object array above and incrementing
        // the data of the select component - Props reference children
        {data.map((el) => (
          <option key={el.id}>{el.children}</option>
        ))}
      </Select>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
```

## Props Reference

| Name        | Type     |
| :---------- | :------- |
| `htmlFor`   | `string` |
| `className` | `string` |
| `children`  | `node`   |
| `name`      | `string` |
| `id`        | `string` |

## Authors

- [@Zkine](https://github.com/Zkine)
