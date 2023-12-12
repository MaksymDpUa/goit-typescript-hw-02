/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekdays {
  mondey = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday"
}


function isWeekend(day: Weekdays): boolean {
  switch (day) {
    case Weekdays.saturday:
      return true;
    case Weekdays.sunday:
      return true;  
    default: return false
        }
} 



export {};
