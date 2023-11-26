export function calculateTimePart(time, divider, remainder) {
  const part = Math.floor(time / divider) % remainder;
  const tens = Math.floor(part / 10);
  const ones = part % 10;
  return { tens, ones };
}