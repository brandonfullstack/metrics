import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

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

const table = document.createElement("table");
table.classList.add("table");

for (let i = 0; i < metrics.length; i++) {
  const row = document.createElement("tr");

  if (i === 0) {
    // Create empty cell for the top-left corner
    const th = document.createElement("th");
    row.appendChild(th);

    // Create header cells for applications
    for (let j = 0; j < applications.length; j++) {
      const th = document.createElement("th");
      th.textContent = applications[j];
      row.appendChild(th);
    }
  } else {
    // Create metric label cell
    const th = document.createElement("th");

    th.classList.add("text-nowrap", "text-end", "p-3");
    th.textContent = metrics[i];
    row.appendChild(th);

    // Create input cells for metrics
    for (let j = 0; j < applications.length; j++) {
      const td = document.createElement("td");
      const input = document.createElement("input");

      input.type = "number";
      input.min = 0;
      input.classList.add("form-control");
      input.id = `${applications[j]}-${metrics[i]}`;
      input.placeholder = "";
      input.tabIndex = i + (metrics.length * j);
      td.appendChild(input);
      row.appendChild(td);
    }
  }

  table.appendChild(row);
}

document.body.appendChild(table);
