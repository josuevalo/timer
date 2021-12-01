const args = process.argv.slice(2);

const timer = function(time) {
  for (let ti of time) {
    let timeInSeconds = ti * 1000;
  
    let ding = function() {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, timeInSeconds);
    };
    if (ti > 0 && !isNaN(ti)) {
      ding();
  }
}
return;
};
timer(args);