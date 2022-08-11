makerbit.onIrButton(IrButton.Left, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Duck)
})
makerbit.onIrButton(IrButton.Down, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Cow)
})
makerbit.onIrButton(IrButton.Up, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.House)
})
makerbit.onIrButton(IrButton.Any, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Yes)
})
makerbit.onIrButton(IrButton.Right, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Meh)
})
makerbit.onIrButton(IrButton.Ok, IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Yes)
})
makerbit.onIrDatagram(function () {
    basic.showString(makerbit.irDatagram())
})
makerbit.connectIrReceiver(DigitalPin.P8, IrProtocol.NEC)
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
