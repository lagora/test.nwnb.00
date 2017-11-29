// test-shader.js
const vertexShader = require('./shaders/test.vertex.glsl');
const fragmentShader = require('./shaders/test.fragment.glsl');
AFRAME.registerComponent('test-shader', {
schema: {color: {type: 'color'}},
/**
 * Creates a new THREE.ShaderMaterial using the two shaders defined
 * in vertex.glsl and fragment.glsl.
 */
init: function () {
  const data = this.data;
  this.material  = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0.0 },
      color: { value: new THREE.Color(data.color) }
    },
    vertexShader,
    fragmentShader
  });
  this.applyToMesh();
  this.el.addEventListener('model-loaded', () => this.applyToMesh());
},
/**
 * Update the ShaderMaterial when component data changes.
 */
update: function () {
  this.material.uniforms.color.value.set(this.data.color);
},
/**
 * Apply the material to the current entity.
 */
applyToMesh: function() {
  const mesh = this.el.getObject3D('mesh');
  if (mesh) {
    mesh.material = this.material;
  }
},
/**
 * On each frame, update the 'time' uniform in the shaders.
 */
tick: function (t) {
  this.material.uniforms.time.value = t / 1000;
}
})