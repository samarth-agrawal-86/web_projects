document
  .getElementById('saveEmailBtn')
  .addEventListener('click', saveEmailToGoogleSheets);

function saveEmailToGoogleSheets() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: saveSelectedEmail,
    });
  });
}

function saveSelectedEmail() {
  // Get the selected email content here using DOM manipulation
  // Extract relevant information from the email (e.g., sender, subject, body)

  // Use the extracted information to create an object to send to Google Sheets
  const emailData = {
    sender: 'John Doe',
    subject: 'Sample Subject',
    body: 'This is the email body',
  };

  // Send the emailData object to your background script using Message Passing
  chrome.runtime.sendMessage({ action: 'saveToSheets', data: emailData });
}
