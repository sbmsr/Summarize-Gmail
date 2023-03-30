chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "summarize") {
    callGptApi(request.text)
      .then((summary) => {
        sendResponse({ summary });
      })
      .catch((error) => {
        console.error(error);
        sendResponse({
          summary: "An error occurred while summarizing the email.",
        });
      });
    return true; // Indicate that the response is sent asynchronously
  }
});

async function callGptApi(text) {
  const url = "https://api.openai.com/v1/chat/completions";

  const prompt = `Please summarize the following email. Don't make it too short! : \n${text}\nSummary: `;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer {OPENAI_TOKEN_GOES_HERE}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    }),
  });

  const data = await response.json();
  return data.choices[0].message.content.trim();
}
