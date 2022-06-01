### 开发环境--本地静态服务器

注意本地预览需通过**nodejs**搭建一个本地静态服务器。推荐通过npm命令安装`live-server`创建一个本地静态服务器

### 编译器vscode

如果你使用的代码编辑器是**vscode**，可以直接搜索**live**关键词选择`live-server`模块安装即可，这样预览案例更为方便，视频讲解的时候通常会这样直接打开案例。

### 依赖插件

- three
```
npm install three
yarn add three
```
- OrbitControls 创建控件对象  控件对象可以监听鼠标的变化，改变相机对象的属性
    - 旋转：拖动鼠标左键
    - 缩放：滚动鼠标滚轮
    - 平移：拖动鼠标右键
```
npm i @three-ts/orbit-controls
yarn add @three-ts/orbit-controls
```