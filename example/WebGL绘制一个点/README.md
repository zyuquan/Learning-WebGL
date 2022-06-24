### WebGL绘制

- 生成三维画布
```js
var gl = canvas.getContext("webgl")
```
- 清空画布
```js
// 设置清空画布的颜色
gl.clearColor(0.0, 0.0, 0.0, 1.0);
// 清空画布
gl.clear(gl.COLOR_BUFFER_BIT);
```
- 创建着色器
```js
/**
 * 创建着色器
 * gl.VERTEX_SHADER顶点着色器
 * gl.FRAGMENT_SHADER片元着色器
 */
var shader = gl.createShader(gl.VERTEX_SHADER);
/**
 * 加载着色器源码
 * source 着色器代码
 */
gl.shaderSource(shader, source);
// 编译着色器源码
gl.compileShader(shader);
```
- 创建并使用程序
```js
// 创建程序
var program = gl.createProgram();
/**
 * 附加着色器对象
 * 包含顶点着色器和片元着色器
 */
gl.attachShader(program, shader);
// 连接程序对象
gl.linkProgram(program);
// 应用程序
gl.useProgram(program);
```
- 执行
```js
/**
 * 执行绘图
 * 第一个参数(mode)
 *    gl.POINTS点
 *    gl.LINES 单独的线段(v0, v1),(v2, v3),(v4, v5)...如果个数为奇数则省略最后一个
 *    gl.LINE_STRIP 连接的线段(v0, v1),(v1, v2),(v2, v3),(v3, v4)...最后一个点不会和第一个点连接
 *    gl.LINE_LOOP 连续的选段(v0, v1),(v1, v2),(v2, v3),(v3, v4)...(vn, v0)最后一个点和第一个点相连
 *    gl.TRIANGLES 单独的三角形(v0, v1, v2), (v3, v4, v5), (v6, v7, v8)...如果最后剩余1或2个点将被忽略
 *    gl.TRIANGLES_STRIP 一系列条带状三角形(v0, v1, v2), (v2, v1, v3), (v2, v3, v4), (v4, v3, v5)...
 *    gl.TRIANGLES_FAN 一系列三角形组成的类似于扇形的图行(v0, v1, v2),(v0, v2, v3),(v0, v3, v4)...
 * 第二个参数(first) 从哪个点开始绘制
 * 第三个参数(count) 指定绘制需要使用到几个点
 */
gl.drawArrays(mode, first, count);
```