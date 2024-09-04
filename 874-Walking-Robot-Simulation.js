/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim1 = function (commands, obstacles) {
  let res = 0;
  const pos = [0, 0];
  const next_pos = [0, 0];
  let dir_index = 0;
  const directions = ["+Y", "+X", "-Y", "-X"];
  let cur_dir = directions.at(dir_index);
  for (let i = 0; i < commands.length; i++) {
    const cmd = commands[i];
    if (cmd === -1) {
      dir_index++;
      cur_dir = directions.at(dir_index % 4);
    } else if (cmd === -2) {
      dir_index--;
      cur_dir = directions.at(dir_index % 4);
    } else {
      switch (cur_dir) {
        case directions[0]:
          next_pos[1] = pos[1] + cmd;
          obstacles.forEach(([x, y]) => {
            if (x === pos[0] && y > pos[1] && y <= next_pos[1]) {
              next_pos[1] = Math.min(next_pos[1], y - 1);
            }
          });
          break;
        case directions[1]:
          next_pos[0] = pos[0] + cmd;
          obstacles.forEach(([x, y]) => {
            if (y === pos[1] && x > pos[0] && x <= next_pos[0]) {
              next_pos[0] = Math.min(next_pos[0], x - 1);
            }
          });
          break;
        case directions[2]:
          next_pos[1] = pos[1] - cmd;
          obstacles.forEach(([x, y]) => {
            if (x === pos[0] && y < pos[1] && y >= next_pos[1]) {
              next_pos[1] = Math.max(next_pos[1], y + 1);
            }
          });
          break;
        case directions[3]:
          next_pos[0] = pos[0] - cmd;
          obstacles.forEach(([x, y]) => {
            if (y === pos[1] && x < pos[0] && x >= next_pos[0]) {
              next_pos[0] = Math.max(next_pos[0], x + 1);
            }
          });
          break;
      }
      pos[0] = next_pos[0];
      pos[1] = next_pos[1];
      res = Math.max(res, pos[0] ** 2 + pos[1] ** 2);
    }
  }
  return res;
};

var robotSim = function (commands, obstacles) {
  let x = 0;
  let y = 0;
  const direct = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let d = 0;
  let res = 0;
  const obstacles_set = new Set(obstacles.map(JSON.stringify));
  for (let i = 0; i < commands.length; i++) {
    const c = commands[i];
    if (c === -1) {
      d = (d + 1) % 4;
    } else if (c === -2) {
      d = (d - 1) % 4;
    } else {
      const [dx, dy] = direct.at(d);
      for (let j = 0; j < c; j++) {
        if (obstacles_set.has(JSON.stringify([x + dx, y + dy]))) {
          break;
        }
        x = x + dx;
        y = y + dy;
      }
      res = Math.max(res, x ** 2 + y ** 2);
    }
  }
  return res;
};

// console.log(robotSim([4, -1, 3], [])); // 25
// console.log(robotSim([4, -1, 4, -2, 4], [[2, 4]])); // 65
// console.log(robotSim([6, -1, -1, 6], [])); // 36
console.log(
  robotSim(
    [-2, 8, 3, 7, -1],
    [
      [-4, -1],
      [1, -1],
      [1, 4],
      [5, 0],
      [4, 5],
      [-2, -1],
      [2, -5],
      [5, 1],
      [-3, -1],
      [5, -3],
    ]
  )
); // 324
