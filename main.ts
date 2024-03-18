input.onButtonPressed(Button.A, function () {
    OLED.clear()
    time += 1
    OLED.writeNumNewLine(time)
    if (time == 60) {
        basic.pause(100)
        time = 0
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    Distraction += 1
    music.setVolume(255)
    music.play(music.stringPlayable("C5 B C5 B C5 B C5 B ", 200), music.PlaybackMode.UntilDone)
    datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
    datalogger.log(datalogger.createCV("Seachrain", Distraction))
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
    music.setVolume(255)
    music.play(music.stringPlayable("B A G A G F A C5 ", 120), music.PlaybackMode.InBackground)
    OLED.writeStringNewLine("Staidear Criochnaithe")
})
input.onButtonPressed(Button.B, function () {
    while (time > 0) {
        basic.pause(60000)
        datalogger.log(datalogger.createCV("Fuaim", smarthome.ReadNoise(AnalogPin.P1)))
    }
})
let Distraction = 0
let time = 0
time = 0
let Rate = 0
Distraction = 0
OLED.init(128, 64)
OLED.writeStringNewLine("Failte go ProCra V4")
OLED.writeStringNewLine("")
OLED.writeStringNewLine("A chun t-am a chuir")
OLED.writeStringNewLine("")
OLED.writeStringNewLine("A + B Chun tosú")
OLED.writeStringNewLine("")
OLED.writeStringNewLine("B Tosnu logail fuaim")
