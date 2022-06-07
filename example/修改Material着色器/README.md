### 修改Material着色器


##### 设置几何体attribute变量值

```js
var geometry = new THREE.BufferGeometry();
geometry.setAttribute("alpha", new THREE.BufferAttribute(new Float32Array([], n)));
```

##### 修改着色器代码
```js
var material = new THREE.MeshLambertMaterial({
    color: 0xffff00, //三角面颜色
    side: THREE.DoubleSide, //两面可见
    transparent: true, //需要开启透明度计算，否则着色器透明度设置无效
    opacity: 0.5,//整体改变透明度
    depthTest: false,
});
// GPU执行material对应的着色器代码前，通过.onBeforeCompile()插入新的代码，修改已有的代码
material.onBeforeCompile = function (shader) {
    // console.log('shader.fragmentShader', shader.fragmentShader)
    // 插入代码：在顶点着色器主函数'void main() {'前面插入alpha变量的声明代码
    shader.vertexShader = shader.vertexShader.replace(
        'void main() {',
        ['attribute float alpha; //透明度分量',
        'varying float vAlpha;',
        'void main() {',
        'vAlpha = alpha;', // 顶点透明度进行插值计算
        ].join('\n') // .join()把数组元素合成字符串
    );
    // 插入代码：片元着色器主函数前面插入`varying float vAlpha;`
    shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        ['varying float vAlpha;',
        'void main() {',
        ].join('\n')
    );
    shader.fragmentShader = shader.fragmentShader.replace('#include <output_fragment>', output_fragment);
};
```