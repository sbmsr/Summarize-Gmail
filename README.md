# Overview

Summarize-Gmail is a Chrome extension that utilizes OpenAI's API to automatically summarize emails in your Gmail inbox, improving productivity and helping you focus on what matters most. It is currently in its development phase and not available on the Chrome Web Store. To run it, you'll need to load it as an unpacked extension in Chrome and provide your OpenAI API key.

# Features

- Automatically summarizes emails in Gmail
- Utilizes OpenAI's advanced GPT-4 technology
- Quick and easy setup

# How to Run

## Prerequisites

- Google Chrome browser
- OpenAI API key

## Setup

- Clone this repository or download the source code as a ZIP file and extract it.
- Open the Google Chrome browser and navigate to chrome://extensions/.
- Enable "Developer mode" by toggling the switch in the upper right corner.
- Click on "Load unpacked" and select the extracted folder containing the Summarize-Gmail source code.
- Open the config.js file located in the source code folder and replace <YOUR_OPENAI_API_KEY> with your personal OpenAI API key.

Now the Summarize-Gmail extension should be installed and ready to use! Simply open your Gmail inbox and let the extension work its magic.

# Contributing
If you have any suggestions, bug reports, or would like to contribute to the development of Summarize-Gmail, please feel free to open an issue or submit a pull request. Your feedback and contributions are much appreciated!

# Disclaimer
This extension is in development and may not be fully stable. It's solely for demonstrative purposes, to show you how chatGPT can help you build stuff.

# License
This project is licensed under the MIT License - see the LICENSE file for details.

# Behind the Scenes: ChatGPT Conversation
Curious about the process of creating this application with the help of ChatGPT? Check out the conversation I had with ChatGPT that led to the creation of Summarize-Gmail. It demonstrates how AI and developers can collaborate to quickly build useful tools, while highlighting the importance of human expertise in refining, testing, and fixing the code output. Some of the code it gave me wasn't quite right (like the network call to the openai API, for instance), but it got me 90% of the way there.

![ChatGPT-Chrome_Extension_for_Summarizing](https://user-images.githubusercontent.com/2349518/228712966-8a9c2a0c-e21f-4511-abb4-4d7ece674a37.png)

