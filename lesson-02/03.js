/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 45 // тестовое значение, можно изменять
// your code
grade = score < 50 ? 'F' :
        score < 70 ? 'D' :
        score < 80 ? 'C' :
        score < 90 ? 'B' :
        'A';

console.log (grade)
