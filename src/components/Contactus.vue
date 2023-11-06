<template>
  <div>
    <form id="contactForm" @submit="submitForm" class="contact-form">
      <input
        type="text"
        v-model="name"
        placeholder="Name"
        required
        class="input-field"
      />
      <input
        type="email"
        v-model="emailid"
        placeholder="Email"
        required
        class="input-field"
      />
      <textarea
        v-model="msgContent"
        placeholder="Message"
        required
        class="input-field"
      ></textarea>
      <input
        type="text"
        v-model="img"
        placeholder="Image URL"
        class="input-field"
      />
      <button type="submit" class="submit-button">Submit</button>
    </form>
  </div>
</template>





  
<script setup>
import { ref, onMounted, onErrorCaptured } from "vue";
import {
  collection,
  query,
  getDocs,
  onSnapshot,
  getFirestore,
} from "firebase/firestore";
import { db } from "/my-vue-project/firebase/config"; // Adjust the import path as needed

const temperatureData = ref([]);

const fetchTemperatureData = async () => {
  const temperatureCollection = collection(db, "Locations");
  const temperatureQuery = query(temperatureCollection);

  try {
    const querySnapshot = await getDocs(temperatureQuery);
    const data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });

    temperatureData.value = data;

    console.log(temperatureData, "temperatureData");
  } catch (error) {
    console.error("Error fetching temperature data:", error);
  }
};

onMounted(() => {
  fetchTemperatureData();

  // Set up a listener for real-time updates
  const firestore = getFirestore();
  const temperatureCollection = collection(firestore, "locations");
  onSnapshot(temperatureCollection, (snapshot) => {
    console.log("Real-time update received...");
    const data = [];
    snapshot.forEach((doc) => {
      data.push({
        location: doc.data().name,
        temperature: doc.data().temperature,
      });
    });
    temperatureData.value = data;
  });
});

// Error handling
onErrorCaptured((error) => {
  console.error("Vue error captured:", error);
});
</script>












<style scoped>
.contact-form {
  max-width: 400px;

  margin: 90px auto;
  padding: 20px;
  background-color: #8e8484;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-in-out;
}

.input-field {
  width: 90%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  transition: border-color 0.3s ease-in-out;
}

.input-field:focus {
  border-color: #007bff;
}

textarea.input-field {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.submit-button:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
