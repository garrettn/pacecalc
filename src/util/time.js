export function toSeconds ({ hours, minutes, seconds }) {
  return +hours * 3600 + +minutes * 60 + +seconds
}

export function fromSeconds (totalSeconds) {
  return {
    hours: Math.floor(totalSeconds / 60 / 60),
    minutes: Math.floor((totalSeconds / 60) % 60),
    seconds: Math.round(totalSeconds % 60)
  }
}
