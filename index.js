/** @param {ArrayBuffer|ArrayBufferView} data */
export default function toDataView (data) {
  if (data instanceof ArrayBuffer) {
    return new DataView(data)
  }

  if (ArrayBuffer.isView(data)) {
    return new DataView(data.buffer, data.byteOffset, data.byteLength)
  }

  throw new TypeError('Expected `data` to be an ArrayBuffer, or any typed array')
}
