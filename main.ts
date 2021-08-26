control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MES_DEVICE_DISPLAY_ON, function () {
    led.toggle(2, 4)
})
led.toggle(2, 2)
control.raiseEvent(
EventBusSource.MES_DPAD_CONTROLLER_ID,
EventBusValue.MES_DPAD_BUTTON_1_UP
)
control.raiseEvent(
EventBusSource.MES_DPAD_CONTROLLER_ID,
EventBusValue.MES_REMOTE_CONTROL_EVT_FORWARD
)
