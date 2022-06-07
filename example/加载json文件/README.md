### shp转GeoJSON

https://mapshaper.org/  一个在线转格式平台

github代码地址：https://github.com/mbloch/mapshaper

文章提到过：https://blog.csdn.net/gisboygogogo/article/details/74056563


### threejs加载解析shp的库shp.js

github：https://github.com/kig/shp.js/

链接：https://www.bram.us/2012/07/30/shp-js-javascript-shapefile-parser/

### 多边形平面（ShapeGeometry）

在已知多边形平面顶点坐标的情况下可以通过**ShapeGeometry**创建一个多边形平面对象

```js
  var shape = new THREE.Shape([
    new THREE.Vector2(0, 0),
    new THREE.Vector2(2, 0),
    new THREE.Vector2(2, 2),
    new THREE.Vector2(0, 2)
  ]);
  var geometry = new THREE.ShapeGeometry(shape);
```

### GeoJSON数据加载

- 确定中心点经纬度或坐标（用于设置相机坐标等）
- 使用**FileLoader**加载器加载
```js
   // 加载器
  var loader = new THREE.FileLoader();
  // 加载文件类型
  loader.setResponseType("json");
  // 加载文件
  loader.load(name, function(data){
    // data
  })
```

### 工具

geojson.io：http://geojson.io/#map=2/20.0/0.0

百度地图坐标系统：https://api.map.baidu.com/lbsapi/getpoint/index.html