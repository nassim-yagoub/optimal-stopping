interface Props {
  rejection: number;
  lookback: number;
  numberOfTries: number;
}

export function calculateOptimalStopping({
  rejection,
  lookback: p,
  numberOfTries,
}: Props) {
  var r = numberOfTries;
  var accumulation = 0;
  const q = 1 - rejection - 0.0001;

  if (p === 0 && rejection === 0) {
    while (accumulation + 1 / r < 1) {
      accumulation += 1 / r;
      r--;
    }
    return r;
  } else if (q <= p) {
    return numberOfTries;
  }

  const goal = (q - p * (1 - q)) / (q * q);
  accumulation = 1;

  while (accumulation * (1 + (1 - q) / r) <= goal) {
    accumulation *= 1 + (1 - q) / r;
    r--;
  }

  return r;
}
