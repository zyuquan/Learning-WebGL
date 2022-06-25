import { initShader } from "./initShader.js";
import { createProgram } from "./createProgram.js";
import { createBuffer } from "./createBuffer.js";

var VSHADER_SOURCE = `
  attribute vec3 a_Position;
  uniform float u_scale;
  void main() {
    gl_Position = vec4(a_Position.x*u_scale, a_Position.y*u_scale, a_Position.z*u_scale, 1.0);
  }
`;

var FSHADER_SOURCE = `
  // uniform vec4 gl_FragColor;
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
  }
`;

var vertexArray = new Float32Array([
  0.0, 0.0, 0.0,
  .5, .5, 0.0,
  -.5, .5, 0.0
]);

var width = window.innerWidth;
var height = window.innerHeight;
function main() {
  var webgl = document.getElementById("webgl");
  webgl.width = width;
  webgl.height = height;
  // 生成三维画布
  var gl = webgl.getContext("webgl");
  // 顶点着色器
  var vshader = initShader(gl, gl.VERTEX_SHADER, VSHADER_SOURCE);
  // 片元着色器
  var fshader = initShader(gl, gl.FRAGMENT_SHADER, FSHADER_SOURCE);
  // 着色器程序准备
  var program = createProgram(gl, vshader, fshader);

  // 缓冲区准备
  var buffer = createBuffer(gl, vertexArray);
  // 元素字节数，在 Float32Array 的情况下返回 4
  var FLOAT = vertexArray.BYTES_PER_ELEMENT;
  // 返回了给定WebGLProgram对象中某属性的下标指向位置
  var a_Position = gl.getAttribLocation(program, "a_Position");
  // 告诉显卡从当前绑定的缓冲区（bindBuffer() 指定的缓冲区）中读取顶点数据
  gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, 0, 0);
  // 激活属性数组列表中的每一个属性
  gl.enableVertexAttribArray(a_Position);

  // 缩放
  var u_scale = gl.getUniformLocation(program, "u_scale");
  gl.uniform1f(u_scale, .5);
  // gl.enableVertexAttribArray(u_scale);

  // 设置画布清空颜色
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  // 清空画布
  gl.clear(gl.COLOR_BUFFER_BIT);
  // 绘图
  gl.drawArrays(gl.TRIANGLES, 0, 3);
}

export { main }