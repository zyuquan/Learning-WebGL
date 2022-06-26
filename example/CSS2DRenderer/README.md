### CSS2DRenderer或CSS3DRenderer

##### CSS2DObject或CSS3DObject
- 获取HTML元素
- 实例化CSS2DObject
``` js
    var label = new CSS2DObject(element);
    // label中心点在element元素中心，设置label位置
    label.position.copy(mesh.position);
    scene.add(label);
```

##### CSS2DRenderer或CSS3DRenderer
``` js
    // 创建一个CSS2渲染器CSS2DRenderer
    var cssRenderer = new CSS2DRenderer();
    cssRenderer.setSize(width, height);
    cssRenderer.domElement.style.position = "absolute";
    // 避免renderer.domElement影响HTMl标签定位，设置top为0px，left为0
    cssRenderer.domElement.style.top = "0";
    cssRenderer.domElement.style.left = "0";
    //设置.pointerEvents=none，以免模型标签HTML元素遮挡鼠标选择场景模型
    cssRenderer.domElement.style.pointerEvents = "none";

    //渲染场景中的HTMl元素包装成的CSS2模型对象
    cssRenderer.render(scene, camera);
    
    document.body.appendChild(cssRenderer.domElement);
```