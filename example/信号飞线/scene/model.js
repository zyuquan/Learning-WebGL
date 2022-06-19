import * as THREE from "../../../node_modules/three/build/three.module.js";
import { scene } from "./index.js";

var model = new THREE.Group();

// 三维样条曲线
var curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(100, 0, -100),
    new THREE.Vector3(0, 100, 0),
    new THREE.Vector3(-100, 0, 100)
]);
// 曲线上等间距返回多个顶点坐标
var points = curve.getSpacedPoints(100); // 分段100，返回101个顶点坐标
console.log(points);
/**
 * 创建线条几何体
 */
var geometry = new THREE.BufferGeometry();
// setFromPoints方法从points里面获取数据，赋值给geometry.attributes.position
geometry.setFromPoints(points);
/**
 * 创建线条材质
 */
var material = new THREE.LineBasicMaterial({
    color: 0x006666
});
/**
 * 创建线条模型对象
 */
var line = new THREE.Line(geometry, material);
model.add(line);

/**
 * 设置飞线模型
 */
var index = 20; // 取点索引位置
var num = 15; // 取点个数
var points2 = points.slice(index, index+num); // 从曲线上获取一段
var curve2 = new THREE.CatmullRomCurve3(points2); // 设置样条曲线
var newPoints2 = curve2.getSpacedPoints(100); // 分段100，返回101个顶点坐标
var geometry2 = new THREE.BufferGeometry();
geometry2.setFromPoints(newPoints2);
// 计算每个顶点百分比数据, geometry.attributes.percent控制点的大小
var percentArr = [];
for(let i = 0; i < newPoints2.length; i++) {
    percentArr.push(i / newPoints2.length);
};
geometry2.attributes.percent = new THREE.BufferAttribute(new Float32Array(percentArr), 1);
// 计算每个顶点颜色数据
var colorArr = [];
for(let i = 0; i < newPoints2.length; i++) {
    var color1 = new THREE.Color(0x006666);
    var color2 = new THREE.Color(0xffff00);
    var color = color1.lerp(color2, i / newPoints2.length);
    colorArr.push(color.r, color.g, color.b);
}
geometry2.attributes.color = new THREE.BufferAttribute(new Float32Array(colorArr), 3);
// 设置点材质
var material2 = new THREE.PointsMaterial({
    // color: 0xffff00,
    size: 5.0,
    vertexColors: true // 是否使用顶点着色，不同版本有一定差异
});
var point = new THREE.Points(geometry2, material2);
model.add(point);
// 修改着色器
material2.onBeforeCompile = function(shader) {
    shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        [
            'attribute float percent;',
            'void main() {'
        ].join('\n')
    )
    .replace(
        'gl_PointSize = size;',
        [
            'gl_PointSize = size * percent;'
        ].join('\n')
    );
};

/**
 * 动画
 */
var maxIndex = points.length - num;
function animation() {
    if(index > maxIndex) index = 0;
    index += 1;
    points2 = points.slice(index, index + num);
    curve2 = new THREE.CatmullRomCurve3(points2);
    newPoints2 = curve2.getSpacedPoints(100);
    geometry2.setFromPoints(newPoints2);

    window.requestAnimationFrame(animation);
}
animation();

/**
 * 设置地面
 */
var grid = new THREE.GridHelper(600, 10, 0x006666, 0x006666);
model.add(grid);
var plane = new THREE.PlaneGeometry(600, 600);
var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: .1,
    side: THREE.DoubleSide
});
var planeMesh = new THREE.Mesh(plane, planeMaterial);
planeMesh.rotateX(-Math.PI/2);
model.add(planeMesh);

export { model }