import axios from "axios";

export const chatWithGPT = async (message) => {
  try {
    const res = await axios.post("/api/chat/openai", {
      messages: [{ role: "user", content: message }],
    });
    return res.data.choices[0].message.content;
  } catch {
    return "Error connecting to ChatGPT.";
  }
};

export const chatWithDeepSeek = async (message) => {
  try {
    const res = await axios.post("/api/chat/deepseek", {
      messages: [{ role: "user", content: message }],
    });
    return res.data.choices[0].message.content;
  } catch {
    return "Error connecting to DeepSeek.";
  }
};
