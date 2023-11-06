  <template>
  <div>
    <header>
      <div class="headerprt1">
        <img src="web-logo.png" alt="" />
        <h1>Pakistan Meteorological Department</h1>
      </div>
      <div class="headerprt2">
        <img src="pmdu.png" alt="" />
      </div>
    </header>
    <div class="links-header">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Events</li>
        <li>Our networks</li>
        <li>Alerts</li>

        <router-link to="/login">
          <button>Contact Us</button>
        </router-link>
      </ul>
    </div>
    <section class="main">
      <div class="Mpart1">
        <h2>Current weather</h2>
        <table>
          <tr>
            <th>Islamabad</th>
            <th>Gilgit</th>
            <th>Karachi</th>
            <th>Lahore</th>
            <th>Multan</th>
            <th>Peshawar</th>
            <th>Quetta</th>
          </tr>
          <tr>
            <td
              v-for="(item, index) in temperatureData"
              :key="index"
              class="cell"
            >
              {{ item.temperature }}°C
            </td>
          </tr>

          <tr>
            <td class="cell"><img src="night-clear.png" alt="Image 17" /></td>
            <td class="cell"><img src="bad-weather.png" alt="Image 18" /></td>
            <td class="cell"><img src="night-clear.png" alt="Image 19" /></td>
            <td class="cell"><img src="sunny.webp" alt="Image 20" /></td>
            <td class="cell"><img src="night-clear.png" alt="Image 21" /></td>
            <td class="cell"><img src="sunny.webp" alt="Image 22" /></td>
            <td class="cell"><img src="sunny.webp" alt="Image 23" /></td>
          </tr>
        </table>
      </div>
      <div class="Mpart2">
        <h2>Latest Updates</h2>

        <div class="container-loaded">
          <ul>
            <li class="show">Dengue alert</li>
            <li class="show">Seasonal agro climate-outlook</li>
            <li class="show">Monthly outlook december(2023)</li>
            <li class="show">Rain/wind/thunderstrom predictions</li>
            <li class="show">Engineering CAS</li>
            <li class="show">Rain/wind/thunderstrom predictions</li>
          </ul>
        </div>
      </div>
    </section>
    <div class="video-forcast">
      <h2>Video weather Forcast</h2>
      <div class="video-container">
        <a href=""
          ><p>Weather for tourists</p>
          <img src="touristweather.jpg" alt=""
        /></a>
        <a href="">
          <p>weather predictions</p>
          <img src="weatherpredictions.jpg" alt=""
        /></a>
        <a href=""
          ><p>Monthly weather</p>
          <img src="monthlyweather.jpg" alt=""
        /></a>
        <a href=""
          ><p>Farmers weather</p>
          <img src="farmersweather.jpg" alt=""
        /></a>
        <a href=""
          ><p>tourists weather</p>
          <img src="touristweather.jpg" alt=""
        /></a>
      </div>
    </div>

    <div class="services">
      <h2>Services</h2>
      <div class="video-container">
        <a href=""
          ><p>Weather forcasting center</p>
          <img src="WFC.jpg" alt=""
        /></a>
        <a href="">
          <p>Research and development</p>
          <img src="RESEARCH AND DEV.jpg" alt=""
        /></a>
        <a href=""
          ><p>Climate data processing center</p>
          <img src="CLDC.jpg" alt=""
        /></a>
        <a href=""
          ><p>Flood forcasting division</p>

          <img src="FFD.jpg" alt=""
        /></a>
        <a href=""
          ><p>National Agromet center</p>
          <img src="touristweather.jpg" alt=""
        /></a>
      </div>
    </div>

    <div class="container-wrapper">
      <div class="container">
        <img src="event1.jpg" alt="Image 1" />
        <p>Regional Training workshop</p>
        <button>View all</button>
      </div>
      <div class="container">
        <img src="event2.jpg" alt="Image 2" />
        <p>Inauguration cermony of IT and media unit.</p>
        <button>View all</button>
      </div>
      <div class="container">
        <img src="event3.png" alt="Image 3" />
        <p>Tropical cyclon warning center.</p>
        <button>View all</button>
      </div>
    </div>
    <footer>
      <div class="footer-section prt1">
        <h3>About PMD</h3>
        <ul>
          <li>About us</li>
          <li>Tenders</li>
          <li>Address book</li>
          <li>Our Leaders</li>
          <li>Synoptic data</li>
          <li>PMD mail</li>
          <li>Disclaimer</li>
        </ul>
      </div>
      <div class="footer-section prt2">
        <h3>Admin</h3>
        <ul>
          <li>Seniority list</li>
          <li>Pension cell</li>
          <li>Circulars</li>
          <li>Official forms</li>
          <li>Synoptic data</li>
          <li>PMD mail</li>
          <li>Disclaimer</li>
        </ul>
      </div>
      <div class="footer-section prt3">
        <h3>Contact us</h3>
        <ul>
          <li>Headquarter office</li>
          <li>+92 5812343-9</li>
          <li>Address book</li>
          <li>Our Leaders</li>
          <li>Synoptic data</li>
          <li>PMD mail</li>
          <li>Disclaimer</li>
        </ul>
      </div>
      <div class="footer-section prt4">
        <h3>Social Media</h3>
        <ul>
          <li>Twitter</li>
          <li>Youtube</li>
          <li>Instagram</li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<script setup>
import { ref, onMounted, onErrorCaptured } from "vue";
import {
  collection,
  query,
  getDocs,
  onSnapshot,
  getFirestore, // Import getFirestore from Firebase
} from "firebase/firestore";
import { db } from "../../my-vue-project/firebase/config.js"; // Adjust the relative path as needed

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
  const firestore = getFirestore(); // Use getFirestore to get the Firestore instance
  const temperatureCollection = collection(firestore, "locations");
  onSnapshot(temperatureCollection, (snapshot) => {
    console.log("Real-time update received..."); // Add this line
    // Handle snapshot changes and update temperatureData.value
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}

header {
  width: 100%;
  display: flex;
  height: 20vh;

  background: #f7f7f7;
}

.headerprt1 {
  width: 50%;
  height: 20vh;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: green;
}

.headerprt1 img {
  width: 110px;
  height: 90px;
}
.headerprt2 {
  width: 50%;
  display: flex;
  justify-content: end;
  align-items: center;
}
.headerprt2 img {
  width: 220px;
  height: 100px;
}

/* header links */

.links-header {
  display: flex;
  width: 100%;
  list-style: none;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 17px;
  height: 13vh;
  background-color: #0088cc;
}
.links-header ul {
  display: flex;
  width: 100%;
  list-style: none;
  gap: 40px;
  color: white;
  display: flex;
  font-weight: bolder;
  justify-content: center;
  align-items: center;
}
.links-header li:hover {
  cursor: pointer;
  color: rgb(208, 114, 114);
}
.links-header button {
  width: 100px;
  height: 40px;
  cursor: pointer;
  border-radius: 3px;
  border: none;
  background-color: rgb(67, 190, 112);
}
.links-header button:hover {
  color: rgb(211, 193, 193);
  background-color: rgb(0, 110, 33);
}

/* Mazin section */
.main {
  width: 100%;
  height: 70vh;
  display: flex;
}
.Mpart1 {
  width: 65%;
}
.Mpart2 {
  width: 35%;
}
.Mpart2 h2 {
  margin: 30px;
  margin-left: 30px;
  font-style: italic;
  color: #132768;
}

.Mpart1 h2 {
  margin: 30px;
  font-style: italic;
  color: #132768;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
  background-color: rgb(197, 207, 197);
  height: 70px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}
td,
th:hover {
  color: rgb(40, 31, 166);
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.cell {
  text-align: center;
  height: 90px;
}

/* Mainpart2 */

.container-loaded ul {
  list-style-type: none;
  padding: 0;
}

.container-loaded li {
  padding: 10px;
  background-color: #f2f2f2;
  margin: 5px 0;
  list-style: none;
  transition: transform 0.3s ease;
}

.container-loaded li:hover {
  transform: translateX(10px);
  background-color: #0088cc;
  color: white;
}

/* video section */

.video-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  align-items: center; /* Center content vertically */
}

.video-container img {
  margin-top: 30px;
  width: 210px; /* Adjust the video player's width as needed */
  height: 180px; /* Adjust the video player's height as needed */
  border: 1px solid #ccc;
}

.paragraph-space {
  width: 100%; /* Full width */
  text-align: center; /* Center text horizontally */
  padding: 20px; /* Adjust the padding as needed */
}

.video-container p {
  margin-top: 30px;
  margin-left: 7px;
  color: rgb(27, 16, 88);
}
.video-forcast h2 {
  margin-left: 30px;
  font-style: italic;
  font-size: 30px;
  color: #132768;
  /* font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif; */
}
.services {
  margin-top: 30px;
}
.services h2 {
  margin-left: 30px;
  font-style: italic;
  font-size: 30px;
  color: #132768;
}

/* Container styles */
.container {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  padding: 20px;
  border: 1px solid #ccc;
  transition: transform 0.3s; /* Add zoom-in transition */
}

/* Increase container size on hover */
.container:hover {
  transform: scale(1.1);
}

/* Image styles */
.container img {
  max-width: 56%;
  height: auto;
}

/* Button styles */
.container button {
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

/* Paragraph styles */
.container p {
  margin-top: 10px;
  text-align: center;
}

/* Container wrapper */
.container-wrapper {
  display: flex;
  overflow-y: hidden;
  margin-top: 30px;
  justify-content: space-between;
  background: linear-gradient(
    90deg,
    #d7e2ea,
    #5b8dd0
  ); /* Gradient from light blue to light green */
}
footer {
  background: linear-gradient(90deg, #d7e2ea, #636686);
  color: #fff;
  padding: 40px 0;
  text-align: center;
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}

.footer-section {
  flex: 1;
  text-align: left;
  max-width: 250px;
  margin: 0 20px;
}

/* Heading styles */
.footer-section h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: #007bff;
  transition: color 0.3s;
}

/* List styles */
.footer-section ul {
  list-style-type: none;
  padding: 0;
}

/* List item styles */
.footer-section li {
  margin-bottom: 5px;
  transition: color 0.3s;
}

/* Link styles */
.footer-section a {
  color: #fff;
  text-decoration: none;
  transition: color 3.3s;
}

/* Hover effect on headings */
.footer-section h3:hover {
  color: #00ccff; /* Light blue on hover */
}

/* Hover effect on list items */
.footer-section li:hover {
  color: #00ccff; /* Light blue on hover */
}

/* Hover effect on links */
.footer-section a:hover {
  color: #00ccff; /* Light blue on hover */
}
.footer-section {
  cursor: pointer;
}


@media screen and (max-width:790px){
  .headerprt1 h1{
    display: none;
  }
  .links-header ul[data-v-288cad8b] {
    display: flex;
    width: 100%;
    list-style: none;
    gap: 20px;
    font-size: 9px;
    color: white;
    display: flex;
    font-weight: bolder;
    justify-content: center;
    align-items: center;
}
}

@media screen and (max-width:665px){
  .Mpart1[data-v-288cad8b] {
    width: 100%;
}
.main[data-v-288cad8b] {
    width: 100%;
    height: 70vh;
    flex-direction: column;
    display: flex;
}
}



@media screen and (max-width:340px){

  .Mpart2[data-v-288cad8b] {
    width: 100%;
}
 .links-header li{
  display: none;
 }
 .Mpart2 h2[data-v-288cad8b] {
    margin: 30px;
    margin-left: 30px;
    font-size: 15px;
    font-style: italic;
    color: #132768;
}
}

.container-wrapper[data-v-288cad8b] {
    display: flex;
    overflow-y: hidden;
    margin-top: 30px;
    flex-direction: column;
    justify-content: space-between;
    background: linear-gradient( 90deg, #d7e2ea, #5b8dd0 );
}
.container[data-v-288cad8b] {
    width: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding: 20px;
    border: 1px solid #ccc;
    transition: transform 0.3s;
}
@media screen and (max-width:622px){
  footer[data-v-288cad8b] {
   display: flex;
   flex-direction: column;

}
}
</style>

 

















