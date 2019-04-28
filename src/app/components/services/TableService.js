(function(){
  'use strict';

  angular.module('app')
        .service('tableService', [
        '$q',
      tableService
  ]);

  function tableService($q){
    var tableData = [
      {
        name: 'RISENWallet',
        issue: 'Biometric Authenticator',
        progress: 75,
        status: 'iOS Swift',
        class: 'orange'
      },
      {
        name: 'Cafe Estudio',
        issue: 'Company Web Page',
        progress: 100,
        status: 'PHP Wordpress',
        class: 'md-accent'
      },
      {
        name: 'Klient',
        issue: 'CRM',
        progress: 100,
        status: 'Android Kotlin',
        class: 'md-accent'
      },
      {
        name: 'SecMa',
        issue: 'Building Managment',
        progress: 100,
        status: 'Python Django',
        class: 'md-accent'
      },
      {
        name: 'Letras&Tintas',
        issue: 'Company Web Page',
        progress: 100,
        status: 'PHP Wordpress',
        class: 'md-accent'
      },
      {
        name: 'MigoIQ',
        issue: 'BLE Beacon',
        progress: 80,
        status: 'iOS Swift',
        class: 'orange'
      },
      {
        name: 'FOG',
        issue: 'Water Dept.: Inspection Managment',
        progress: 85,
        status: 'VB.net',
        class: 'orange'
      },
      {
        name: 'CERES',
        issue: 'Debris and Reconstruction',
        progress: 75,
        status: 'C#',
        class: 'orange'
      },
      {
        name: 'United IFA APP',
        issue: 'Insurance Loan',
        progress: 35,
        status: 'Java JSP',
        class: 'md-warn'
      },
      {
        name: 'toTrip',
        issue: 'BLE Beacon',
        progress: 100,
        status: 'iOS Swift',
        class: 'md-accent'
      },
      {
        name: 'Spotery',
        issue: 'Rent Location',
        progress: 10,
        status: 'Java Jasper PDF',
        class: ''
      },
      {
        name: 'JofCo Validzone',
        issue: 'Company Web Page',
        progress: 100,
        status: 'HTML/CSS',
        class: 'md-accent'
      },
      {
        name: 'Clemente.com',
        issue: 'Company Web Page',
        progress: 100,
        status: 'PHP Wordpress',
        class: 'md-accent'
      },
      {
        name: 'ProjectOX',
        issue: 'Movie Application',
        progress: 80,
        status: 'MacOS ObjC',
        class: 'orange'
      },
      {
        name: 'IvuLoto',
        issue: 'Treasury Dept.: POS tax',
        progress: 65,
        status: 'C++',
        class: 'orange'
      }
    ];

    function PickRandom() {
      return Object.assign({}, tableData[Math.floor(Math.random()*tableData.length)]);
    }

    return {
      loadAllItems : function() {
        return $q.when(tableData);
      },
      /**
       * Query expects that `limit`,`page`, and `order` fields be present
       */
      loadByPagination: function (query) {
        query = query || {limit:10,page:1};

        var list = [];
        var start = (query.page-1)*query.limit;
        var end = start + query.limit;
        for (var i = start; i < end; i++) {
          var f = PickRandom();
          f.id = i+1;
          list.push(f);
        }
        return $q.when({items:list,count:800});
      }
    };
  }
})();
