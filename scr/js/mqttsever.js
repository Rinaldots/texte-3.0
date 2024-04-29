const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Authentication
  clientId: 'emqx_test',
  username: 'emqx_test',
  password: 'emqx_test',
}
const client = mqtt.connect('ws://broker.emqx.io:8083/mqtt');
   
    client.on('connect', () => {
      console.log('Connected')
      client.publish('cluster/messages/node7', 'Conectado ao broker!');
    })
    client.on('error', (err) => {
      console.log('Connection error: ', err)
      client.end()
    })
    client.on('reconnect', () => {
      console.log('Reconnecting...')
    });

  
    function sendData(){
      client.publish('cluster/messages/node7', gyroData.alpha.toFixed(3));
    }

    setInterval(sendData, 1000);