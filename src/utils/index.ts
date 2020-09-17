export const timeStampInSecs = (): number => Math.round(Date.now() / 1000);

const get = (key: string): any => {
  const value = localStorage.getItem(key);
  if (!value) return undefined;

  try {
    return JSON.parse(value);
  } catch (e) {
    return undefined;
  }
};

const set = (key: string, value: any): void => {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (e) {
    // ignore...
  }
};

export const storage = {
  set,
  get,
};

export const dotProduct = (vectorA: number[], vectorB: number[]): number => {
  const vectorDistance = vectorA.reduce(
    (acc, cur, idx) => acc + cur * vectorB[idx],
    0
  );
  return vectorDistance;
};
