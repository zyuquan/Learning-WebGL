import * as THREE from "../../../node_modules/three/build/three.module.js";

var model = new THREE.Group();

var geometry = new THREE.PlaneGeometry(300, 300);
var planeMaterial = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: .1
});
var planeMesh = new THREE.Mesh(geometry, planeMaterial);
planeMesh.rotateX(-Math.PI/2);
model.add(planeMesh);

var material = planeMaterial.clone();
material.map = new THREE.TextureLoader().load("../../static/image/aperture.png");
var mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(-Math.PI/2);

var _scale = 0;
function animate() {
  _scale += .025;
  mesh.scale.set(_scale, _scale, 0);
  if(_scale > 1) {
    _scale = 0;
  }
  window.requestAnimationFrame(animate);
}
animate();
model.add(mesh);



var grid = new THREE.GridHelper(300, 15, 0x003333, 0x003333);
model.add(grid);

export { model }
