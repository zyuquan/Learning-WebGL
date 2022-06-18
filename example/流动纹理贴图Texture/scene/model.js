import * as THREE from "../../../node_modules/three/build/three.module.js";

var model = new THREE.Group();

var arr = [
    0, 0,
    30, 0,
    45, 30,
    0, 45,
    -15, 25,
    0, 0
];

var varr = [], uarr = [], h=30;

for(let i = 0; i < arr.length - 2; i+=2) {
    varr.push(
        arr[i], arr[i+1], 0,
        arr[i+2], arr[i+3], 0,
        arr[i+2], arr[i+3], h,

        arr[i], arr[i+1], 0,
        arr[i+2], arr[i+3], h,
        arr[i], arr[i+1], h
    );

    uarr.push(
        0, 0,
        1, 0,
        1, 1,

        0, 0,
        1, 1,
        0, 1
    )
};

var geometry = new THREE.BufferGeometry();
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(varr), 3);
geometry.attributes.uv = new THREE.BufferAttribute(new Float32Array(uarr), 2);
geometry.computeVertexNormals();

var material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    map: new THREE.TextureLoader().load("../../static/image/gradient.png"),
    transparent: true,
    side: THREE.DoubleSide,
    depthTest: false,
    opacity: .5
});

var mesh = new THREE.Mesh(geometry, material);
model.add(mesh);

var texture = new THREE.TextureLoader().load("../../static/image/flow.png");
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

function flowAnimation() {
    texture.offset.y += .02; // 纹理图片的坐标y轴
    window.requestAnimationFrame(flowAnimation);
}
flowAnimation();

var flowMaterial = material.clone();
flowMaterial.map = texture;
var flowMesh = new THREE.Mesh(geometry, flowMaterial);
model.add(flowMesh);



var planeGeometry = new THREE.PlaneGeometry(300, 300);
var planeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: .1
});
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
model.add(planeMesh);

var grid = new THREE.GridHelper(300, 30, 0x003333, 0x003333);
grid.rotateX(-Math.PI/2);
model.add(grid);

export { model }