function executeCommands(commands) {
  let cpu = [0, 0, 0, 0, 0, 0, 0, 0];
  const processComands = {
    ADD: (value) => {
      const value1 = +value.split(',')[0].at(-1);
      const value2 = +value.split(',')[1].at(-1);
      cpu[value1] = (cpu[value1] + cpu[value2]) % 256;
    },
    DEC: (value) => {
      cpu[+value.at(-1)] = (((cpu[+value.at(-1)] - 1) % 256) + 256) % 256;
    },
    INC: (value) => {
      cpu[+value.at(-1)] = (cpu[+value.at(-1)] + 1) % 256;
    },
    MOV: (value) => {
      let mov = value.split(',')[0].split(' ')[1];
      cpu[+value.at(-1)] = cpu[+mov.at(-1)] * +mov.startsWith('V') + ~~mov;
    },
    JMP: (value) => {
      commands = commands.concat(
        commands.slice(
          +value.split(' ').at(-1),
          (commands.indexOf(value) + 1) * !!cpu[0]
        )
      );
    },
  };

  // commands.forEach((command, index) => {
  //   console.log(index, 'index', command, 'command');

  //   processComands[command.split(' ')[0]](command);
  // });

  for (let i = 0; i < commands.length; i++) {
    console.log(i, 'index', commands[i], 'command');
    processComands[commands[i].split(' ')[0]](commands[i]);
  }

  return cpu;
}

// console.log(
//   executeCommands([
//     'MOV 5,V00', // V00 is 5
//     'MOV 10,V01', // V01 is 10
//     'DEC V00', // V00 is now 4
//     'ADD V00,V01', // V00 = V00 + V01 = 14
//   ])
// );

// Output: [14, 10, 0, 0, 0, 0, 0]

// executeCommands([
//   'MOV 255,V00', // V00 is 255
//   'INC V00', // V00 is 256, overflows to 0
//   'DEC V01', // V01 is -1, overflows to 255
//   'DEC V01', // V01 is 254
// ]);
// Output: [0, 254, 0, 0, 0, 0, 0]

console.log(
  executeCommands([
    'MOV 10,V00', // V00 is 10
    'DEC V00', // decrement V00 by 1  <---┐
    'INC V01', // increment V01 by 1      |
    'JMP 1', // loop until V00 is 0 ----┘
    'INC V06', // increment V06 by 1
  ])
);

// Output: [ 0, 10, 0, 0, 0, 0, 1, 0 ]
