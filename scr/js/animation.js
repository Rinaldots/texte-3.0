import * as THREE from 'three'


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );

const cubeLoader = new THREE.TextureLoader();
const geometry = new THREE.BoxGeometry( 4, 4, 4 );
const textureCube = cubeLoader.load("./scr/models/side cube.jpg")
textureCube.colorSpace = THREE.SRGBColorSpace;
const material = new THREE.MeshBasicMaterial({
  map: textureCube,
});
const cube = new THREE.Mesh( geometry, material );


const planeGeom = new THREE.PlaneGeometry( 50, 50 );
const back = new THREE.Mesh( planeGeom, new THREE.MeshBasicMaterial( {color: 0xc0c0c0,} ));




scene.add( cube );
scene.add(back);

camera.position.z = 10;
back.position.z = -10

function animate() {
	requestAnimationFrame( animate );
  
  cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );
  
  renderer.render( scene, camera );
 
}

animate();



