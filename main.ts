input.onButtonPressed(Button.A, function () {
    OLED.clear()
    time += 5
    OLED.writeNumNewLine(time)
    if (time == 60) {
        basic.pause(100)
        time = 0
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    Distraction += 1
    music.setVolume(0)
    music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 200), music.PlaybackMode.UntilDone)
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
    datalogger.log(datalogger.createCV("Distraction", Distraction))
})
input.onButtonPressed(Button.AB, function () {
    OLED.init(128, 64)
    while (time > 0) {
        OLED.clear()
        OLED.writeNumNewLine(time)
        basic.pause(60000)
        time += -1
        OLED.clear()
    }
    music.setVolume(0)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.InBackground)
    OLED.writeStringNewLine("How was your study?")
    OLED.writeStringNewLine("")
    OLED.writeStringNewLine("press B to input no.")
    OLED.writeStringNewLine("")
    OLED.writeStringNewLine("Press LOGO to submit")
})
input.onButtonPressed(Button.B, function () {
    Rate += 1
    basic.showNumber(Rate)
    if (Rate == 10) {
        basic.pause(100)
        Rate = 0
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
    datalogger.log(datalogger.createCV("rate", Rate))
})
let Distraction = 0
let Rate = 0
let time = 0
time = 0
Rate = 0
Distraction = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Welcome to ProCra V4")
OLED.writeStringNewLine("")
OLED.writeStringNewLine("A to Set Time")
OLED.writeStringNewLine("")
OLED.writeStringNewLine("A + B to Start Timer")
