import * as THREE from "../../../node_modules/three/build/three.module.js";

import { shapeMesh } from "./shapeMesh.js";
import { extrudeMesh } from "./extrudeMesh.js";

var model = new THREE.Group();

/**
 * 
 */
var loader = new THREE.FileLoader();
loader.setResponseType("json");

loader.load("../../static/json/huangpujiang.json", function(load) {
    var group = new THREE.Group();
    load.features.forEach(data => {
        if(data.geometry) {
            if(data.geometry.type === "Polygon") {
                data.geometry.coordinates = [data.geometry.coordinates];
            }
            group.add(shapeMesh(data.geometry.coordinates));
        }
    });
    model.add(group);
});

loader.load("../../static/json/shanghaiwaitan.json", function(load) {
    var group = new THREE.Group();
    load.features.forEach(data => {
        if(data.geometry) {
            if(data.geometry.type === "Polygon") {
                data.geometry.coordinates = [data.geometry.coordinates];
            }
            var height = data.properties.Floor * 3;
            group.add(extrudeMesh(data.geometry.coordinates, height));
        }
    });
    model.add(group);
});

export { model };