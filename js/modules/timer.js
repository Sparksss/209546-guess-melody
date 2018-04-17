const createTimeLimit = (time) => {
  return {
    timeLimit: time,
    tick() {
      --this.timeLimit;
      if (this.timeLimit <= 0) {
        this.timeLimit = `time is over!`;
      }
      return this.timeLimit;
    }
  };
};

export default createTimeLimit;
