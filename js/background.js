$(document).ready(function () {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background') });

    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0xFF5149 });
    var cube = new THREE.Mesh(geometry, material);
    cube.scale.x = 1.4;
    scene.add(cube);

    camera.position.z = 1;

    var animate = function () {
        requestAnimationFrame(animate);

        cube.rotation.x += 0.001;
        cube.rotation.y += 0.001;

        renderer.render(scene, camera);
    };

    animate();
    function onWindowResize() {
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;

        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }

    $(window).resize(onWindowResize);
    onWindowResize();
});
