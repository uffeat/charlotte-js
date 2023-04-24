/* Returns a composite class with an inheritance hierarchy derived from Base and Mixin functions. */
const mixin = (BaseClass, ...Mixins) => {
  let CompositeClass;

  // Create first composite class (extended from BaseClass):
  CompositeClass = Mixins[0](BaseClass);

  // Successively update composite class (extended from previous version of composite class):
  for (let index = 1; index < Mixins.length; index++) {
    CompositeClass = Mixins[index](CompositeClass);
  }
  return CompositeClass;
};

export { mixin };
