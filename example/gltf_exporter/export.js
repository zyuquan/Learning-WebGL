import { GLTFExporter } from "../../node_modules/three/examples/jsm/exporters/GLTFExporter.js";

function exportGLTF(model) {
    var exporter = new GLTFExporter();
    var options = {
        trs: false,
        onlyVisible: true,
        truncateDrawRange: true,
        binary: true, //是否导出.gltf的二进制格式.glb  控制导出.gltf还是.glb
        forceIndices: false,
        forcePowerOfTwoTextures: false
    };
    exporter.parse(model,
        function(gltf) {
            if(gltf instanceof ArrayBuffer) {
                save(new Blob([gltf], {type: 'application/octet-stream'}), "shanghaiwaitan.glb")
            } else {
                var output = JSON.stringify(gltf, null, 2);
                save(new Blob([output], {type: 'text/plain'}), 'shanghaiwaitan.gltf');
            }
        },
        function(error) {
            console.log(error)
        },
        options
    )
}

function save(blob, names) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.download = names;
    a.href = url;
    a.click();
}

export { exportGLTF }