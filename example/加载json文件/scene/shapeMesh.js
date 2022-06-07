import * as THREE from "../../../node_modules/three/build/three.module.js";

function shapeMesh(points) {
    var arr = [];
    points.forEach(lists => {
        var lsArr = [];
        lists[0].forEach(l => {
            lsArr.push(new THREE.Vector2(l[0], l[1]));
        })
        var lsShape = new THREE.Shape(lsArr);
        arr.push(lsShape);
    });
    /**
     * 多边形平面对象
     */
    var geometry = new THREE.ShapeGeometry(arr);
    /**
     * 材质对象
     */
    var material = new THREE.MeshLambertMaterial({
        color: 0x009999
    })
    /**
     * 网格对象
     */
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};



export { shapeMesh };