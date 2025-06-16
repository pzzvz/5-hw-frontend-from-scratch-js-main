/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// тестовое значение, можно изменять
// your code
/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

// тестовое значение, можно изменять
// your code
function getGrade(score) {
        if (score >= 90) {
          return grade ="A";
        } else if (score >= 80) {
          return grade = "B";
        } else if (score >= 70) {
          return grade = "C";
        } else if (score >= 50) {
          return grade = "D";
        } else {  (score >= 0) {
          return grade = "F";
        }
      }
            console.log(getGrade(45))
            console.log(getGrade(55))
            console.log(getGrade(95))
