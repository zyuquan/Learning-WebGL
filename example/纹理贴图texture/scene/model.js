import * as THREE from "../../../node_modules/three/build/three.module.js";

var model = new THREE.Group();

var arr = [
  0,0,
  55,0,
  65,35,
  45,56,
  0,65,
  -45,45,
  0,0
];

var h = 30;

var trigerArr = [];
var uv = [];

for(let i = 0; i <= arr.length - 2; i+=2) {
  trigerArr.push(
    arr[i], arr[i+1], 0, arr[i+2], arr[i+3], 0, arr[i+2], arr[i+3], h,
    arr[i], arr[i+1], 0, arr[i+2], arr[i+3], h, arr[i], arr[i+1], h
  );
  uv.push(
    0, 0, 1, 0, 1, 1,
    0, 0, 1, 1, 0, 1
  )
}

var geometry = new THREE.BufferGeometry();
geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(trigerArr), 3);
geometry.attributes.uv = new THREE.BufferAttribute(new Float32Array(uv), 2);
geometry.computeVertexNormals();
var material = new THREE.MeshLambertMaterial({
  color: 0x00ffff,
  map: new THREE.TextureLoader().load('../../static/image/gradient.png'),
  side: THREE.DoubleSide,
  transparent: true,
  depthTest: false
});
var mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(-Math.PI/2);
model.add(mesh);


var planeGeometry = new THREE.PlaneGeometry(300, 300);
var planeMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: .1
});
var planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.rotateX(-Math.PI/2);
model.add(planeMesh);

var grid = new THREE.GridHelper(300, 15, 0x003333, 0x003333);
model.add(grid);

export { model }
