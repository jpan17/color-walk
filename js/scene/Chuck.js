function Chuck(scene, x, y, src) {
    this.time = 0;
    var object = new THREE.Object3D();
    this.object = object;

    let loader = new THREE.STLLoader();
    loader.load('objects/Chuck.stl', function (geometry) {
        let material = new THREE.MeshBasicMaterial(
            { color: 0x30ff4f,
                opacity: 0.5
            });
        chicken = new THREE.Mesh(geometry, material);
        this.chicken = chicken;
        chicken.positon.x = x;
        chicken.position.y = 90;
        chicken.position.z = y;
        chicken.castShadow = true;
        chicken.rotation.set(0,0,0);
        chicken.scale.set(90,90,90);
        object.add(chicken);
    });
    
    this.src = src;
    
    object.position.x = x;
    object.position.y = 1.5;
    object.position.z = y;
    collidableObjects.push(this.object);
    scene.add(object);

    this.update = function(delta) {
      this.time += delta;
      this.object.position.y = Math.sin(this.time * Math.PI) * 0.5 + 1.5;
    }
  }