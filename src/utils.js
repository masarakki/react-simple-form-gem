const generateName = (object, name, order = null) => {
  if ( order ) {
    return `${object}[${name}(${order}i)]`;
  }
  return `${object}[$name]`;
};

export default { generateName };
