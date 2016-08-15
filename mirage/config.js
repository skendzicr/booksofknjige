export default function() {

  this.get('/books', function() {
      return {
        data: [{
          type: 'books',
          id: 1,
          attributes: {
            title: 'Mi djeca s kolodvora ZOO',
            author: 'Christiane F',
            year: '1979',
            image: 'http://www.knjiga.ba/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/slike/mi_djeca_sa_stanice_zoo.jpg',
            blurb: 'Kristijana F. je probala hašiš kad je imala dvanaest godina, a sa trinaest je već postala zavisna od heroina. Svakog jutra je odlazila u školu, a popodne se, kao i ostali mladi narkomani, prostituisala na stanici Zoo i tako dolazila do novca za drogu. Njena majka skoro dve godine nije znala da joj ćerka vodi dvostruki život. Kristijana detaljno i potpuno opisuje sudbinu dece, koju javnost primećuje tek kada postanu žrtve droge.'
          }
        },
        {
          type: 'books',
        id: 2,
        attributes: {
          title: 'Orlovi rano lete',
          author: 'Branko Copic',
          year: '1959',
          image: 'http://d.gr-assets.com/books/1377815489l/18397552.jpg',
          blurb: "Orlovi rano lete is a Yugoslavian children's novel written by Branko Ćopić and published in 1959. It was made into a film in 1966."
        }
      },
      {
        type: 'books',
      id: 3,
      attributes: {
        title: 'Kekec',
        author: 'Josip Vandot',
        year: '1918',
        image: 'http://static.titlovi.com/images/posters/Kekec_9b2552a1.jpg',
        blurb: "Kekec is a Slovenian book fictional child hero character created by Josip Vandot in 1918. He is widely recognized as a Slovenian superhero and cultural icon."
      }
    },
    {
      type: 'books',
    id: 4,
    attributes: {
      title: 'Druzina Pere Kvrzice',
      author: 'Mato Lovrak',
      year: '1933',
      image: 'http://www.lektire.eu/wp-content/uploads/2011/09/DruzbaPereKvrzice.jpg',
      blurb: "Družba Pere Kvržice is a children's novel written by Croatian children's novelist Mato Lovrak."
    }
  },
  {
    type: 'books',
  id: 5,
  attributes: {
    title: 'Pionirska trojka',
    author: 'S.Zorkic',
    year: '1976',
    image: 'https://static.kupindoslike.com/PIONIRSKA-TROJKA-1_slika_O_35670297.jpg',
    blurb: "PIONIRSKA TROJKA KNJIGA II AUTOR - SRETENIJE ZORKIC Zanimljivo izdanje poznate knjige , verovatno jedno od prvih Izdavac Dnevnik , 94 strane , dzepni format 16x11 , cirilica , ilustrovana Ocuvana , kao na slici , korica malo iskrzana"
  }
},
      ]
      };
    });
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
}
