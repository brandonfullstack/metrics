import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/styles.css";
import Chart from '.././node_modules/chart.js';
Chart.defaults.global.defaultFontColor = 'white';

const metrics = {
  calls_made: "Calls Made",
  calls_received: "Calls Received",
  emails_received: "Emails Received",
  emails_sent: "Emails Sent",
  meetings: "Meetings",
  support_tickets_assigned: "Support Tickets Assigned",
  support_tickets_completed: "Support Tickets Completed",
  voicemail: "Voicemails",
};

const tableDate = document.getElementById("date");
const today = new Date();
const dayOfWeek = today.getDay() - 1;
const month = today.getMonth() + 1;
const day = today.getDate();
const year = today.getFullYear();

const dayOfWeekString = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

tableDate.innerHTML = `${dayOfWeekString[dayOfWeek]} ${month}/${day}/${year}`;

const tableEl = document.getElementById("apps");
const checkboxes = document.querySelectorAll('input[name="applications"]');
const dataContainer = document.getElementById('data');

function createTableHeaderRow(selectedApps) {
  const headerRow = document.createElement("tr");
  const emptyHeader = document.createElement("th");

  headerRow.appendChild(emptyHeader);

  for (const app of selectedApps) {
    const th = document.createElement("th");
    th.textContent = app;
    headerRow.appendChild(th);
  }

  tableEl.appendChild(headerRow);
}


function renderTableColumn(selectedApps, metricKey) {
  const tableRow = document.createElement("tr");
  const metricCell = document.createElement("td");
  metricCell.textContent = metrics[metricKey];
  metricCell.classList.add("text-end");
  tableRow.appendChild(metricCell);

  selectedApps.forEach((app) => {
    const tableData = document.createElement("td");
    const input = document.createElement("input");

    tableRow.appendChild(tableData);
    tableData.appendChild(input);

    input.type = "number";
    input.min = 0;
    input.placeholder = "";
    input.classList.add("form-control");
    input.id = `${metricKey}-${app}`;
    input.name = `${metricKey}-${app}`;
    input.tabIndex = `${selectedApps.indexOf(app)}` + 1;
  });

  tableEl.appendChild(tableRow);
}

function updateTable() {
  tableEl.innerHTML = '';

  const selectedApps = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);

  if (selectedApps.length === 0) {
    return;
  } else {
    createTableHeaderRow(selectedApps);
    for (const key in metrics) {
      renderTableColumn(selectedApps, key);
    }
  }
}

function gatherFormData(selectedApps) {
  const formData = {};

  selectedApps.forEach((app) => {
    formData[app] = {};

    for (const key in metrics) {
      const inputId = `${key}-${app}`;
      const inputElement = document.getElementById(inputId);
      if (inputElement) {
        const inputValue = parseInt(inputElement.value, 10);
        formData[app][key] = inputValue;
      }
    }
  });

  return formData;
}

function createChart(data) {
  dataContainer.innerHTML = '';
  for (const softwareName in data) {
    const softwareData = data[softwareName];
    const canvasId = `${softwareName}-chart`;

    const canvasElement = document.createElement('canvas');
    canvasElement.id = canvasId;
    dataContainer.appendChild(canvasElement);

    new Chart(
      canvasElement,
      {
        type: 'bar',
        data: {
          labels: Object.values(metrics),
          datasets: [
            {
              label: `${softwareName} Metrics`,
              data: Object.values(softwareData)
            }
          ]
        },
        options: {
          aspectRatio: 5,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                color: 'white'
              }
            }]
          },
          legend: {
            labels: {
              fontColor: 'white',
              fontSize: 18
            },
          }
        },
      });
  }
}



document.getElementById("theForm").addEventListener("submit", function (e) {
  document.getElementById("data").innerHTML = "";
  e.preventDefault();
  const selectedApps = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.value);
  const formData = gatherFormData(selectedApps);
  console.log(formData);
  createChart(formData);
});



document.querySelector("form").addEventListener("click", function () {

  let firstButton = document.getElementById("1stButton");
  let ariaExpanded = firstButton.getAttribute("aria-expanded");

  if ((ariaExpanded === "true")
  ) {
    firstButton.click()
  }
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', updateTable);
});
