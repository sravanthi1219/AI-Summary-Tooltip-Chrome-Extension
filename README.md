# AI Summary Tooltip Chrome Extension

**AI Summary Tooltip** is a powerful and user-friendly Chrome extension that provides instant summaries of highlighted text using AI. By leveraging OpenAI’s API, it enhances browsing productivity and reading efficiency with real-time summaries displayed directly in a tooltip on any webpage.



## 🚀 Features
- ✨ Instant AI-generated summary of selected text  
- 🧠 Uses OpenAI GPT model (e.g., GPT-3.5 or GPT-4)  
- 💡 Non-intrusive tooltip interface  
- 🌐 Works on all websites  
- 📐 Responsive and lightweight design  
- 🔐 Secure and customizable (backend API relay recommended for production)

## 🛠️ Installation & Usage
1. **Clone or Download** the repository:
   ```bash
   git clone https://github.com/your-username/ai-summary-tooltip.git
   cd ai-summary-tooltip
   
## Load the Extension in Chrome:
    Visit chrome://extensions/
    Enable Developer Mode
    Click "Load unpacked"
    Select the project folder
    Highlight any text on a webpage to see the summary tooltip in action.
    
## 🔧 Configuration:
## 🔑 Set Your OpenAI API Key
    In content.js, replace:
    "Authorization": "Bearer YOUR_OPENAI_API_KEY"
## 📁 File Structure:
    ai-summary-tooltip/
    ├── manifest.json          # Extension configuration
    ├── content.js             # Injected script to capture selection & show tooltip
    ├── style.css              # Tooltip styling
    ├── icon.png               # Extension icon
    └── README.md              # Project documentation
## 💡 Future Improvements:
    
  - Add spinner during API response wait
  - Support copy-to-clipboard button
  - Tooltip auto-hide after 10 seconds
  - Backend server relay for key protection
  - Support multilingual summaries
## 🤝 Contributing:
  Contributions are welcome! Feel free to fork the repo, submit issues, or create pull requests.
## 📜 License:
  This project is licensed under the MIT License . See the LICENSE file for details.
 

