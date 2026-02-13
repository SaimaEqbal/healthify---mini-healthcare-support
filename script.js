// Patient Form Auto Summary (AI-like feature)

document.getElementById("patientForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let issue = document.getElementById("issue").value;

    let summary = `
        <h3>Submission Summary</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Issue:</strong> ${issue}</p>
        <p><strong>Priority:</strong> ${age > 60 ? "High Priority (Senior Citizen)" : "Normal Priority"}</p>
    `;

    document.getElementById("summary").innerHTML = summary;
});

// Volunteer form alert
document.getElementById("volunteerForm").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Thank you for registering as a volunteer!");
});

// Simple FAQ Chatbot (Rule-based AI concept)

function chatbot() {
    let input = document.getElementById("chatInput").value.toLowerCase();
    let response = "";

    if (input.includes("services")) {
        response = "We provide free basic medical guidance and connect patients with volunteers.";
    }
    else if (input.includes("volunteer")) {
        response = "You can register using the volunteer form above.";
    }
    else if (input.includes("contact")) {
        response = "You can contact us at support@careconnect.org";
    }
    else {
        response = "Sorry, I am still learning. Please contact support for more help.";
    }

    document.getElementById("chatResponse").innerText = response;
}
