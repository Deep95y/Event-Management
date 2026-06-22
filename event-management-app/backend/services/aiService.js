const axios = require("axios");

const generateContent = async (
  event
) => {

  const prompt = `
Return ONLY valid JSON.

{
  "eventDescription":"",
  "speakerIntroduction":""
}

Generate:

1. Event Description
2-3 professional paragraphs.

2. Speaker Introduction
Around 100 words.

Event Name:
${event.eventName}

Event Date:
${event.eventDate}

Speaker Name:
${event.speakerName}

Speaker Designation:
${event.speakerDesignation}
`;

  const response =
    await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "qwen2.5:3b",
        prompt,
        stream: false
      }
    );

  return JSON.parse(
    response.data.response
  );
};

module.exports = {
  generateContent
};