// Participant class
class Participant {
  constructor(name, email, aadhaar, gender) {
    this.name = name;
    this.email = email;
    this.aadhaar = aadhaar;
    this.gender = gender;
  }
}

// RegistrationForm class
class RegistrationForm {
  constructor() {
    this.participants = [];
    this.tbody = document.getElementById("tableBody");
  }

  addParticipant(participant) {
    this.participants.push(participant);
    this.displayParticipants(this.participants);
  }

  displayParticipants(list) {
    this.tbody.innerHTML = "";
    list.forEach(p => {
      const row = `<tr>
        <td>${p.name}</td>
        <td>${p.email}</td>
        <td>${p.aadhaar}</td>
        <td>${p.gender}</td>
      </tr>`;
      this.tbody.innerHTML += row;
    });
  }

  search(keyword) {
    const filtered = this.participants.filter(p =>
      p.name.toLowerCase().includes(keyword) ||
      p.email.toLowerCase().includes(keyword) ||
      p.aadhaar.includes(keyword) ||
      p.gender.toLowerCase().includes(keyword)
    );
    this.displayParticipants(filtered);
  }
}

// App Instance
const formApp = new RegistrationForm();

// Form Submit Event
document.getElementById("regForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const aadhaar = document.getElementById("aadhaar").value;
  const gender = document.querySelector("input[name='gender']:checked").value;

  const newParticipant = new Participant(name, email, aadhaar, gender);
  formApp.addParticipant(newParticipant);

  e.target.reset();
});

// Search Event
document.getElementById("searchBtn").addEventListener("click", () => {
  const keyword = document.getElementById("search").value.toLowerCase();
  formApp.search(keyword);
});
