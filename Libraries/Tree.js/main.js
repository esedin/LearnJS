var scene = new THREE.Scene();
var mesh;

camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000 );
camera.zoom = 5;
camera.updateProjectionMatrix();

var renderer = new THREE.WebGLRenderer({alpha: true});
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

  var length  = randBetween(1, 6), 
      width   = randBetween(1, 8);

  var shape = new THREE.Shape();
  shape.moveTo( randBetween(0,1.5),randBetween(0,1.5) );
  shape.lineTo( randBetween(0,1.5), width );
  shape.lineTo( length, width );
  shape.lineTo( length, randBetween(0,1.5) );
  shape.lineTo( randBetween(0,1.5), randBetween(0,1.5) );

  var extrudeSettings = {
      steps: 2,
      amount: randBetween(3,6),
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: randBetween(1,3),
      bevelSegments: 1.5
  };

var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );

// assign a texture to the sugar particle using TextureLoader
var textureLoader = new THREE.TextureLoader();
// to fight any cross-origin issues with images
textureLoader.crossOrigin = true;
textureLoader.load('https://s3-us-west-2.amazonaws.com/s.cdpn.io/160607/sugar-texture-4.png', function(texture) {
  // repeat the pattern
  texture.wrapS = texture.wrapT = THREE.MirroredRepeatWrapping;
  
  // zoom in on the pattern so it's not so small when it repeats
  texture.repeat.set(0.1,0.1);
  
  // assign the texture via the MeshBasicMaterial map property
  var material = new THREE.MeshBasicMaterial({
    map: texture,
    // apply some other properties to increase transparency
    transparent: true,
    premultipliedAlpha: true,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });
  
  mesh = new THREE.Mesh(geometry, material) ;
  mesh.geometry.center();
  scene.add(mesh);

  render();
}); 

function render() {
	requestAnimationFrame( render );
    // add a rotating animation along the x and y axis
    mesh.rotation.x += 0.03;
    mesh.rotation.y += 0.03;
	renderer.render( scene, camera );
}

function randBetween(min, max) {
  return (Math.random() * (max - min)) + min;
}