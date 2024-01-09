chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === 'saveToSheets') {
    const emailData = message.data;

    // Use the Google Sheets API to save the emailData to your Google Sheet
    // You'll need to handle OAuth2 authentication and API calls here
    // For brevity, I'll just log the data to the console as an example
    console.log('Email Data:', emailData);

    // You can use libraries like Google APIs Client Library or fetch for API calls
    // Make sure to set up the required scopes and authorization in your manifest.json
  }
});
