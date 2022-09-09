const application = {
  formatHTML(body, buildingId) {
    return `
        <h1>New application submitted for ${buildingId}</h1>,
        <h5>Name: ${body.name}</h5>
        <h5>Date of birth: ${body.dob}</h5>
        <h5>SSN: ${body.ssn}</h5>
        <h5>Phone: ${body.phone}</h5>
        `;
  },
};

module.exports = application;
