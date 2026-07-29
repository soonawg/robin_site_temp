import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const canvas = document.getElementById('robin-hero-3d');

if (canvas) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 0.3, 9.7);
  const system = new THREE.Group();
  system.rotation.set(-0.12, -0.42, 0.03);
  scene.add(system);

  const navy = new THREE.MeshStandardMaterial({ color: 0x092b45, metalness: 0.76, roughness: 0.27 });
  const cobalt = new THREE.MeshStandardMaterial({ color: 0x1261c8, metalness: 0.62, roughness: 0.24 });
  const lightMetal = new THREE.MeshStandardMaterial({ color: 0x8aa4af, metalness: 0.84, roughness: 0.22 });
  const glow = new THREE.MeshStandardMaterial({ color: 0x4ee7ff, emissive: 0x087da2, emissiveIntensity: 1.9, metalness: 0.25, roughness: 0.19 });
  scene.add(new THREE.HemisphereLight(0xf7fdff, 0x59717a, 2.8));
  const key = new THREE.DirectionalLight(0xffffff, 3.7); key.position.set(4, 7, 8); scene.add(key);
  const rim = new THREE.PointLight(0x16b6e5, 22, 16, 2); rim.position.set(-3, 1.5, 3); scene.add(rim);

  const core = new THREE.Group();
  const housing = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 1.08, 1.18, 12), navy); housing.rotation.x = Math.PI / 2; core.add(housing);
  const hub = new THREE.Mesh(new THREE.TorusGeometry(0.48, 0.105, 12, 32), glow); hub.rotation.x = Math.PI / 2; hub.position.z = 0.62; core.add(hub);
  const hubInside = new THREE.Mesh(new THREE.CircleGeometry(0.37, 32), cobalt); hubInside.position.z = 0.635; core.add(hubInside);
  system.add(core);

  function rodBetween(start, end, radius, material) {
    const direction = new THREE.Vector3().subVectors(end, start);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.08, direction.length(), 10), material);
    mesh.position.copy(start).add(end).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.normalize());
    system.add(mesh);
  }
  function joint(point, scale = 1) {
    const shell = new THREE.Mesh(new THREE.SphereGeometry(0.26 * scale, 18, 14), lightMetal); shell.position.copy(point); system.add(shell);
    const cap = new THREE.Mesh(new THREE.SphereGeometry(0.145 * scale, 18, 14), navy); cap.position.copy(point).add(new THREE.Vector3(0, 0, 0.2)); system.add(cap);
  }
  function arm(points, accent) {
    points.forEach((point, index) => {
      if (index < points.length - 1) rodBetween(point, points[index + 1], index === 0 ? 0.25 : 0.2, index === 1 ? accent : navy);
      joint(point, index === points.length - 1 ? 0.8 : 1);
    });
    const wrist = new THREE.Group(); wrist.position.copy(points.at(-1));
    wrist.add(new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.24, 0.38), navy));
    [-1, 1].forEach((side) => { const finger = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.42, 0.12), accent); finger.position.set(side * 0.22, 0.27, 0); finger.rotation.z = side * -0.26; wrist.add(finger); });
    system.add(wrist);
  }
  arm([new THREE.Vector3(-0.76, -0.2, 0), new THREE.Vector3(-1.55, 0.55, -0.08), new THREE.Vector3(-2.35, 1.22, 0.18), new THREE.Vector3(-2.9, 2.05, 0.02)], cobalt);
  arm([new THREE.Vector3(0.76, -0.2, 0), new THREE.Vector3(1.52, 0.38, 0.08), new THREE.Vector3(2.24, 1.32, -0.15), new THREE.Vector3(2.74, 2.05, 0.14)], glow);
  const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(1.35, 1.6, 0.25, 48), lightMetal); pedestal.position.y = -1.22; system.add(pedestal);
  const base = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 1.75, 0.4, 48), navy); base.position.y = -1.5; system.add(base);

  const data = new THREE.Group();
  [[new THREE.Vector3(-4.2, 1.3, -0.5), new THREE.Vector3(-2.9, 1.3, -0.3), new THREE.Vector3(-1.3, 0.18, 0.1)], [new THREE.Vector3(-4.1, 0.15, -0.55), new THREE.Vector3(-2.5, 0.15, -0.2), new THREE.Vector3(-1.0, -0.15, 0.1)], [new THREE.Vector3(4.05, 1.45, -0.65), new THREE.Vector3(3.08, 1.45, -0.42), new THREE.Vector3(1.25, 0.18, 0.05)]].forEach((points, index) => {
    const curve = new THREE.CatmullRomCurve3(points);
    data.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(34)), new THREE.LineBasicMaterial({ color: index === 1 ? 0x1261c8 : 0x25cce8, transparent: true, opacity: 0.56 })));
    const dot = new THREE.Mesh(new THREE.SphereGeometry(0.085, 12, 10), glow); dot.userData = { curve, offset: index / 3 }; data.add(dot);
  });
  system.add(data);
  const plane = new THREE.Mesh(new THREE.CircleGeometry(3.5, 56), new THREE.MeshBasicMaterial({ color: 0x8ed6df, transparent: true, opacity: 0.13, side: THREE.DoubleSide })); plane.rotation.x = -Math.PI / 2; plane.position.y = -1.72; system.add(plane);

  let pointerX = 0, pointerY = 0, pulse = 0;
  canvas.addEventListener('pointermove', (event) => { const rect = canvas.getBoundingClientRect(); pointerX = ((event.clientX - rect.left) / rect.width - 0.5) * 2; pointerY = ((event.clientY - rect.top) / rect.height - 0.5) * 2; });
  canvas.addEventListener('pointerleave', () => { pointerX = 0; pointerY = 0; });
  canvas.addEventListener('click', () => { pulse = 1; });
  function resize() { const { width, height } = canvas.getBoundingClientRect(); renderer.setSize(width, height, false); camera.aspect = width / height; camera.updateProjectionMatrix(); }
  window.addEventListener('resize', resize); resize();
  const clock = new THREE.Clock();
  function render() {
    const elapsed = clock.getElapsedTime();
    if (!reducedMotion) {
      system.rotation.y += ((-0.42 + pointerX * 0.28 + Math.sin(elapsed * 0.28) * 0.08) - system.rotation.y) * 0.035;
      system.rotation.x += ((-0.12 - pointerY * 0.12) - system.rotation.x) * 0.035;
      data.children.forEach((child) => { if (child.userData.curve) child.position.copy(child.userData.curve.getPointAt((elapsed * 0.18 + child.userData.offset) % 1)); });
      core.rotation.z = Math.sin(elapsed * 0.72) * 0.035; pulse *= 0.91; system.scale.setScalar(1 + pulse * 0.055);
    }
    renderer.render(scene, camera); requestAnimationFrame(render);
  }
  render();
}
