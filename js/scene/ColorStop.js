function ColorStop (scene, x, y, src) {

    var numStars = 10;
    this.time = Math.random() * 0.5 - 1;
    var radius = 5;
    var rotationSpeed = 0.05;
    var color = 0x30ff4f;

    var object = new THREE.Object3D();
    this.object = object;

    var sphereGeometry = new THREE.SphereGeometry(radius, numStars, numStars);
    var sphereMaterial = new THREE.MeshBasicMaterial( {
        color: color,
        flatShading: true,
        transparent: true,
        opacity: 0.4
    })

    var sphereGridGeometry = new THREE.SphereGeometry(radius + 0.25, numStars, numStars);
    var sphereGridMaterial = new THREE.MeshBasicMaterial( {
        color: color,
        wireframe: true
    })

    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
    sphere.receiveShadow = false;
    // sphere.position.set(x, radius + 2, y)

    var sphereGrid = new THREE.Mesh(sphereGridGeometry, sphereGridMaterial)
    sphereGrid.receiveShadow = false;
    // sphereGrid.position.set(x, radius + 2, y)

    object.add(sphere)
    object.add(sphereGrid)

    this.sphere = sphere;
    this.sphereGrid = sphereGrid;
    this.src = src;
    collidableObjects.push(this.sphere)

    object.position.x = x;
    object.position.y = radius + 2;
    object.position.z = y;

    scene.add(object);

  this.update = function(delta) {
      this.time += delta;
      this.object.position.y = Math.sin(this.time * Math.PI) * 0.5 + 7;
  }

}