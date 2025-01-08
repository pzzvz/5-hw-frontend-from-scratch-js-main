// Напишите функцию calculateAverage, которая принимает 2 числа и возвращает их среднее арифметическое

function calculateAverage(numbers) {
   if (numbers.length === 0) {
        return 0;
    }
    
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    
    return sum / numbers.length;
}
