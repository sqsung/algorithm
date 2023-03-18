function solution(m, n, startX, startY, balls) {
  const checkDiagonal = ([x1, y1], [x2, y2], [x3, y3]) => (y2 - y1) / (x2 - x1) === (y3, y1) / (x3, x1);
  const getDistanceSqrt = ([x1, y1], [x2, y2]) => Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2;

  const top = ([x1, y1], [x2, y2]) => getDistanceSqrt([x1, y1], [x2, (n - y2) * 2 + y2]);
  const bottom = ([x1, y1], [x2, y2]) => getDistanceSqrt([x1, y1], [x2, y2 * -1]);
  const left = ([x1, y1], [x2, y2]) => getDistanceSqrt([x1, y1], [x2 * -1, y2]);
  const right = ([x1, y1], [x2, y2]) => getDistanceSqrt([x1, y1], [(m - x2) * 2 + x2, y2]);

  const leftTop = ([x1, y1], [x2, y2]) => getDistanceSqrt([x1, y1], [x2 * -1, (n - y2) * 2 + y2]);
  const rightBottom = ([x1, y1], [x2, y2]) => getDistanceSqrt([x1, y1], [(m - x2) * 2 + x2, y2 * -1]);
  const rightTop = ([x1, y1], [x2, y2]) => getDistanceSqrt([x1, y1], [(m - x2) * 2 + x2, (n - y2) * 2 + y2]);
  const leftBottom = ([x1, y1], [x2, y2]) => getDistanceSqrt([x1, y1], [x2 * -1, y2 * -1]);

  return balls.map(([x, y]) => {
    let min = Infinity;

    // 사선 1
    if (checkDiagonal([startX, startY], [x, y], [0, 10])) {
      // 좌상 모서리
      if (startX < x) {
        min = Math.min(min, leftTop([startX, startY], [x, y]));
      }

      // 우하 모서리
      if (startX > x) {
        min = Math.min(min, rightBottom([startX, startY], [x, y]));
      }
    }

    // 사선 2
    if (checkDiagonal([startX, startY], [x, y], [0, 0])) {
      // 우상 모서리
      if (startX > x) {
        min = Math.min(min, rightTop([startX, startY], [x, y]));
      }

      // 좌하 모서리
      if (startX < x) {
        min = Math.min(min, leftBottom([startX, startY], [x, y]));
      }
    }

    // 상단 벽
    if (startX !== x || startY > y) {
      min = Math.min(min, top([startX, startY], [x, y]));
    }

    // 하단 벽
    if (startX !== x || startY < y) {
      min = Math.min(min, bottom([startX, startY], [x, y]));
    }

    // 좌측 벽
    if (startY !== y || startX < x) {
      min = Math.min(min, left([startX, startY], [x, y]));
    }

    // 우측 벽
    if (startY !== y || startX > x) {
      min = Math.min(min, right([startX, startY], [x, y]));
    }

    return min;
  });
}
