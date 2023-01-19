// Example
// const courseExample = {
//   id: 1,
//   title: 'React JS',
//   description: 'Belajar reactJs'
// };

const storageName = "reactJs";

const setItem = (value) => {
  const valueToString = JSON.stringify(value);
  localStorage.setItem(storageName, valueToString);
};

const getItem = () => {
  const data = localStorage.getItem(storageName);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

const storageManager = {
  set: setItem,
  get: getItem,
};

export default storageManager;
