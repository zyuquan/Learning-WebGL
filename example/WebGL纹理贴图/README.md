### WebGL 纹理贴图
- 着色器设置
```js
var VSHADER_SOURCE = `
	attribute vec4 a_Position;
	attribute vec2 a_TexCoord;
	varying vec2 v_TexCoord;
	void main() {
		gl_Position = a_Position;
		v_TexCoord = a_TexCoord;
	}
`;

var FSHADER_SOURCE = `
	#ifdef GL_ES
	precision mediump float;
	#endif

	uniform sampler2D u_Sampler;
	varying vec2 v_TexCoord;
	void main() {
		gl_FragColor = texture2D(u_Sampler, v_TexCoord).bgra;
	}
`;
```
- 获取u_Sampler
```js
var u_Sampler = gl.getUniformLocation(program, "u_Sampler");
```
- 纹理设置
```js
var texture = gl.createTexture();

var image = new Image();
image.src = "../../static/image/sky.jpg";
image.onload = function() {
    // 对图像进行y轴反转，
    // 图片原点在图片左上角，y轴正方向向下
    // 纹理贴图原点在左下角，y轴正方向向上
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
    // 激活指定的纹理单元
    gl.activeTexture(gl.TEXTURE0);
    // 将texture绑定到gl.TEXTURE_2D目标上
    gl.bindTexture(gl.TEXTURE_2D, texture);
    // 设置纹理参数
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    // 指定2D纹理图像
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

    gl.uniform1i(u_Sampler, 0);

    // gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
};
```