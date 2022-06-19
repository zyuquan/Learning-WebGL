import * as THREE from "../../../node_modules/three/build/three.module.js";

function line(arr) {
    var geometry = new THREE.BufferGeometry();
    geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(arr), 3);
    var material = new THREE.LineBasicMaterial({
        color: 0x006666
    });
    var mesh = new THREE.Line(geometry, material);

    return mesh;
}

export { line }