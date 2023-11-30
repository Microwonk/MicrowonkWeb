$(document).ready(function () {
    // Initialize Three.js scene
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('background') });

    // Create a cube
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({ color: 0xFF5149 });
    var cube = new THREE.Mesh(geometry, material);
    cube.scale.x = 1.4;
    scene.add(cube);

    // Position the camera
    camera.position.z = 1;

    // Render loop
    var animate = function () {
        requestAnimationFrame(animate);

        // Rotate the cube
        cube.rotation.x += 0.001;
        cube.rotation.y += 0.01;

        // Render the scene
        renderer.render(scene, camera);
    };

    // Start the animation
    animate();

    // Resize callback
    function onWindowResize() {
        var newWidth = window.innerWidth;
        var newHeight = window.innerHeight;

        // Update camera aspect ratio and renderer size
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    }

    // Attach the callback to the window resize event
    $(window).resize(onWindowResize);

    // Trigger initial resizing to set the correct size
    onWindowResize();
});
