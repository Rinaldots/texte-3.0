import * as THREE from 'three'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 4, 4, 4 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 10;




function animate() {
	requestAnimationFrame( animate );
     
    cube.rotation.x = (gyroData.beta*0,0174533)
	cube.rotation.y = (gyroData.alpha*0,0174533);
	cube.rotation.z = (gyroData.gamma*0,0174533);
	

	renderer.render( scene, camera );
}

animate();
