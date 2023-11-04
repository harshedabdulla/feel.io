import {initializeApp } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js'
import { getDatabase, set, get, ref, child, push, onValue } from 'https://www.gstatic.com/firebasejs/10.3.0/firebase-database.js'
  

const firebaseConfig = {
    apiKey: "AIzaSyBLOrV8K_-MYavFlHf7HiYwUHmUQSt2YzA",
    databaseURL: " https://empath-866ce-default-rtdb.asia-southeast1.firebasedatabase.app",
    authDomain: "empath-866ce.firebaseapp.com",
    projectId: "empath-866ce",
    storageBucket: "empath-866ce.appspot.com",
    messagingSenderId: "688144290902",
    appId: "1:688144290902:web:2cb7523e3db636e6e717f7",
    measurementId: "G-BC0BZWP1VD"
};

const app = initializeApp(firebaseConfig);
const db  = getDatabase()
const dbRef = ref(getDatabase());

function sendtopopup(){
    

    get(child(dbRef, `data`)).then((snapshot) => {
		if (snapshot.exists()) {
            let data = snapshot.val()
            const latest = 6
            const objectKeys = Object.keys(data);
            data = objectKeys.slice(-latest).reduce((result, key) => {
            result[key] = data[key];
            return result;
            }, {});

            console.log(data);

            const allCategories = [];

            for (const key in data) {
              const category = data[key].mood;
              allCategories.push(category);
            }
            const categoryCounts = allCategories.reduce((acc, category) => {
                acc[category] = (acc[category] || 0) + 1;
                return acc;
              }, {});
              
              // Step 2: Convert the object into an array of objects for sorting
              const categoryArray = Object.entries(categoryCounts).map(([category, count]) => ({
                category,
                count,
              }));
              
              // Step 3: Sort the array based on the frequency in descending order
              categoryArray.sort((a, b) => b.count - a.count);
              
              // Step 4: Get the top 3 categories
              
            const top3Categories = categoryArray.slice(0, 3);
            console.log(top3Categories[0]);
            // Mood Over the Past 6 Hours Chart
const moodChartCanvas = document.getElementById("moodChart");

// Sample data for the three emotions in the "Current Mood" chart
const x = top3Categories[0] ? top3Categories[0].category : "";
const y = top3Categories[1] ? top3Categories[1].category : "";
const z = top3Categories[2] ? top3Categories[2].category : "";
const a = top3Categories[0] ? top3Categories[0].count : "";
const b = top3Categories[1] ? top3Categories[1].count : "";
const c = top3Categories[2] ? top3Categories[2].count : "";

const currentMoodData = {
    labels: [x, y, z],
    data: [a,b,c] // Adjust the values as needed
};

const currentMoodChartCanvas = document.getElementById("currentMoodChart");
new Chart(currentMoodChartCanvas.getContext("2d"), {
    type: 'pie',
    data: {
        labels: currentMoodData.labels,
        datasets: [{
            data: currentMoodData.data,
            backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(255, 205, 86, 0.8)'],
            borderWidth: 1
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        tooltip: {
            enabled: false // Disable tooltips
        }
    }
}); 
// Sample data for the top 3 emotions at each hour
const data1 = {
    labels: ["6 hours ago", "5 hours ago", "4 hours ago", "3 hours ago", "2 hours ago", "1 hour ago"],
    emotions: {
        emotion1: [70, 80, 85, 90, 75, 80], // Emotion 1 data1
        emotion2: [60, 90, 75, 80, 70, 75], // Emotion 2 data1
        emotion3: [50, 83, 65, 93, 60, 65], // Emotion 3 data1
    }
};

const chartData = {
    labels: data1.labels,
    datasets: [
        {
            label: 'Emotion 1',
            data: data1.emotions.emotion1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Emotion 2',
            data: data1.emotions.emotion2,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Emotion 3',
            data: data1.emotions.emotion3,
            backgroundColor: 'rgba(255, 205, 86, 0.2)',
            borderColor: 'rgba(255, 205, 86, 1)',
            borderWidth: 1
        }
    ]
};

const chartOptions = {
    scales: {
        y: {
            beginAtZero: false,
            min: 50, // Set the minimum y-axis value
            max: 100, // Set the maximum y-axis value
            stepSize: 10, // Set the step size
            ticks: {
                callback: function (value) {
                    return value.toString(); // Convert numerical values to strings
                }
            }
        }
    }
};

new Chart(moodChartCanvas.getContext("2d"), {
    type: 'line',
    data: chartData,
    options: chartOptions
});





}
})
}
//sendtopopup();

fetch('http://localhost:3000/lasthour', {
		method: 'POST',
		headers: {
            'Access-Control-Allow-Origin': '*',
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		  
		},
		body: {hours:6},
	  }).then((response) => { 
        console.log(response.json() ) 
    })








// Daily Mood Trends Chart
const dailyMoodTrendsCanvas = document.getElementById("dailyMoodTrendsChart");
new Chart(dailyMoodTrendsCanvas.getContext("2d"), {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Daily Mood Trends',
            data: [4, 3, 4, 5, 2, 4, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 5,
                stepSize: 1
            }
        }
    }
});

// Emotion History Chart (Pie Chart)
const emotionHistoryCanvas = document.getElementById("emotionHistoryChart");
new Chart(emotionHistoryCanvas.getContext("2d"), {
    type: 'pie',
    data: {
        labels: ['Happy', 'Sad', 'Neutral', 'Angry'],
        datasets: [{
            data: [25, 15, 30, 10],
            backgroundColor: ['rgba(75, 192, 192, 0.8)', 'rgba(255, 99, 132, 0.8)', 'rgba(255, 205, 86, 0.8)', 'rgba(54, 162, 235, 0.8)'],
            borderWidth: 1
        }]
    }
});

// Emotions as Emojis (Dummy Data Display)
const emojis = ['😊', '😢', '😐'];
emojis.forEach((emoji, index) => {
    const emojiElement = document.getElementById(`emoji${index + 1}`);
    emojiElement.textContent = emoji;
});