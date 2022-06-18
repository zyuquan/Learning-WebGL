import * as THREE from "../../../node_modules/three/build/three.module.js";

import { shape } from "./shape.js";

var model = new THREE.Group();

var loader = new THREE.FileLoader();
loader.setResponseType("json");

loader.load("../../static/json/shanghaiwaitan.json", function(build) {
    console.log(build);
    var buildGroup = new THREE.Group();
    build.features.forEach(item => {
        if(item.geometry) {
            // if(item.geometry.coordinates) {
            //     item.geometry.coordinates = [item.geometry.coordinates];
            // }
            var height = item.properties.Floor * 3;
            var mesh = shape(item.geometry.coordinates, height);
            buildGroup.add(mesh);
        }
    })
    model.add(buildGroup);
});

export { model }
