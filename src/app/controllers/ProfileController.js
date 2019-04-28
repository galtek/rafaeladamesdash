(function(){

  angular
    .module('app')
    .controller('ProfileController', [
      ProfileController
    ]);

  function ProfileController() {
    var vm = this;

    vm.user = {
      title: 'Galileo',
      email: 'rafael.rodriguez.adames81@gmail.com',
      firstName: 'Rafael',
      lastName: 'R. Adames' ,
      company: 'Developer | Programmer | Designer' ,
      address: 'St. De Diego 1A1' ,
      city: 'San Juan' ,
      state: 'PR' ,
      biography: 'I am Rafael, has currently 10+ years experienced in programming' +
      ' and designing software products. I am specialized in mobile applications iOS and Android',
      postalCode : '00923'
    };
  }

})();
