// src/utils.js
export function convertTemperature(temp, unit) {
  return unit === 'C' ? ((temp - 32) * 5) / 9 : temp;
}
