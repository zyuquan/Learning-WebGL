### WebGL变换

##### 缓冲区
- 创建缓冲区
``` js
  var buffer = gl.createBuffer();
```
- 缓冲区绑定
```js
  /** 
   * target 绑定的缓冲区目标
   *    gl.ARRAY_BUFFER 包含顶点属性的 Buffer，如顶点坐标，纹理坐标数据或顶点颜色数据
   *    gl.ELEMENT_ARRAY_BUFFER 用于元素索引的 Buffer
   *  buffer 新建的缓冲区
   */
  gl.bindBuffer(target, buffer);

```
- 初始化并创建缓冲区对象的数据存储
```js
  /**
   * target 绑定的缓冲区目标
   * data 类型化数组对象
   * usage 指定数据存储区的使用方法
   * offset 指定读取缓冲时的初始元素索引偏移量
   * length 
   */
  gl.bufferData(target, data, usage, offset, length);

```
##### 修改着色器属性
- 获取属性的下标
``` js
  /**
   * program WebGLProgram对象
   * name 需要获取的属性参数名
   */
  var a_Position = gl.getAttribLocation(program, name);
```
- 
  