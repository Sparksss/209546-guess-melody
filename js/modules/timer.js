const createTimeLimit = (time) => {
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
};

export default createTimeLimit;
