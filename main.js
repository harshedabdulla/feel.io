// Mood Over the Past 6 Hours Chart
const moodChartCanvas = document.getElementById("moodChart");

// Sample data for the three emotions in the "Current Mood" chart
const currentMoodData = {
    labels: ["😐", "🧐", "😞"],
    data: [30, 40, 30] // Adjust the values as needed
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
const data = {
    labels: ["6 hours ago", "5 hours ago", "4 hours ago", "3 hours ago", "2 hours ago", "1 hour ago"],
    emotions: {
        emotion1: [70, 80, 85, 90, 75, 80], // Emotion 1 data
        emotion2: [60, 90, 75, 80, 70, 75], // Emotion 2 data
        emotion3: [50, 83, 65, 93, 60, 65], // Emotion 3 data
    }
};

const chartData = {
    labels: data.labels,
    datasets: [
        {
            label: 'Emotion 1',
            data: data.emotions.emotion1,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        },
        {
            label: 'Emotion 2',
            data: data.emotions.emotion2,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        },
        {
            label: 'Emotion 3',
            data: data.emotions.emotion3,
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