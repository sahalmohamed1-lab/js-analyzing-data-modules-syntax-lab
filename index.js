require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: [],
    merge_date: "4/3/2026"
  };

  for (let arr of args) {
    combinedObject.users.push(...arr);
  }

  combinedObject.merged_date = new Date().toString('MM/dd/yyyy');

  return combinedObject;
}

const result = combineUsers(
  [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 }
  ],
  [
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ]
);

console.log(result);

module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};