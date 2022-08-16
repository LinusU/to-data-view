# To DataView

Create a `DataView` over an `ArrayBuffer`/8-bit typed array (commonly used in the browsers) or a `Buffer` (commonly used in Node.js).

Supported inputs:

- [`ArrayBuffer`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
- [`ArrayBufferView`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

## Installation

```sh
npm install --save to-data-view
```

## Usage

```js
import toDataView from 'to-data-view'

// This function will accept `ArrayBuffer` or any typed array
function awesomeParser (source) {
  const view = toDataView(source)

  // ...
}
```

## API

### `toDataView(data)`

- `data` (`ArrayBuffer | ArrayBufferView`, required)
- returns `DataView`

Return a `DataView` instance that uses the same memory as the provided `ArrayBuffer`, or `ArrayBufferView`.
