import math from 'mathjs'
import zeropad from 'simple-zeropad'
import { toSeconds, fromSeconds } from 'util/time'

export function calculatePace (time, distanceValue, distanceUnit, paceDistanceUnit) {
  const totalSeconds = toSeconds(time)
  const rawPace = totalSeconds / distanceValue

  const newPace = math.eval(`${rawPace} s/${distanceUnit} to s/${paceDistanceUnit}`)
    .toNumber(`s/${paceDistanceUnit}`)

  return fromSeconds(newPace)
}

export function renderHoursString (hours) {
  return hours > 0 ? `${hours}:` : ''
}

export function renderMinutesString (hours, minutes) {
  if (hours > 0) {
    return `${zeropad(minutes)}:`
  }

  return minutes > 0 ? `${minutes}:` : ''
}

export function renderSecondsString (hours, minutes, seconds) {
  if (hours > 0 || minutes > 0) {
    return zeropad(seconds)
  }

  return `${seconds} s`
}
