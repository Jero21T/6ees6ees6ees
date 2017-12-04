class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor(){
  	this.age = 40
  	this.job = 'gamble'
  	this.color = 'grey'
  }

  //How to override methods?
  canFly(){
  	return true
   super.canFly()
  }
  forage(){
  	return 'I am too old, let me play cards instead'
  	super.forage()
  }
};
