
var VSHADER_SOURCE = `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0); // 顶点坐标
    gl_PointSize = 10.0; // 点的大小
  }
`;
var FSHADER_SOURCE = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // 片元着色器颜色
  }
`

function main() {
  var width = window.innerWidth;                        // 获取屏幕宽度
  var height = window.innerHeight;                      // 获取屏幕高度

  var canvas = document.getElementById("canvas");       // 获取canvas元素
  canvas.width = width;                                 // 设置元素宽度
  canvas.height = height;                               // 设置元素高度
  
  // 生成三维画布
  var gl = canvas.getContext("webgl");
  // 如果生成失败返回
  if(!gl) return null;
  
  // 设置清空画布的颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 清空画布颜色
  gl.clear(gl.COLOR_BUFFER_BIT);

  // 创建顶点着色器
  var vshader = gl.createShader(gl.VERTEX_SHADER);
  if(!vshader) return null;
  // 加载着色器源码
  gl.shaderSource(vshader, VSHADER_SOURCE);
  // 编译着色器源码
  gl.compileShader(vshader);
  // 检查编译结果
  if(!gl.getShaderParameter(vshader, gl.COMPILE_STATUS)) {
    // 获取错误信息
    var error = gl.getShaderInfoLog(vshader);
    console.log('Failed to compile shader:' + error);
    // 删除着色器
    gl.deleteShader(vshader);
    return null;
  }

  // 创建片源着色器
  var fshader = gl.createShader(gl.FRAGMENT_SHADER);
  if(!fshader) return null;
  // 加载着色器源码
  gl.shaderSource(fshader, FSHADER_SOURCE);
  // 编译着色器源码
  gl.compileShader(fshader);
  // 检查编译结果
  if(!gl.getShaderParameter(fshader, gl.COMPILE_STATUS)) {
    // 获取错误信息
    var error = gl.getShaderInfoLog(fshader);
    console.log('Failed to compile shader:' + error);
    // 删除着色器
    gl.deleteShader(fshader);
    return null;
  }

  // 创建程序
  var program = gl.createProgram();
  if(!program) return null;

  // 附加着色器对象
  gl.attachShader(program, vshader);
  gl.attachShader(program, fshader);

  // 连接程序对象
  gl.linkProgram(program);
  // 检查连接程序结果
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

  // 应用程序
  gl.useProgram(program);

  // 执行顶点着色器
  gl.drawArrays(gl.POINTS, 0, 1);
}

export { main }