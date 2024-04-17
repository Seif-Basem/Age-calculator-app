//results
let yearResult = document.getElementById("yearresult");
let monthResult = document.getElementById("monthresult");
let dayResult = document.getElementById("dayresult");

//action button
let calculate = document.getElementById("calculate");

//errors
let dayLabel = document.getElementById("day-label");
let monthLabel = document.getElementById("month-label");
let yearLabel = document.getElementById("year-label");

//validate messages
let validDay = document.getElementById("valid-day");
let validMonth = document.getElementById("valid-month");
let validYear = document.getElementById("valid-year");

//requird messages
let requirDay = document.getElementById("requiredday");
let requirMonth = document.getElementById("requiredmonth");
let requirYear = document.getElementById("requiredyear");



//the whole function
calculate.onclick = function () {
  //inputs
  let dayInput = document.getElementById("day-input");
  let monthInput = document.getElementById("month-input");
  let yearInput = document.getElementById("year-input");
  //put inbuts into dateObject
  let dateInput = `${yearInput.value}/${monthInput.value}/${dayInput.value}`;
  let dateObj = new Date(dateInput);
  //check if dayinput it empty
  if (dayInput.value.trim() === "") {
    dayLabel.classList.add("error");
    dayInput.classList.add("error-border");
    requirDay.style.display = "block";
  }else {
    dayLabel.classList.remove("error");
    dayInput.classList.remove("error-border");
    requirDay.style.display = "none";
  }
  //check if monthinput it empty
  if (monthInput.value.trim() === "") {
    monthLabel.classList.add("error");
    monthInput.classList.add("error-border");
    requirMonth.style.display = "block";
  }else {
    monthLabel.classList.remove("error");
    monthInput.classList.remove("error-border");
    requirMonth.style.display = "none";
  }
  //check if yearinput it empty
  if (yearInput.value.trim() === "") {
    yearLabel.classList.add("error");
    yearInput.classList.add("error-border");
    requirYear.style.display = "block";
    return
  }else {
    yearLabel.classList.remove("error");
    yearInput.classList.remove("error-border");
    requirYear.style.display = "none";
  }
  //check the validation of inputs
  let currentDate = new Date();
  if (isNaN(dateObj) || dateObj > currentDate) {
    // Extract year, month, and day from the input date
    let year = yearInput.value;
    let month = monthInput.value;
    let day = dayInput.value
    // Check if month is within valid range (1 to 12)
    if (month < 1 || month > 12) {
      monthLabel.classList.add("error");
      monthInput.classList.add("error-border");
      validMonth.style.display = "block";
    }else {
      monthLabel.classList.remove("error");
      monthInput.classList.remove("error-border");
      validMonth.style.display = "none";
    }
    // Check if day is within valid range based on the month
    let daysInMonth = new Date(year, month, 0).getDate(); // Get the number of days in the month
    if (day < 1 || day > daysInMonth) {
      dayLabel.classList.add("error");
      dayInput.classList.add("error-border");
      validDay.style.display = "block";
    }else {
      dayLabel.classList.remove("error");
      dayInput.classList.remove("error-border");
      validDay.style.display = "none";
    }
    // Get the current year
    let currentYear = new Date().getFullYear();
    if (year > currentYear) {
      yearLabel.classList.add("error");
      yearInput.classList.add("error-border");
      validYear.style.display = "block";
    }else {
      yearLabel.classList.remove("error");
      yearInput.classList.remove("error-border");
      validYear.style.display = "none";
    }
  }
  else {
    dayLabel.classList.remove("error");
    monthLabel.classList.remove("error");
    yearLabel.classList.remove("error");
    dayInput.classList.remove("error-border");
    monthInput.classList.remove("error-border");
    yearInput.classList.remove("error-border");
    validDay.style.display = "none";
    validMonth.style.display = "none";
    validYear.style.display = "none";

    //the results of calculation
    let day = document.getElementById("day-input").value;
    let month = document.getElementById("month-input").value;
    let year = document.getElementById("year-input").value;
    let today = new Date();
    let birthDate = new Date(year, month - 1, day); // Months are 0-indexed in JavaScript
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();
    
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12; // Convert negative months to positive by adding 12
    }
    
    // Calculate the remaining days in the birth month
    var maxDaysInMonth = new Date(birthDate.getFullYear(), birthDate.getMonth() + 1, 0).getDate();
    if (ageDays < 0) {
      ageDays += maxDaysInMonth; // Adjust negative days
      ageMonths--; // Reduce a month
    }
    yearResult.innerHTML = ageYears;
    monthResult.innerHTML = ageMonths;
    dayResult.innerHTML = ageDays;
  }
}