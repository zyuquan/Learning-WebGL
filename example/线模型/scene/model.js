import * as THREE from "../../../node_modules/three/build/three.module.js";
import { lon2xy } from "../../../static/js/math.js";

var model = new THREE.Group();

var fileLoader = new THREE.FileLoader();
fileLoader.setResponseType("json");

fileLoader.load("../../static/json/subway.json", function(build) {
    console.log(build);
    
    build.geometries.forEach(function(obj) {
        var arr = [];
        obj.coordinates.forEach(function(item) {
            var xy = lon2xy(item[0]-0.0128, item[1]-0.0075);
            arr.push(xy.x, xy.y, 0);
        });
        var geometry = new THREE.BufferGeometry();
        geometry.attributes.position = new THREE.BufferAttribute(new Float32Array(arr), 3);
        var material = new THREE.LineBasicMaterial({
            color: 0x006666
        });
        var mesh = new THREE.Line(geometry, material);
        model.add(mesh);
    })
});

export { model }