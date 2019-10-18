function average(array) {
    let sum = 0
    array.forEach(num => sum += num)
    return sum / array.length
}
