
function createBuffer(gl, arr) {
  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER ,buffer);
  gl.bufferData(gl.ARRAY_BUFFER, arr, gl.STATIC_DRAW);

  return buffer;
}

export { createBuffer }