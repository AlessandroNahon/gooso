export function getInitials(string: any) {
  let initials = string.match(/\b\w/g) || [];
  initials = ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();

  return initials;
}
