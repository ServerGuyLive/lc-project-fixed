def on_button_pressed_a():
    global time
    OLED.clear()
    time += 5
    OLED.write_num_new_line(time)
    if time == 60:
        basic.pause(100)
        time = 0
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_screen_down():
    global Distraction
    Distraction += 1
    music.set_volume(0)
    music.play(music.string_playable("C5 B C5 B C5 B C5 B ", 200),
        music.PlaybackMode.UNTIL_DONE)
    datalogger.include_timestamp(FlashLogTimeStampFormat.MINUTES)
    datalogger.log(datalogger.create_cv("Distraction", Distraction))
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_ab():
    global time
    OLED.init(128, 64)
    while time > 0:
        OLED.clear()
        OLED.write_num_new_line(time)
        basic.pause(60000)
        time += -1
        OLED.clear()
    music.set_volume(0)
    music.play(music.string_playable("B A G A G F A C5 ", 120),
        music.PlaybackMode.IN_BACKGROUND)
    OLED.write_string_new_line("How was your study?")
    OLED.write_string_new_line("")
    OLED.write_string_new_line("press B to input no.")
    OLED.write_string_new_line("")
    OLED.write_string_new_line("Press LOGO to submit")
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Rate
    Rate += 1
    basic.show_number(Rate)
    if Rate == 10:
        basic.pause(100)
        Rate = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_logo_pressed():
    datalogger.include_timestamp(FlashLogTimeStampFormat.MINUTES)
    datalogger.log(datalogger.create_cv("rate", Rate))
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

Distraction = 0
Rate = 0
time = 0
time = 0
Rate = 0
Distraction = 0
OLED.init(128, 64)
OLED.write_string_new_line("Welcome to ProCra V4")
OLED.write_string_new_line("")
OLED.write_string_new_line("A to Set Time")
OLED.write_string_new_line("")
OLED.write_string_new_line("A + B to Start Timer")