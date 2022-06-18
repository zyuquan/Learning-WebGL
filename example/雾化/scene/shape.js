import * as THREE from "../../../node_modules/three/build/three.module.js";
import { lon2xy } from "../../../static/js/math.js";

function shape(coordinates, height) {
    var arr = [];
    coordinates.forEach(vertic => {
        var vecArr = [];
        vertic.forEach(item => {
            var xy = lon2xy(item[0], item[1]);
            vecArr.push(new THREE.Vector2(xy.x, xy.y));
        });
        var shapes = new THREE.Shape(vecArr);
        arr.push(shapes);
    });
    var geometry = new THREE.ExtrudeGeometry(
        arr,
        {
            depth: height,
            bevelEnabled: false
        }
    );
    var material = new THREE.MeshLambertMaterial({
        color: 0x009999
    });
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
}

export { shape }