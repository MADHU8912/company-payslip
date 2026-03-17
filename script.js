const employees = [
  { id: "EMP001", name: "Aarav Kumar", pay: 25000 },
  { id: "EMP002", name: "Bhavya Reddy", pay: 27000 },
  { id: "EMP003", name: "Charan Teja", pay: 30000 },
  { id: "EMP004", name: "Divya Sharma", pay: 32000 },
  { id: "EMP005", name: "Eshwar Rao", pay: 28000 },
  { id: "EMP006", name: "Farhan Ali", pay: 35000 },
  { id: "EMP007", name: "Gopi Krishna", pay: 26000 },
  { id: "EMP008", name: "Harini Devi", pay: 29000 },
  { id: "EMP009", name: "Ishaan Patel", pay: 31000 },
  { id: "EMP010", name: "Jyothi Lakshmi", pay: 27500 },
  { id: "EMP011", name: "Karthik Varma", pay: 36000 },
  { id: "EMP012", name: "Lavanya Sai", pay: 34000 },
  { id: "EMP013", name: "Manoj Kumar", pay: 25500 },
  { id: "EMP014", name: "Nandini Rao", pay: 29500 },
  { id: "EMP015", name: "Omkar Singh", pay: 33000 },
  { id: "EMP016", name: "Pooja Mehta", pay: 28500 },
  { id: "EMP017", name: "Qadir Hussain", pay: 30500 },
  { id: "EMP018", name: "Ritika Sharma", pay: 31500 },
  { id: "EMP019", name: "Sandeep Kumar", pay: 34500 },
  { id: "EMP020", name: "Tejaswini Devi", pay: 37000 }
];

function calculateSalary(pay) {
  const hra = pay * 0.20;
  const allowance = pay * 0.10;
  const deduction = pay * 0.05;
  const netPay = pay + hra + allowance - deduction;
  return {
    hra: hra.toFixed(2),
    allowance: allowance.toFixed(2),
    deduction: deduction.toFixed(2),
    netPay: netPay.toFixed(2)
  };
}

function renderTable(data) {
  const table = document.getElementById("employeeTable");
  table.innerHTML = "";

  data.forEach((emp, index) => {
    const salary = calculateSalary(emp.pay);
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${emp.id}</td>
        <td>${emp.name}</td>
        <td>₹${emp.pay.toFixed(2)}</td>
        <td>₹${salary.hra}</td>
        <td>₹${salary.allowance}</td>
        <td>₹${salary.deduction}</td>
        <td>₹${salary.netPay}</td>
      </tr>
    `;
    table.innerHTML += row;
  });
}

document.getElementById("search").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  const filtered = employees.filter(emp =>
    emp.name.toLowerCase().includes(value) ||
    emp.id.toLowerCase().includes(value)
  );
  renderTable(filtered);
});

function downloadPage() {
  window.print();
}

renderTable(employees);