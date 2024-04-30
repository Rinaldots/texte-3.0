const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Authentication
  clientId: 'emqx_'+Math.random().toString(16).substring(2, 8),
  username: 'example-username',
  password: '123',

}
const client mqtt.connect('ws://192.168.1.100:8080/mqtt',options);
   
    client.on('connect', () => {
      console.log('Connected')
      client.publish('test', 'Conectado ao broker!');
    })
    client.on('error', (err) => {
      console.log('Connection error: ', err)
      client.end()
    })
    client.on('reconnect', () => {
      console.log('Reconnecting...')
    });

  
    function sendData(){
      client.publish('test', gyroData.alpha.toFixed(3));
    }

    setInterval(sendData, 10000);