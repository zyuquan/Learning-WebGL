
function createProgram(gl, vshader, fshader) {
    var program = gl.createProgram();
    if(!program) {
        console.log("create program error")
        return null;
    }
    gl.attachShader(program, vshader);
    gl.attachShader(program, fshader);

    gl.linkProgram(program);
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.deleteProgram(program);
        gl.deleteShader(vshader);
        gl.deleteShader(fshader);
        return null;
    }
    gl.useProgram(program);
    return program;
}

export { createProgram }