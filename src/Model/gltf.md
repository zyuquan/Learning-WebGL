### 数据问题

一般来说对于前端工程师，只需要从公司web服务器请求数据，然后解析数据渲染三维场景即可，至于公司数据来源，可能是公司自己测绘获取，也可能是甲方提供，也可能是物联网设备实时上传。

### .shp格式文件——地理信息数据

ArcMap可预览编辑shp数据

### shp转GeoJSON

https://mapshaper.org/  一个在线转格式平台

github代码地址：https://github.com/mbloch/mapshaper

文章提到过：https://blog.csdn.net/gisboygogogo/article/details/74056563

### threejs加载解析shp的库shp.js

github：https://github.com/kig/shp.js/

链接：https://www.bram.us/2012/07/30/shp-js-javascript-shapefile-parser/

### GLTF文件的渲染

- 引入GLTFLoader

- 创建GLTF加载器

```js
  var loader = new GLTFLoader()
```

- 加载GLTF文件

```js
  loader.load("xxx.glb", function(gltf) {
    // gltf.scene 物体所添加到的场景
    // var mesh = gltf.scene.getObjectByName(name) 通过物体name获取物体
    // gltf.scene.traverse(function(object){}) 递归遍历
    // mesh.matreial 物体的材质
    // mesh.geometry 物体的结构
  })
```

- 将加载成功的GLTF文件添加到场景

```js
  scene.add(gltf.scene)
```

### 导出.glb模型文件（GLTFExporter）

```js
function exportGLTF(input) {
    var gltfExporter = new GLTFExporter();
    var options = {
        trs: false,
        onlyVisible: true,
        truncateDrawRange: true,
        binary: true, //是否导出.gltf的二进制格式.glb  控制导出.gltf还是.glb
        forceIndices: false,
        forcePowerOfTwoTextures: false
    };
    gltfExporter.parse(input, function (result) {
        if (result instanceof ArrayBuffer) {
            save(new Blob([result], {type: 'application/octet-stream'}), 'scene.glb');
        } else {
            var output = JSON.stringify(result, null, 2);
            save(new Blob([output], {type: 'text/plain'}), 'scene.gltf');
        }
    }, options);
};

var link = document.createElement('a');
link.style.display = 'none';
function save(blob, filename) {
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}
```