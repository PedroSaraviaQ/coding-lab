//* The "class" keyword was just introduced in ES6
//* Class definition (methods don't have the "function" keyword)
class Country {
  constructor(language, currency) {
    this.language = language;
    this.currency = currency;
  }

  talk() {
    console.log(`In this country, people speak in ${this.language}`);
    this.language = "french";
    console.log(`In this country, people also speak in ${this.language}`);
  }

  getTypes() {
    console.log(this);

    //* Methods are stored in the prototype of the object
    const prototype = Object.getPrototypeOf(this);

    //! Node.js doesn't display non-enumerable properties (so use O.gOPN())
    console.log(Object.getOwnPropertyNames(prototype));
    return prototype;
  }
}

//* Instance of the class
const canada = new Country("english", "canadian dollar");

console.log(`${canada.language}: ${canada.currency}`);
canada.talk();
canada.getTypes();

//* Use the "extends" keyword when creating sub-classes
class EuropeanCountry extends Country {
  constructor(name, language, currency) {
    super(language, currency);
    this.name = name;
  }

  aboutMe() {
    const proto = super.getTypes();

    //* Another way to access the prototype
    console.log(Object.getOwnPropertyNames(proto.__proto__));

    //? The "prototype" property belongs to the constructors.
  }
}

const france = new EuropeanCountry("France", "french", "euro");
france.aboutMe();
