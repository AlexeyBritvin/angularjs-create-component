function transformToDashed(name) {
  const str = name.slice(1);
  return name[0].toLowerCase() + str.replace(/([A-Z])/g, (char) => '-' + char.toLowerCase());
}

function transformToCamelCase(name) {
  const parts = name.split('-').map(part => part[0].toUpperCase() + part.slice(1));

  return parts.join('');
}

function firstLetterToLowerCase(str) {
  return str[0].toLowerCase() + str.slice(1);
}

module.exports = {
  transformToDashed,
  transformToCamelCase,
  firstLetterToLowerCase
};
