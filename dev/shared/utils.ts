export function parseList(list: string): string[] {
  const parsed = list
    .split('\n')
    .map((item) =>
      item
        .replaceAll(/^\d+\.\s+/g, '')
        .replaceAll(/^-\s/g, '')
        .trim(),
    )
    .filter((item) => item.length > 0);
  return parsed;
}

export function trimResponse(response: string): string {
  return response.trim().replaceAll('\n\n', ' ').replaceAll('\n', ' ');
}
