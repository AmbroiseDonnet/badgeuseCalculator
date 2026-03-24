const horaireDepart = document.getElementById("start-time") as HTMLInputElement;
const DureePauseMidi = document.getElementById("lunch-break") as HTMLInputElement;
const horaireJournalier = document.getElementById("work-hours") as HTMLInputElement;
const submitButton = document.getElementById("submitButton") as HTMLButtonElement;

function stringMinuteToTime(startWork: number, timeToAdd: number) {
    const newTotalMinute = (startWork + timeToAdd);
    const newHour = Math.floor(newTotalMinute / 60) % 24;
    return `${newHour} : ${newTotalMinute%60}`;
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const startTimeHour = horaireDepart.value.split(":")[0]; // hour
    const startTimeMinute = horaireDepart.value.split(":")[1]; // min
    const timeStart = parseInt(startTimeHour) * 60 + parseInt(startTimeMinute); // total minute
    const lunchBreak = parseInt(DureePauseMidi.value); // min
    const workHoursHour = horaireJournalier.value.split(":")[0];// hour
    const workHoursMinute = horaireJournalier.value.split(":")[1]; // minute
    const workHours = parseInt(workHoursHour) * 60 + parseInt(workHoursMinute); // total minute
    const finBadges = stringMinuteToTime(timeStart, lunchBreak + workHours);
    const resultElement = document.getElementById("result") as HTMLDivElement;
    resultElement.classList.remove("hidden");
    resultElement.textContent = `Vous devez badger à ${finBadges}`;
})

console.log(stringMinuteToTime(587, 15));
console.log(stringMinuteToTime(720, 15));
console.log(stringMinuteToTime(1490, 15));
console.log(stringMinuteToTime(1430, 15));
