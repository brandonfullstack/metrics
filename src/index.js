// import "./css/styles.css";
import "./css/global.css";

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

const formEl = document.getElementById("theForm");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event.target.elements[0].value);
});
const tableEl = document.getElementById("apps");

const headerRow = document.createElement("tr");
for (let j = 0; j < applications.length; j++) {
  const th = document.createElement("th");
  th.textContent = applications[j];
  headerRow.appendChild(th);
}

tableEl.appendChild(headerRow);

function renderTableColumn(text, id) {
  const tableRow = document.createElement("tr");
  const tableHeader = document.createElement("th");

  tableRow.classList.add("borderless");
  tableHeader.classList.add("text-nowrap", "text-end", "p-3");
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

for (const key in metrics) {
  const element = metrics[key];
  renderTableColumn(element, key);
}

// metrics.forEach((metric) => {
//   renderTableColumn(metric);
// });



  
  // tableEl.appendChild(tableRow);


// function addTableHeaders(headers) {
//   headers.forEach((header) => {
//     header = 
//     const th = document.createElement('th');
//     th.classList.add('py-2', 'px-4', 'font-bold', 'bg-gray-200');
//     th.textContent = header;
//     tr.appendChild(th);
//   });

//   thead.appendChild(tr);
//   table.appendChild(thead);
// }

// for (const key in metrics) {
//   const elementHeader = applications[key];
//   addTableHeaders(elementHeader, key);
// }


// const table = document.createElement("table");
// table.classList.add("table");

// for (let i = 0; i < metrics.length; i++) {
//   const row = document.createElement("tr");



//     // Create header cells for applications
    // for (let j = 0; j < applications.length; j++) {
    //   const th = document.createElement("th");
    //   th.textContent = applications[j];
    //   row.appendChild(th);
    // }
//   } else {
//     // Create metric label cell
//     const th = document.createElement("th");

//     th.classList.add("text-nowrap", "text-end", "p-3");
//     th.textContent = metrics[i];
//     row.appendChild(th);

//     // Create input cells for metrics
//     for (let j = 0; j < applications.length; j++) {
//       const td = document.createElement("td");
//       const input = document.createElement("input");

//       input.type = "number";
//       input.min = 0;
//       input.classList.add("form-control");
//       input.id = `${applications[j]}-${metrics[i]}`;
//       input.placeholder = "";
//       input.tabIndex = i + metrics.length * j;
//       td.appendChild(input);
//       row.appendChild(td);
//     }
//   }

//   table.appendChild(row);
// }

// document.body.appendChild(table);
