class Library {
  // options
  constructor(params) {
    this.name = params.name,
    this.city = params.city,
    this.value = params.value
  }
  // methods
  revision() {
    return this.value
  }
}

class Science extends Library {
  constructor(params) {
    super(params);
  }
}

const british = new Library({
  name: 'british',
  city: 'London',
  value: '13950'
})

console.log(`${british.name} library in ${british.city} has ${british.revision()} books`);

const scientific = new Science({
  name: 'german',
  city: 'Lindau',
  value: '5490'
})

console.log(`${scientific.name} library in ${scientific.city} has ${scientific.revision()} books`);