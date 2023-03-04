
# map analog value to 5x5 led on the board
def mapLed(val):
    return int(pins.map(val, 0, 1023, 0, 5))

def readX():
    return mapLed(readPin(AnalogPin.P2))

def readY():
    return mapLed(readPin(AnalogPin.P1))

def readPin(pin):
    return pins.analog_read_pin(pin)

def plotThumbStick():
    xVal = readX()
    yVal = readY()
    # the X value is reverse of the moving direction
    led.plot(4 - xVal, yVal)
    pause(100)
    basic.clear_screen()

basic.forever(plotThumbStick)


