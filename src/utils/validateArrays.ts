export const isValidArray = (value: any): boolean => {
  return Array.isArray(value) && value.length > 0;
}


export const validateArrays = (arrays: Record<string, any>): boolean => {
  for (const key in arrays) {
    if (arrays.hasOwnProperty(key)) {
      if (!isValidArray(arrays[key])) {
        console.error(`Invalid array at key: ${key}`);
        return false;
      }
    }
  }
  return true;
};

