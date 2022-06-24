function initShader(gl, type, source) {
  // 创建着色器
  var shader = gl.createShader(type);
  if(!shader) {
    console.log("create shader error");
    return null;
  }
  // 设置着色器程序代码
  gl.shaderSource(shader, source);
  // 编译着色器程序代码
  gl.compileShader(shader);

  if(!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    // 获取错误信息
    var error = gl.getShaderInfoLog(shader);
    console.log("Failed to compile shader: " + error);
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export { initShader }