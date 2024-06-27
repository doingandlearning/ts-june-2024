// Gulp

type CallbackFn = () => void;

/**  Defines event and dependency, no callback. Storybook */
function task(name: string, dependencies: string[]);
function task(name: string, dependencies: string[], callback: CallbackFn);
function task(name: string, callback: CallbackFn);
function task(name: string, arg2: string[] | CallbackFn, arg3?: CallbackFn) {
  //
}

// Client code
task("default", ["styles", "scripts"]);
task("scripts", ["lint"], () => {});
task("styles", () => {});

task();

document.createEvent();

task(
  "broken",
  () => {},
  () => {}
);

const event1 = document.createEvent("");
