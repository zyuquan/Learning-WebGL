import * as THREE from "../../../node_modules/three/build/three.module.js";
import { lon2xy } from "../../../static/js/math.js";

import { line } from "./line.js";
import { fly } from "./fly.js";

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
        
        var lineMesh = line(arr);
        model.add(lineMesh);

        var flyMesh = fly(arr);
        model.add(flyMesh);
    })
});

export { model }