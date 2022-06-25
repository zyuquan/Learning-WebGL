function initShader(gl, type, source) {
  // 创建着色器
  var shader = gl.createShader(type);
  if(!shader) {
    return null;
  }
  // 添加着色器代码
  gl.shaderSource(shader, source);
  // 编译着色器代码
  gl.compileShader(shader);
  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export { initShader }