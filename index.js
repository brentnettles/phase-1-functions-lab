function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
  }
  function distanceFromHqInFeet(feet) {
    const blocks = distanceFromHqInBlocks(feet);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
  }
  
  function distanceTravelledInFeet(start, destination) {
    const blocksTraveled = Math.abs(destination - start);
    return blocksTraveled * 264;
  }

  function calculatesFarePrice (start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination) 
    if (distanceTravelled <= 400) {
      return 0
    } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
       return (distanceTravelled - 400) * .02;
    }
    else if (distanceTravelled > 2000 && distanceTravelled <= 2500 )  {
      return 25;
    }
    else if (distanceTravelled > 2500) {
      return "cannot travel that far";
    }
  }