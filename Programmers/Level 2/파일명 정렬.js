/**
 *
 * @param {array} files
 * @returns {array} the parameter array alphabetically and or numerically sorted
 */

const solution = files => {
  const _files = files.map((file, idx) => {
    const part = { head: '', number: '', tail: '', idx };
    let finished = false;

    [...file].forEach((letter, idx) => {
      if (finished) return;

      if (/[0-9]/.test(letter)) part.number += letter;
      else part.head += letter.toLowerCase();

      finished = /[0-9]/.test(letter) && (!/[0-9]/.test(file[idx + 1]) || part.number.length >= 5) ? true : false;
    });

    part.number = +part.number;
    return part;
  });

  _files.sort((a, b) => {
    if (a.head < b.head) return -1;
    else if (a.head === b.head && a.number < b.number) return -1;
  });

  return _files.map(({ idx }) => files[idx]);
};

// Test Cases:
// console.log(solution(['F-5 Freedom Fighter', 'B-50 Superfortress', 'A-10 Thunderbolt II', 'F-14 Tomcat']));
// console.log(solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']));
