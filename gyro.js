const gyroData = {
  alpha: 0,
  beta: 0,
  gamma: 0,
  dalpha: 0,
  dbeta: 0.1,
  dgamma: 0.1,
  dx: null,
  dy: null,
  dz: null
};

const state = {
  gyro: false,
  acell: false,
  mov: false,
  timer: 0,
}
 
const temp = {
    data: [],
};  
  class saveData {
    constructor(type,number,data,result){
      this.type = type;
      this.number = number;
      this.data = data || [];
      this.result = result;
    };
  };
  
function onClick() {
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
if ( location.protocol != "https:" ) {
  location.href = "https:" + window.location.href.substring( window.location.protocol.length );
  }
  function permission () {
      if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
          // (optional) Do something before API request prompt.
          DeviceMotionEvent.requestPermission()
              .then( response => {
              // (optional) Do something after API prompt dismissed.
              if ( response == "granted" ) {
                  window.addEventListener( "devicemotion", (e) => {
                      // do something for 'e' here.
                  })
              }
          })
              .catch( console.error )
      } else {
          alert( "DeviceMotionEvent is not defined" );
      }
  }
  const btn = document.getElementById( "request" );
  btn.addEventListener( "click", permission );
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