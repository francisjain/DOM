var countries=[
    {
        country_name: 'Zimbabwe',
        population: 14862927,
        language: 'English',
        currency: 'Zambian kwacha'
      },
      {
        country_name: 'Zambia',
        population: 18383956,
        language: 'English',
        currency: 'Zambian kwacha'
      },
      {
        country_name: 'Yemen',
        population: 29825968,
        language: 'Arabic',
        currency: 'Yemeni rial'
      },
      {
        country_name: 'Western Sahara',
        population: 510713,
        language: 'Spanish',
        currency: 'Moroccan dirham'
      },
      {
        country_name: 'Wallis and Futuna',
        population: 11750,
        language: 'French',
        currency: 'CFP franc'
      },
      {
        country_name: 'Vietnam',
        population: 97338583,
        language: 'Vietnamese',
        currency: 'Vietnamese đồng'
      }
    
    ]

    //print all country name
    countries.forEach(con=>console.log(con.country_name))
    //print details of vietnam
    countries.filter(con=>con.country_name=="Vietnam").forEach(con=>console.log(con))
    //print details of country whose population is > 50000
    countries.filter(con=>con.population>50000).forEach(con=>console.log(con))
    //print details of country whose has highest population
    var con=countries.reduce((n1,n2)=>n1.population>n2.population?n1:n2);
    console.log("4",con);


