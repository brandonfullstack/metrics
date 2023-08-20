import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";

const applications = [
  "",
  "CAREWare",
  "AIMS2.0",
  // "CTLS",
  // "HIVD2C",
  // "STARS",
  // "PCEligibilty",
  // "TOPWA",
  "ELR",
  "PCFMRS",
  "MOVEit",
];

const metrics = {
  calls_made: "Calls Made",
  calls_received: "Calls Received",
  emails_received: "Emails Received",
  emails_sent: "Emails Sent",
  meetings: "Meetings",
  support_tickets_assigned: "Support Tickets Assigned",
  support_tickets_completed: "Support Tickets Completed",
  voicemail: "Voicemail",
};

// const formEl = document.getElementById("theForm");

// formEl.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log(event.target.elements[0].value);
// });

const tableEl = document.getElementById("apps");

function createTableHeaderRow() {
  const headerRow = document.createElement("tr");
  for (const app of applications) {
    const th = document.createElement("th");
    th.textContent = app;
    headerRow.appendChild(th);
  }
  tableEl.appendChild(headerRow);
}

function renderTableColumn(text, id) {
  const tableRow = document.createElement("tr");
  const tableHeader = document.createElement("th");

  tableRow.classList.add("borderless");
  tableHeader.classList.add("text-end");
  tableHeader.textContent = text;

  tableRow.appendChild(tableHeader);

  applications.slice(1).forEach((app) => {
    const tableData = document.createElement("td");
    const input = document.createElement("input");

    tableRow.appendChild(tableData);
    tableData.appendChild(input);

    input.type = "number";
    input.min = 0;
    input.classList.add("form-control");
    input.id = `${id}-${app}`;
    input.name = `${id}-${app}`;
    input.placeholder = "";
  });

  tableEl.appendChild(tableRow);
}

function initializeTable() {
  createTableHeaderRow();

  for (const key in metrics) {
    const element = metrics[key];
    renderTableColumn(element, key);
  }
}


window.addEventListener("load", initializeTable);

document.querySelector("form").addEventListener("click", function() {

  let firstButton = document.getElementById("1stButton");
  let ariaExpanded = firstButton.getAttribute("aria-expanded");

  if ((ariaExpanded === "true")
   ) {
    firstButton.click()
  }
});