function getEmailBody(emailElement) {
  return emailElement.innerText;
}

function addSummarizeButton(emailElement) {
  const summarizeButton = document.createElement("button");
  summarizeButton.textContent = "Summarize With GPT";
  summarizeButton.classList.add("summarize-button");

  summarizeButton.addEventListener("click", async () => {
    const emailBody = getEmailBody(emailElement);
    const summary = await requestSummary(emailBody);
    displaySummary(summary, emailElement);
  });

  emailElement.appendChild(summarizeButton);
}

function displaySummary(summary, emailElement) {
  let summaryTextbox = emailElement.querySelector(".summary-textbox");

  if (!summaryTextbox) {
    summaryTextbox = document.createElement("div");
    summaryTextbox.classList.add("summary-textbox");
    emailElement.appendChild(summaryTextbox);
  }

  summaryTextbox.textContent = summary;
  summaryTextbox.classList.add("visible");
}

async function requestSummary(emailBody) {
  return new Promise((resolve) => {
    chrome.runtime.sendMessage({ type: "summarize", text: emailBody }, (response) => {
      resolve(response.summary);
    });
  });
}

function observeEmails() {
  const targetNode = document.querySelector("body");
  const config = { childList: true, subtree: true };

  const callback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach((addedNode) => {
          if (addedNode.nodeType === Node.ELEMENT_NODE) {
            const emailElements = addedNode.querySelectorAll('div[role="listitem"]');
            emailElements.forEach((emailElement) => {
              if (!emailElement.querySelector(".summarize-button")) {
                addSummarizeButton(emailElement);
              }
            });
          }
        });
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

observeEmails();
