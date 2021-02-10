function Background(scene) {

  // create floor
  var planeGeometry = new THREE.PlaneGeometry(360, 360, 150, 150);

  // get the vertices
  var verticesLength = planeGeometry.vertices.length;

  // create an array to store new data associated to each vertex
  for (var i = 0; i < verticesLength; i++) {
    planeGeometry.vertices[i].y += + Math.random()*5;
    planeGeometry.vertices[i].z += Math.random()*1;
  }
   
  var mat = new THREE.MeshStandardMaterial({
    color: 0x179130,
    side: THREE.DoubleSide,
    flatShading: true,
    roughness: 1.0,
    wireframe: false,
	});

	var ground = new THREE.Mesh(planeGeometry, mat);
  ground.receiveShadow = true;
  ground.castShadow = false;
  ground.rotation.x = -Math.PI/2;
  scene.add(ground);

  // set up sphere container
  var sky = new THREE.Mesh(
    new THREE.SphereGeometry(180, 20, 20),
    new THREE.MeshStandardMaterial( {
      color: 0x007004,
      side: THREE.BackSide,
    } )
  )
  scene.add(sky)
  collidableObjects.push(sky)

  this.update = function(time) {


  }
}
