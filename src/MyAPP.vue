<template>
  <v-table fixed-header height="100%" class="main">
    <thead>
    <tr>
      <th class="text-left roomName text-subtitle-2">
        Room Name
      </th>
      <th class="text-left machine text-subtitle-2">
        Machine
      </th>
      <th class="text-left timeslots text-subtitle-2">
        Timeslot
      </th>
    </tr>
    </thead>
    <tbody>
    <tr
        v-for="room in rooms"
        :key="room.roomName"
    >
      <td class="font-weight-light">{{ room.roomName }}</td>
      <td class="font-weight-light">{{ room.machine }}</td>
<!--      <td class="font-weight-light">{{ room.timeslots.join(', ') }}</td>-->
      <td class="font-weight-light">{{ message }}</td>
    </tr>
    </tbody>
  </v-table>
</template>

<script setup>
import {ref} from "vue";

const rooms = []
const message = ref("");

for (let i=0; i<100; i++) {
  rooms.push({ roomName: `room${i}`, machine: `machine${i}`, timeslots: ['time1', 'time2', 'time3', 'time4'] });
}

(async () => {

  const injectedFunction = () => {
    console.log(`injected ${document.title}`);
    return document.title;
  };

  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  const response = await chrome.scripting.executeScript({
        target : {tabId : tab.id},
        func : injectedFunction,
  });

  console.log(`popup: ${response[0].result}`);
  message.value = response[0].result;

})();


</script>

<style scoped>
.main {
  width: 800px;
  height: 600px;
}
.roomName {
  width: 15%;
}
.machine {
  width: 15%;
}
.timeslots {
  width: 100%;
}
</style>
