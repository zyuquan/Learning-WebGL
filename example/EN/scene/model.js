import * as THREE from "../../../node_modules/three/build/three.module.js";

import { shapeMesh } from "./shapeMesh.js";

var model = new THREE.Group();

var loader = new THREE.FileLoader();
loader.setResponseType("json");

loader.load("./scene/黄浦江.json", function(data) {
    var group = new THREE.Group();
    data.features.forEach(build => {
        group.add(shapeMesh(build.geometry.coordinates))
    });
    model.add(group);
})

export { model }