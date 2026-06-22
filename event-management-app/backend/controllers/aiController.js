const Event = require(
    "../models/Event"
  );
  
  const {
    generateContent
  } = require(
    "../services/aiService"
  );
  
  const generateAIContent =
    async (req, res, next) => {
      try {
  
        const { id } =
          req.params;
  
        const event =
          await Event.findById(id);
  
        if (!event) {
          return res.status(404).json({
            success: false,
            message:
              "Event not found"
          });
        }
  
        const aiContent =
          await generateContent(
            event
          );
  
        event.eventDescription =
          aiContent.eventDescription;
  
        event.speakerIntroduction =
          aiContent.speakerIntroduction;
  
        await event.save();
  
        return res.status(200).json({
          success: true,
          message:
            "AI Content Generated",
          data: event
        });
  
      } catch (error) {
        next(error);
      }
    };
  
  module.exports = {
    generateAIContent
  };