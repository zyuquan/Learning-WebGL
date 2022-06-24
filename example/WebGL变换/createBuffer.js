function createBuffer(gl, vertexArray) {
  // 创建缓冲区
  var buffer = gl.createBuffer();
  // 缓冲区绑定
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  // 初始化并创建缓冲区对象的数据存储
  gl.bufferData(gl.ARRAY_BUFFER, vertexArray, gl.STATIC_DRAW);

  return buffer;
}

export { createBuffer }