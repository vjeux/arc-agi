export default function getGroupings(array) {
  const indices = [];
  for (let i = 0; i < array.length; ++i) {
    indices.push(i);
  }
  return [[...indices], ...getGroupingsRec(indices, array.length)]
    .map((x) => x.toString())
    .filter(onlyUnique)
    .sort()
    .map((x) => x.split(",").map((y) => array[+y]));
}

function onlyUnique(value, index, array) {
  return array.indexOf(value) === index;
}

function getGroupingsRec(array, length) {
  let results = [];
  if (length === 1) {
    for (let i = 0; i < array.length; ++i) {
      results.push([array[i]]);
    }
    return results;
  }

  for (let i = 0; i < array.length; ++i) {
    const newArray = [...array.slice(0, i), ...array.slice(i + 1)];
    const groupings = getGroupingsRec(newArray, length - 1);
    results = [...results, ...groupings, newArray];
  }

  return results;
}
/*
// Input
[a, b, c]

// Length 3
[a, b, c]

// Length 2
[a, b]
[a, c]
[b, c]

// Length 1
[a]
[b]
[c]
*/
