const createTimeLimit = (time) => {
  if (time) {
    return {
      timeLimit: time,
      endOfTime: ``,
      tick() {
        if (this.timeLimit > 0) {
          --this.timeLimit;
        } else {
          this.endOfTime = `time is over!`;
        }
      }
    };
  } else {
    return -1;
  }
};

export default createTimeLimit;
