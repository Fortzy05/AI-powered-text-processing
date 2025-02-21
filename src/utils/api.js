import axios from "axios";

const CHROME_AI_URL = "https://chromeai.googleapis.com/v1";

export const detectLanguage = async (text) => {
  try {
    const response = await axios.post(`${CHROME_AI_URL}/languageDetection`, { text });
    return response.data.language;
  } catch (error) {
    throw new Error("Failed to detect language");
  }
};

export const summarizeText = async (text) => {
  try {
    const response = await axios.post(`${CHROME_AI_URL}/summarizer`, { text });
    return response.data.summary;
  } catch (error) {
    throw new Error("Failed to summarize text");
  }
};

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(`${CHROME_AI_URL}/translator`, { text, targetLanguage });
    return response.data.translation;
  } catch (error) {
    throw new Error("Failed to translate text");
  }
};