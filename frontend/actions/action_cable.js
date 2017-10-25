import * as types from './action-types';

Cable = require('actioncable')

export function connectWebSoket() {
  var cable = ActionCable.createConsumer('wss://localhost:3000/cable')

  cable.subscriptions.create('RoomChannel', {
    connected() {
      console.log("CONNECTED")
    }
  });
}


