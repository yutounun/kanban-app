// emulate keyboard input
exports.command = function (selector, event) {
  return this.clearValue(selector)
    .setValue(selector, value)
    .trigger('selector', 'keyup', 13)
}