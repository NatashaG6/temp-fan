input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P0, 0)
})
basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.pause(1000)
    if (input.temperature() >= 30) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else if (input.temperature() < 25) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
