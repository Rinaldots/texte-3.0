const gyroData = {
  alpha: 0,
  beta: 0,
  gamma: 0,
  dalpha: 0,
  dbeta: 0.1,
  dgamma: 0.1,
};
  
function IniciarData() {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission()
      .then(permissionState => {
        if (permissionState === 'granted') {
          window.addEventListener('deviceorientation', gyro);
        }
      })
      .catch(console.error);
  } else {
    window.addEventListener('deviceorientation', gyro);
  }
  
}

//obtem dados do giroscopio e salva no objeto
function gyro(event) {
  gyroData.alpha = event.alpha;
  gyroData.beta = event.beta;
  gyroData.gamma = event.gamma;
  document.getElementById('gyroAlpha').textContent = gyroData.alpha.toFixed(3);
  document.getElementById('gyroBeta').textContent = gyroData.beta.toFixed(3);
  document.getElementById('gyroGamma').textContent = gyroData.gamma.toFixed(3);
  
}

function acell(event) {
  gyroData.dx = event.acceleration.x;
  gyroData.dy = event.acceleration.y;
  gyroData.dz = event.acceleration.z;
  
  gyroData.dalpha = event.rotationRate.alpha;
  gyroData.dbeta = event.rotationRate.beta;
  gyroData.dgamma = event.rotationRate.gamma;
}

