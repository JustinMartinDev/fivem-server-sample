<script setup lang="ts">
  import { fetchNui } from '../utils/fetchNui';
  import { ref } from 'vue'

  // state
  const clientData = ref(undefined)

  function handleGetClientData(){
    fetchNui("getClientData")
      .then((retData) => {
        console.log("Got return data from client scripts:");
        console.dir(retData);
        clientData.value = retData;
      })
      .catch((e) => {
        console.error("Setting mock data due to error", e);
        clientData.value = { x: 500, y: 300, z: 200 };
      });
  };

</script>

<template>
  <div className="nui-wrapper">
    <div className="popup-thing">
      <div>
        <h1>This is the NUI Popup!</h1>
        <p>Exit with the escape key</p>
        <button @:click="handleGetClientData">Get Client Data</button>
        <div v-if="clientData !== undefined">
          <h5>Returned Data:</h5>
          <pre>
            <code>{{JSON.stringify(clientData, null)}}</code>
          </pre>
        </div>
      </div>
    </div>
  </div>
</template>