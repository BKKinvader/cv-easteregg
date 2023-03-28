//Getting data form resume.json file
fetch('resume.json')
  .then(response => response.json())
  .then(data => {
    const resume = document.getElementById('resume');
    resume.innerHTML = `
      <h1>${data.name}</h1>
      <table>
        <tr><th>Experience</th></tr>
        ${data.experience.map(item => `
          <tr>
            <td>${item.position}</td>
            <td>${item.company}</td>
            <td>${item.startDate} - ${item.endDate}</td>
            <td>${item.description}</td>
          </tr>
        `).join('')}
        <tr><th>Education</th></tr>
        ${data.education.map(item => `
          <tr>
            <td>${item.institution}</td>
            <td>${item.degree}</td>
            <td>${item.startDate} - ${item.endDate}</td>
          </tr>
        `).join('')}
        <tr><th>Skills</th></tr>
        <tr><td><ul>${data.skills.map(skill => `<li>${skill}</li>`).join('')}</ul></td></tr>
      </table>
    `;
  })
  .catch(error => console.error(error));