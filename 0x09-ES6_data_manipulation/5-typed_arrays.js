function createInt8TypedArray(length, position, value) {
  const arrayBuffer = new ArrayBuffer(length);
  const dataView = new DataView(arrayBuffer, 0);
  if (position >= length) {
    throw Error('Position outside range');
  }
  dataView.setInt8(position, value);
  return dataView;
}

export default createInt8TypedArray();
