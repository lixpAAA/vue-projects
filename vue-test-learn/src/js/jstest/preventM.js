function getM() {
  const m = process.memoryUsage();
  console.log('size', m.heapTotal)

}
getM()