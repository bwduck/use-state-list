# useStateList

`useStateList` is a React Hook similar to useState but for arrays.

[![version](https://img.shields.io/npm/v/use-state-list.svg)](https://www.npmjs.com/package/use-state-list)
[![minified size](https://img.shields.io/bundlephobia/min/use-state-list.svg)](https://www.npmjs.com/package/use-state-list)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/use-state-list.svg)](https://www.npmjs.com/package/use-state-list)
[![downloads](https://img.shields.io/npm/dt/use-state-list.svg)](https://www.npmjs.com/package/use-state-list)
[![build](https://api.travis-ci.com/CharlesStover/use-state-list.svg)](https://travis-ci.com/CharlesStover/use-state-list/)

## Install

* `npm install use-state-list` or
* `yarn add use-state-list`

## Use

`useStateList(length, defaultValue)`
Default value is optional.  How do you like that?

```JavaScript
import useStateList from 'use-state-list';

const MyList = () => {
  const [clicked, setClicked] = useStateList(3);
  const handleClick = idx => setClicked(idx, true);

  return (
    <div>
      {[0, 1, 2].map(idx => (
        <button key={idx} onClick={() => handleClick(idx)}>
          {clicked[idx] ? 'Clicked!' : 'Click me!'}
        </button>
      ))}
    </div>
  );
};
```
