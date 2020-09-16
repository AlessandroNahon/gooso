export function getInitials(string: any) {
  if (!string) return ''

  let initials = string.match(/\b\w/g) || []
  initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()

  return initials
}
