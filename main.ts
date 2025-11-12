input.onButtonPressed(Button.A, function () {
    if (Math.randomBoolean()) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
