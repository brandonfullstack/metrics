import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//creates a table out of applications and metrics array
function createForm() {
  const applications = [
    "CAREWare",
    "AIMS2.0",
    // "CTLS",
    // "HIVD2C",
    // "STARS",
    // "PCEligibilty",
    // "TOPWA",
    // "ELR",
    "PCFMRS",
    "MOVEit"
  ];
  const metrics = [
    "",
    "Calls Made",
    "Calls Received",
    "Emails Received",
    "Emails Sent",
    "Meetings",
    "Support Tickets Assigned",
    "Support Tickets Completed",
    "Voicemail"
  ];
  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.classList.add("btn", "btn-primary");
  submitButton.textContent = "Submit";

  const formDiv = document.getElementById("metrics");

  const table = document.createElement("table");
  table.classList.add("table");

  metrics.forEach((metric, i) => {
    const row = document.createElement("tr");

    if (i === 0) {
      // Create empty cell for the top-left corner
      const th = document.createElement("th");
      row.appendChild(th);

      // Create header cells for applications
      applications.forEach((application) => {
        const th = document.createElement("th");
        th.textContent = application;
        row.appendChild(th);
      });
    } else {
      // Create metric label cell
      const th = document.createElement("th");

      th.classList.add("text-nowrap", "text-end", "p-3");
      th.textContent = metric;
      row.appendChild(th);

      // Create input cells for metrics
      applications.forEach((application, j) => {
        const td = document.createElement("td");
        const input = document.createElement("input");

        input.type = "number";
        input.min = 0;
        input.classList.add("form-control");
        input.id = `${application}-${metric}`;
        input.placeholder = "";
        input.tabIndex = i + metrics.length * j;
        td.appendChild(input);
        row.appendChild(td);
      });
    }

    table.appendChild(row);
  });

  formDiv.appendChild(table);
  formDiv.appendChild(submitButton);
}

function handleFormSubmission(e) {
  e.preventDefault();
  console.log(e);
 }
window.addEventListener("load", function () {
  createForm();
   document.querySelector("form").addEventListener("submit", handleFormSubmission);
});
