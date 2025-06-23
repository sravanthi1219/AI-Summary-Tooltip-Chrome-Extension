
(async () => {
  const textContent = document.body.innerText || "";
  const visibleText = textContent.trim().replace(/\s+/g, ' ').slice(0, 4000);

  if (visibleText.length < 50) {
    alert("This page doesn't have enough readable content to summarize.");
    return;
  }

  const tooltip = document.createElement('div');
  tooltip.className = 'ai-tooltip';
  tooltip.innerText = 'Summarizing full page...';
  document.body.appendChild(tooltip);

  tooltip.style.top = `${window.innerHeight / 2}px`;
  tooltip.style.left = `${window.innerWidth / 2 - 150}px`;

  const key = "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";
  const summary = await getSummaryFromAI(visibleText, key);
  tooltip.innerText = summary;
})();

async function getSummaryFromAI(text, key) {
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Summarize the following webpage in 3-5 bullet points."
          },
          {
            role: "user",
            content: text
          }
        ]
      })
    });

    const data = await response.json();
    console.log("[OpenAI Response]", data);

    if (!response.ok) {
      return `Error ${response.status}: ${data.error?.message || "Unknown error"}`;
    }

    return data.choices?.[0]?.message?.content || "Summary not available.";
  } catch (err) {
    console.error("API Error:", err);
    return "API error occurred. Check console.";
  }
}
