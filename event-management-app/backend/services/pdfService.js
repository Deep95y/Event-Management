const PDFDocument = require("pdfkit");

const generateEventPDF = (event, res) => {
  const doc = new PDFDocument({
    margin: 50
  });

  res.setHeader(
    "Content-Type",
    "application/pdf"
  );

  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${event.eventName}.pdf`
  );

  doc.pipe(res);

  doc
    .fontSize(24)
    .text("Event Details", {
      align: "center"
    });

  doc.moveDown();

  doc
    .fontSize(14)
    .text(`Event Name: ${event.eventName}`);

  doc.moveDown();

  doc.text(
    `Event Date: ${new Date(
      event.eventDate
    ).toLocaleDateString()}`
  );

  doc.moveDown();

  doc.text(
    `Speaker Name: ${event.speakerName}`
  );

  doc.moveDown();

  doc.text(
    `Speaker Designation: ${event.speakerDesignation}`
  );

  doc.moveDown();

  doc
    .fontSize(18)
    .text(
      "Event Description"
    );

  doc
    .fontSize(12)
    .text(
      event.eventDescription ||
      "Not Available"
    );

  doc.moveDown();

  doc
    .fontSize(18)
    .text(
      "Speaker Introduction"
    );

  doc
    .fontSize(12)
    .text(
      event.speakerIntroduction ||
      "Not Available"
    );

  doc.end();
};

module.exports = {
  generateEventPDF
};