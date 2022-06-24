function createProgram(gl, vshader, fshader) {

  // 创建着色器程序
  var program = gl.createProgram();
  if(!program) {
    console.log("program create error");
    return null;
  }
  // 向着色器程序添加顶点着色器
  gl.attachShader(program, vshader);
  // 向着色器程序添加片元着色器
  gl.attachShader(program, fshader);

  // 连接程序对象
  gl.linkProgram(program);
 

  if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    // 获取错误信息
    var error = gl.getProgramInfoLog(program);
    console.log("Failed to link program: "+ error);
    // 删除程序
    gl.deleteProgram(program);
    // 删除着色器
    gl.deleteShader(vshader);
    gl.deleteShader(fshader);
    return null;
  }
  //
  gl.useProgram(program);
  return program;
}

export { createProgram }