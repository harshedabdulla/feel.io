const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

const happyButton = document.getElementById("happy-button");
const goodButton = document.getElementById("good-button");
const nothingButton = document.getElementById("nothing-button");
const averageButton = document.getElementById("average-button");
const lowButton = document.getElementById("low-button");

const apiKey = ""; // Add your OpenAI API key

let currentStory = ""; // Initialize the story

happyButton.addEventListener("click", () => {
  sendMessage("happy");
});

goodButton.addEventListener("click", () => {
  sendMessage("good");
});

nothingButton.addEventListener("click", () => {
  sendMessage("nothing");
});

averageButton.addEventListener("click", () => {
  sendMessage("average");
});

lowButton.addEventListener("click", () => {
  sendMessage("low");
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const message = input.value;
  sendMessage(message);
  input.value = "";
});

function sendMessage(mood) {
  const prompt = `You are embarking on a wonderful journey. As you travel, you feel ${mood}. `;
  // Append the current story with the new paragraph based on the selected mood.
  currentStory += `${prompt} `;
  messages.innerHTML += `<div class="message user-message">
    <img src="./woman.png" alt="woman"> <span>${prompt}</span>
  </div>`;

  // Use axios library to make a POST request to the OpenAI API
  axios
    .post(
      "https://api.openai.com/v1/completions",
      {
        prompt: currentStory,
        model: "text-davinci-003",
        temperature: 0.7,
        max_tokens: 100,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    .then((response) => {
      const chatbotResponse = response.data.choices[0].text;
      displayChatbotResponse(chatbotResponse);
    })
    .catch((error) => {
      console.error("Error:", error);
      displayChatbotResponse("Sorry, something went wrong.");
    });
}

function displayChatbotResponse(chatbotResponse) {
  currentStory += chatbotResponse; // Append the chatbot's response to the story.
  messages.innerHTML += `<div class="message bot-message">
    <img src="./philosopher.png" alt="bot icon"> <span>${chatbotResponse}</span>
  </div>`;
}
