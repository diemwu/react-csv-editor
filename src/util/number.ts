export function toNumber(input: string | null): number | null {
  if (input === null) {
    return null;
  }

  const number = Number(input);

  return isNaN(number) ? null : number;
}
