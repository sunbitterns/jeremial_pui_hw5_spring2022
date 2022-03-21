// All booked appointments 
var appts = [];

// Booking 1: Basic Info
function saveTypePlace() {

    // Retrieve user input for appointment type
    var typeSelect = document.getElementById("typeSel");
    var typeInput = typeSelect.options[typeSelect.selectedIndex].text;

    // Set location based on type of appointment 
    var placeInput = "";
    if (typeInput == "Tartan Testing") {
        placeInput = "TCS (Tata Consultancy Services)";
    } else ( // Booster or Vaccine
        placeInput = "UHS (University Health Services)"
    )

    // Store type and place  
    localStorage.setItem("storeType", JSON.stringify(typeInput));
    localStorage.setItem("storePlace", JSON.stringify(placeInput));
}

// Booking 2: Timeslot
function saveTimeDate() {

    // Retrieve user input for timeslot
    var timeSelect = document.getElementById("timeSel");
    var timeInput = timeSelect.options[typeSelect.selectedIndex].text;

    // Retrieve user input for date
    var dateSelect = document.getElementById("dateSel");
    var dateInput = dateSelect.options[typeSelect.selectedIndex].text;

    // Store time and date
    localStorage.setItem("storeTime", JSON.stringify(timeInput));
    localStorage.setItem("storeDate", JSON.stringify(dateInput));
}

// Update number of appointments
function updateApptNumber(n) {
    document.getElementById("apptN").innerHTML = n;
}

// Booking 3: Display appointment information
function displayAppt() {

    // Create new appointment 
    var appt = {
        time : JSON.parse(localStorage.getItem("storeTime")),
        date : JSON.parse(localStorage.getItem("storeDate")),
        type : JSON.parse(localStorage.getItem("storeType")),
        location : JSON.parse(localStorage.getItem("storePlace"))
    }

    // Add appointment to appointment list and update the number 
    appts.push(appt);
    updateApptNumber(appts.length);

    // Display appointment details 
    document.getElementById("dateProp").textContent = "Date: " + appt.date;
    document.getElementById("timeProp").textContent = "Time: " + appt.time;
    document.getElementById("typeProp").textContent = "Type of Visit: " + appt.type;
    document.getElementById("placeProp").textContent = "Location: " + appt.place;
}

function displayApptList() {
    document.getElementById("apptList").textContent = "placeholder";
}

function onload() {
    // Display type of vaccine & location on Booking 2
    var seeType = JSON.parse(localStorage.getItem("storeType"));
    var seePlace =JSON.parse(localStorage.getItem("storePlace"));
    document.getElementById("typePlaceData").innerHTML = seeType + " at " + seePlace;   
    
    // Display appointment details on Booking 3
    displayAppt();

    // Display appointment list on Appointments page
    displayApptList();
}

/*
CODE FOR GENERATING TIMESLOTS????

// Available days (COLS)
let days = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];


// Get timeslots from 8AM to 2PM in 15 minute intervals 
// Citation: https://stackoverflow.com/questions/36125038/generate-array-of-times-as-strings-for-every-x-minutes-in-javascript

let timeslots = [];
let interval = 15;
let startTime = 480;
let endTime = 500;
let ap = ['AM', 'PM'];

for (var i = 0; startTime < endTime; i++) {
    var hours = Math.floor(startTime/60);
    var minutes = (startTime%60);
    timeslots[i] = ("0" + (hours % 12)).slice(-2) + ':' + ("0" + minutes).slice(-2) + ap[Math.floor(hours/12)];
    startTime = startTime + interval;
}

// Create list of all available appointments
// To-do: Be able to filter these times based on user input 
// To-do: Update location and type based on user input from previous page
let appts = [];
for (var i  = 0; i < days.length; i++) {
    for (var j  = 0; j < timeslots.length; j++) {
        var appt = new Appointment(days[i], timeslots[j], 
            "Tartan Testing", "TTS");
            appts.push(appt);
    }
}

// Populate table in HTML with available times
// Citation: https://stackoverflow.com/questions/17684201/create-html-table-from-javascript-object
function onLoad() {
    
    var days = ["Monday", "Tuesday", "Wednesday"];
    var times = ["08:00", "08:15", "08:30"];
    for (var i = 0; i < Object.keys(appts).length; i++) {
        var tr = "<tr>";
        tr += "<td>" + appts[i].date + "</td>" + "<td>" 
            + appts[i].time + "</td></tr>";
        tbody.innerHTML += tr;
    }
}
*/