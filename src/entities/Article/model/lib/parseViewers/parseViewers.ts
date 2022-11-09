export function parseViewers(count: number | undefined): string {
  if (!count) {
    return ``
  }
  let result: string

  if (count > 1_000_000_000) {
    result = `${(count / 1_000_000_000).toFixed(2)}ММ`
  } else if (count > 1_000_000) {
    result = `${(count / 1_000_000).toFixed(1)}М`
  } else if (count > 1000) {
    result = `${(count / 1000).toFixed(0)}К`
  } else {
    result = `${count}`
  }

  return result
}
