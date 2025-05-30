const form = document.getElementById('appointmentForm');
const tableBody = document.querySelector('#appointmentsTable tbody');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('patientName').value;
  const doctor = document.getElementById('doctorName').value;
  const date = document.getElementById('appointmentDate').value;

  // Create a new row
  const row = document.createElement('tr');
  row.innerHTML = `<td>${name}</td><td>${doctor}</td><td>${date}</td>`;

  tableBody.appendChild(row);

  // Clear form
  form.reset();
});
