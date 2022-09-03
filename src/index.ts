const flatten = (ob: object) => {
  const result = {};

  for (const i in ob) {
    if (!ob.hasOwnProperty(i)) continue;

    if ((typeof ob[i]) == 'object' && ob[i] !== null) {
      const flatObject = flatten(ob[i]);
      for (const x in flatObject) {
        if (!flatObject.hasOwnProperty(x)) continue;

        result[i + '.' + x] = flatObject[x];
      }
    } else {
      result[i] = ob[i];
    }
  }
  return result;
};

export default flatten;
