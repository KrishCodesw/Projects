const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Create a box geometry and a basic material
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set camera position
camera.position.z = 5;

// Get the canvas element correctly
const canvas = document.getElementById("draw"); // Remove the "#" here
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Handle window resizing
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
});

function animate() {
    requestAnimationFrame(animate); // You only need this once
    cube.rotation.x += 0.01; // Rotate cube
    cube.rotation.y += 0.01; // Rotate cube
    renderer.render(scene, camera); // Render the scene
}

animate(); // Start the animation
