async function generateQuote() {
  const topic = document.getElementById("topic").value;
  const apiKey = document.getElementById("api-key").value;

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "google/gemini-2.0-flash-001",
      messages: [
        { role: "system", content: "你是一个温暖、智慧、简洁的中文金句生成器。" },
        { role: "user", content: `请根据“${topic}”这个主题生成一句30字以内的中文金句。` }
      ]
    })
  });

  const data = await res.json();
  const text = data.choices?.[0]?.message?.content || "生成失败，请检查 API Key 或稍后重试。";
  document.getElementById("result").innerText = text;
}