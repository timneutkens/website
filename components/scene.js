import React from 'react';
import * as THREE from 'three';
import OrbitControls from 'three-orbitcontrols';
import GLTFLoader from 'three-gltf-loader';

class Scene extends React.PureComponent {
  constructor(props) {
    super(props);

    this.init = this.init.bind(this);
    this.updateElement = this.updateElement.bind(this);
    this.renderElement = this.renderElement.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.init();
    window.addEventListener('resize', this.handleResize);
  }

  init() {
    // SCENE
    this.container = document.querySelector('#scene');
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color('black');
    //Mixers
    this.mixers = [];
    //CLOCK
    this.clock = new THREE.Clock();

    //CAMERA
    this.createCamera();
    //CONTROLS
    this.createControls();
    //LIGHT
    this.createLights();
    //RENDERER
    this.createRenderer();

    //MODELS
    this.loadModels();

    this.renderer.setAnimationLoop(() => {
      this.updateElement();
      this.renderElement();
    });
  }

  createCamera() {
    const fov = 55;
    const aspect = this.container.clientWidth / this.container.clientHeight;
    const near = 0.1;
    const far = 500;
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    this.camera.position.set(5.7, 1.5, 300);
  }

  createControls() {
    this.controls = new OrbitControls(this.camera, this.container);
  }

  createLights() {
    const ambientLight = new THREE.HemisphereLight(
      0xffffff, // bright sky color
      0x202020, // dim ground color
      5 // intensity
    );

    const mainLight = new THREE.DirectionalLight(0xffffff, 5);
    mainLight.position.set(10, 10, 10);

    this.scene.add(ambientLight, mainLight);
  }

  loadModels() {
    const loader = new GLTFLoader();

    const onLoad = (gltf, position) => {
      const model = gltf.scene.children[0];
      model.position.copy(position);

      const animation = gltf.animations[0];

      const mixer = new THREE.AnimationMixer(model);
      this.mixers.push(mixer);

      const action = mixer.clipAction(animation);
      action.play();

      this.scene.add(model);
    };

    const onProgress = () => {};

    const onError = errorMessage => {
      console.log(errorMessage);
    };

    const parrotPosition = new THREE.Vector3(0, 0, 2.5);
    loader.load(
      'static/models/Parrot.glb',
      gltf => onLoad(gltf, parrotPosition),
      onProgress,
      onError
    );

    const flamingoPosition = new THREE.Vector3(105, 0, -80);
    loader.load(
      'static/models/Flamingo.glb',
      gltf => onLoad(gltf, flamingoPosition),
      onProgress,
      onError
    );

    const storkPosition = new THREE.Vector3(-80, 25, 80);
    loader.load(
      'static/models/Stork.glb',
      gltf => onLoad(gltf, storkPosition),
      onProgress,
      onError
    );
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });

    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.gammaFactor = 2.2;
    this.renderer.gammaOutput = true;
    this.renderer.physicallyCorrectLights = true;

    this.container.appendChild(this.renderer.domElement);
  }

  updateElement() {
    const delta = this.clock.getDelta();

    this.mixers.forEach(mixer => {
      mixer.update(delta);
    });
  }

  renderElement() {
    this.renderer.render(this.scene, this.camera);
  }

  handleResize() {
    this.camera.aspect =
      this.container.clientWidth / this.container.clientHeight;

    this.camera.updateProjectionMatrix();

    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );
  }

  render() {
    return (
      <section id="scene" className="scene-wrapper">
        <style jsx>{`
          .scene-wrapper {
            position: absolute;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </section>
    );
  }
}

export default Scene;
