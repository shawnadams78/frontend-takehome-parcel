// add saved gems
export const addSaved = (add) => {
  try {
    const serializedSaved = localStorage.getItem('saved');

    if (serializedSaved === null) {
      const newList = JSON.stringify([add]);
      localStorage.setItem('saved', newList);
    } else {
      const list = JSON.parse(serializedSaved);
      list.push(add);
      const newList = JSON.stringify(list);
      localStorage.setItem('saved', newList);
    }
  } catch (err) {

  }
}

// get saved gems names
export const loadSaved = () => {
  try {
    const serializedSaved = localStorage.getItem('saved');
    if (serializedSaved === null) {
      return undefined;
    }
    return JSON.parse(serializedSaved);
  } catch (err) {
    return undefined;
  }
}

// remove saved gems
export const removeSaved = (remove) => {
  try {
    const serializedSaved = localStorage.getItem('saved');

    if (serializedSaved === null) {
      return undefined;
    } else {
      const list = JSON.parse(serializedSaved).filter(name => name !== remove);
      const newList = JSON.stringify(list);
      localStorage.setItem('saved', newList);
    }
  } catch (err) {

  }
}
