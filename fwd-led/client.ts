//% block="LED" color=#cc00cc
namespace fwdEduLED {
  const MAX_BRIGHTNESS = 10

  export class FwdEduLEDClient extends modules.LedClient {

    constructor(role: string) {
      super(role)
    }

    //% block
    setBrightness(value: number): void {
      this.setBrightness(value / MAX_BRIGHTNESS)
    }

    //% block
    brightness(): number {
      return this.brightness()
    }

    //% block
    rotate(offset = 1): void { this.rotate(offset) }

    //% block
    shift(offset = 1): void { this.shift(offset) }

  }
}
