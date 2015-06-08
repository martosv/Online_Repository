var Rover = {
  position: [0,0], 
  direction: ['N', 'E', 'S', 'W']
}

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]--
      break;
  }

  goForward(myRover);
}

function goBack(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]++
      break;
  }

  goBack(myRover);
}

function turnLeft(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++
      break;
    case 'E':
      rover.position[1]--
      break;
    case 'S':
      rover.position[0]--
      break;
    case 'W':
      rover.position[1]++
      break;
  }

  turnLeft(myRover);
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--
      break;
    case 'E':
      rover.position[1]++
      break;
    case 'S':
      rover.position[0]++
      break;
    case 'W':
      rover.position[1]--
      break;
  }

  turnRight(myRover);
}
