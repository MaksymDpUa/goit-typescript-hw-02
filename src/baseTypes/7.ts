/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

type Weekdays = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';

function isWeekend(day: Weekdays): boolean {
  switch (day) {
    case "Sat":
      return true;
    case "Sun":
      return true;  
    default: return false
        }
} 



export {};
