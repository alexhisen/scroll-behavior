export function delay(cb) {
  // Give throttled scroll listeners time to settle down.
  setTimeout(cb, 80);
}

export default function run(history, steps) {
  window.history.replaceState(null, null, '/');

  let i = 0;

  return history.listen((location) => {
    if (i === steps.length) {
      return;
    }

    // Wait a extra tick for all the scroll callbacks to fire before checking
    // position.
    delay(() => steps[i++](location));
  });
}
