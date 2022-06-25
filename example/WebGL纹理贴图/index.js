import { initShader } from "./initShader.js";
import { createProgram } from "./createProgram.js";
import { createBuffer } from "./createBuffer.js";

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

var bufferArray = new Float32Array([
	-.5, .5, 0.0, 0.0, 1.0,
	-.5, -.5, 0.0, 0.0, 0.0,
	.5, .5, 0.0, 1.0, 1.0,
	.5, -.5, 0.0, 1.0, 0.0,
]);

function main() {
	var height = window.innerHeight;
	var width = window.innerWidth;
	var webgl = document.getElementById("webgl");
	webgl.width = width;
	webgl.height = height;
	var gl = webgl.getContext("webgl");

	var vshader = initShader(gl, gl.VERTEX_SHADER, VSHADER_SOURCE);
	var fshader = initShader(gl, gl.FRAGMENT_SHADER, FSHADER_SOURCE);

	var program = createProgram(gl, vshader, fshader);

	var buffer = createBuffer(gl, bufferArray);

	var FLOAT = bufferArray.BYTES_PER_ELEMENT;

	var a_Position = gl.getAttribLocation(program, "a_Position");
	gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FLOAT * 5, 0);
	gl.enableVertexAttribArray(a_Position);

	var a_TexCoord = gl.getAttribLocation(program, "a_TexCoord");
	gl.vertexAttribPointer(a_TexCoord, 2, gl.FLOAT, false, FLOAT * 5, FLOAT * 3);
	gl.enableVertexAttribArray(a_TexCoord);
	gl.bindBuffer(gl.ARRAY_BUFFER, null);

	var u_Sampler = gl.getUniformLocation(program, "u_Sampler");
	var texture = gl.createTexture();
	

	var image = new Image();
	image.src = "../../static/image/sky.jpg";
	image.onload = function() {
		gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, texture);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		// Set the image to texture
		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);

		console.log(texture, u_Sampler);
		gl.uniform1i(u_Sampler, 0);

		// gl.clearColor(0.0, 0.0, 0.0, 1.0);
		// gl.clear(gl.COLOR_BUFFER_BIT);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
	};
		
}

export { main };