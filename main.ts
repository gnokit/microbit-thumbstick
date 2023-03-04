//  map analog value to 5x5 led on the board
function mapLed(val: number): number {
    return Math.trunc(pins.map(val, 0, 1023, 0, 5))
}

function readX(): number {
    return mapLed(readPin(AnalogPin.P2))
}

function readY(): number {
    return mapLed(readPin(AnalogPin.P1))
}

function readPin(pin: number): number {
    return pins.analogReadPin(pin)
}

basic.forever(function plotThumbStick() {
    let xVal = readX()
    let yVal = readY()
    //  the X value is reverse of the moving direction
    led.plot(4 - xVal, yVal)
    pause(100)
    basic.clearScreen()
})
