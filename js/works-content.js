// Data
const works = [
    {
        name: 'Guggenheim',
        hero: 'guggenheim', //.jpg || .webp
        description: 'Poster',
        title: 'The Guggenheim',
        info: ["Poster created for the 2018 Frank Lloyd Wright Foundation's show Timeless."],
        aditionalImages: [
            {
                name: 'guggenheim_det_1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'guggenheim_det_2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'guggenheim_det_3', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'guggenheim_det_4', //.jpg || .webp
                description: 'Poster detail',
            }
        ]

    },
    {
        name: 'Warhol',
        hero: 'warhol', //.jpg || .webp
        description: '',
        title: "Andy Warhol's studio",
        info: ['Illustration for the upcoming book Painters of the 20th century painting in their studios.'],
        aditionalImages: [
            {
                name: 'warhol_det_1', //.jpg || .webp
                description: 'Detail',
            },
            {
                name: 'warhol_det_2', //.jpg || .webp
                description: 'Detail',
            }
        ]

    },
    {
        name: 'Seoul',
        hero: 'seoul_1', //.jpg || .webp
        description: 'Picture credit: My Art Museum',
        title: "My Art Museum (Seoul)",
        info: ['Solo show at My Art Museum located in Seoul, South Korea (2021)'],
        aditionalImages: [
            {
                name: 'seoul_2', //.jpg || .webp
                description: 'Picture credit: My Art Museum',
            },
            {
                name: 'seoul_3', //.jpg || .webp
                description: 'Picture credit: My Art Museum',
            },
            {
                name: 'seoul_4', //.jpg || .webp
                description: 'Picture credit: My Art Museum',
            },
            {
                name: 'seoul_5', //.jpg || .webp
                description: 'Picture credit: My Art Museum',
            },
            {
                name: 'seoul_6', //.jpg || .webp
                description: 'Picture credit: My Art Museum',
            },
            {
                name: 'seoul_7', //.jpg || .webp
                description: 'Picture credit: My Art Museum',
            },
            {
                name: 'seoul_8', //.jpg || .webp
                description: 'Picture credit: My Art Museum',
            }
        ]

    },
    {
        name: 'FrenchDispatch',
        hero: 'tfd', //.jpg || .webp
        description: 'Book cover',
        title: 'The French Dispatch Book',
        info: ['Cover for the fifth volume of The New York Times best-seller The Wes Anderson Collection books.', 'To be released in 2022.'],
        aditionalImages: [
            {
                name: 'tfd_det_1', //.jpg || .webp
                description: 'Book cover detail',
            },
            {
                name: 'tfd_det_2', //.jpg || .webp
                description: 'Book cover detail',
            },
            {
                name: 'tfd_det_3', //.jpg || .webp
                description: 'Book cover detail',
            }
        ]

    },
    {
        name: 'RomeoAndJuliet',
        hero: 'romeojuliet', //.jpg || .webp
        description: 'Poster',
        title: 'Romeo and Juliet',
        info: ["Poster created for the 2019 Frank Lloyd Wright Foundation's show Timeless."],
        aditionalImages: [
            {
                name: 'romeojuliet_det_1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'romeojuliet_det_2', //.jpg || .webp
                description: 'Poster detail',
            }
        ]

    },
    {
        name: 'Atrain',
        hero: 'taketheatrain', //.jpg || .webp
        description: 'Take the A train - Dexter Gordon',
        title: 'Fake records covers',
        info: ['A series reinterpreting the covers of some most celebrated albums.'],
        aditionalImages: [
            {
                name: 'records1', //.jpg || .webp
                description: 'Never mind the bollocks - The Sex Pistols',
            },
            {
                name: 'records2', //.jpg || .webp
                description: 'On the Rooftop - The Beatles',
            },
            {
                name: 'records3', //.jpg || .webp
                description: 'On 52nd street - Charlie Parker',
            },
            {
                name: 'records4', //.jpg || .webp
                description: 'Meat is murder - The Smiths',
            },
            {
                name: 'records5', //.jpg || .webp
                description: 'London Calling - The Clash',
            },
            {
                name: 'records6', //.jpg || .webp
                description: 'Elvis Presley - Elvis Presley',
            },
            {
                name: 'records7', //.jpg || .webp
                description: 'Ascension - John Coltrane',
            },
            {
                name: 'records8', //.jpg || .webp
                description: 'Miles Smiles- Miles Davis',
            },
            {
                name: 'records9', //.jpg || .webp
                description: 'Duck Stab - The Residents',
            },
        ]

    },
    {
        name: 'Miles',
        hero: 'miles', //.jpg || .webp
        description: 'Miles Smiles- Miles Davis',
        title: 'Fake records covers',
        info: ['A series reinterpreting the covers of some most celebrated albums.'],
        aditionalImages: [
            {
                name: 'records1', //.jpg || .webp
                description: 'Never mind the bollocks - The Sex Pistols',
            },
            {
                name: 'records2', //.jpg || .webp
                description: 'On the Rooftop - The Beatles',
            },
            {
                name: 'records3', //.jpg || .webp
                description: 'On 52nd street - Charlie Parker',
            },
            {
                name: 'records4', //.jpg || .webp
                description: 'Meat is murder - The Smiths',
            },
            {
                name: 'records5', //.jpg || .webp
                description: 'London Calling - The Clash',
            },
            {
                name: 'records6', //.jpg || .webp
                description: 'Elvis Presley - Elvis Presley',
            },
            {
                name: 'records7', //.jpg || .webp
                description: 'Ascension - John Coltrane',
            },
            {
                name: 'records9', //.jpg || .webp
                description: 'Duck Stab - The Residents',
            },
            {
                name: 'records10', //.jpg || .webp
                description: 'Take the A train - Dexter Gordon',
            },
        ]

    },
    {
        name: 'HardBopTimes',
        hero: 'hardbop', //.jpg || .webp
        description: 'Poster',
        title: 'Hard Bop Times',
        info: ['A poster featuring some of the stars of the late 50s/early 60s Jazz movement.'],
        aditionalImages: [
            {
                name: 'hardbop_det_1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'hardbop_det_2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'hardbop_det_3', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'hardbop_det_4', //.jpg || .webp
                description: 'Poster detail',
            }
        ]

    },
    {
        name: 'NewYorker',
        hero: 'josh', //.jpg || .webp
        description: 'Editorial',
        title: 'The New Yorker',
        info: ["Illustration for The New Yorker's article about Josh Thomas' TV show."],
        aditionalImages: [
            {
                name: 'the_new_yorker', //.jpg || .webp
                description: '',
            },
        ]

    },
    {
        name: 'Rosetta',
        hero: 'rosetta', //.jpg || .webp
        description: '',
        title: 'Sister Rosetta',
        info: ['Illustration of Sister Rosetta Tharpe.'],
        aditionalImages: [
            // {
            //     name: 'the_new_yorker', //.jpg || .webp
            //     description: '',
            // },
        ]

    },
    {
        name: 'Witches',
        hero: 'rosemary', //.jpg || .webp
        description: 'Poster',
        title: 'All of them Witches',
        info: ["Poster inspired in the 1968 Roman Polanski's film Rosemary's Baby."],
        aditionalImages: [
            {
                name: 'rosemary_det_1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'rosemary_det_2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'rosemary_det_3', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'ViewMaxTer',
        hero: 'viewmaxter_1', //.jpg || .webp
        description: '3D Viewer',
        title: 'View-Max-Ter',
        info: ["The classic 3D viewer toy. There's seven different reels to choose from."],
        aditionalImages: [
            {
                name: 'viewmaxter_2', //.jpg || .webp
                description: 'Sci-fi movies',
            },
            {
                name: 'viewmaxter_3', //.jpg || .webp
                description: 'Seinfeld',
            },
            {
                name: 'viewmaxter_4', //.jpg || .webp
                description: 'E.T. The Extra-terrestrial',
            },
            {
                name: 'viewmaxter_5', //.jpg || .webp
                description: 'Twin Peaks',
            },
            {
                name: 'viewmaxter_6', //.jpg || .webp
                description: 'Wes Anderson movies',
            },
            {
                name: 'viewmaxter_7', //.jpg || .webp
                description: 'Frank Lloyd Wright',
            },
            {
                name: 'viewmaxter_8', //.jpg || .webp
                description: 'A young Max using the View-Max-ter',
            },
        ]

    },
    {
        name: 'IsleOfDogs',
        hero: 'isle-of-dogs_detail1', //.jpg || .webp
        description: 'Group Show',
        title: 'Isle of Dogs',
        info: ['A few images from the 2018 group show Isle of Dogs in NYC.'],
        aditionalImages: [
            {
                name: 'isle-of-dogs_detail2', //.jpg || .webp
                description: '',
            },
            {
                name: 'isle-of-dogs_detail3', //.jpg || .webp
                description: '',
            },
            {
                name: 'isle-of-dogs_detail4', //.jpg || .webp
                description: '',
            },
            {
                name: 'isle-of-dogs_detail5', //.jpg || .webp
                description: '',
            },
        ]

    },
    {
        name: 'Ferris',
        hero: 'ferris', //.jpg || .webp
        description: 'Poster',
        title: "Ferris Bueller's Day Off",
        info: ["Poster and playable board game inspired in the 1986 film Ferris Bueller's Day Off."],
        aditionalImages: [
            {
                name: 'ferris_det_1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'ferris_det_2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'ferris_det_3', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'Tenenbaums',
        hero: 'tenenbaums', //.jpg || .webp
        description: 'Poster',
        title: "111 Archer Avenue",
        info: ["Poster inspired in Wes Anderson's film The Royal Tenenbaums.', 'This illustration is also part of the book The Wes Anderson Collection, written by Matt Zoller Seitz and published by Abrams Books."],
        aditionalImages: [
            {
                name: 'tenenbaums_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'tenenbaums_det2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'tenenbaums_det3', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'BiggerBoat',
        hero: 'jaws', //.jpg || .webp
        description: 'Poster',
        title: "You're gonna need a bigger boat",
        info: ['Poster inspired in the 1975 film Jaws.', 'From the series Best Moments in Film History.'],
        aditionalImages: [
            {
                name: 'jaws_det1', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'Pete',
        hero: 'musicians_det4', //.jpg || .webp
        description: 'Pete Townshend',
        title: "Musicians in pen and ink ",
        info: ['A series of drawings portraying a few music stars.'],
        aditionalImages: [
            {
                name: 'musicians_det1', //.jpg || .webp
                description: 'Frank Zappa',
            },
            {
                name: 'musicians_det2', //.jpg || .webp
                description: 'Billie Holiday',
            },
            {
                name: 'musicians_det3', //.jpg || .webp
                description: 'Hank Williams',
            },
            {
                name: 'musicians_det5', //.jpg || .webp
                description: 'Johnny Cash',
            },
            {
                name: 'musicians_det6', //.jpg || .webp
                description: 'Johnny Ramone',
            },
            {
                name: 'musicians_det7', //.jpg || .webp
                description: 'Bob Dylan',
            },
        ]

    },
    {
        name: 'Hendrix',
        hero: 'hendrix', //.jpg || .webp
        description: 'Poster',
        title: "The Jimi Hendrix Experience",
        info: ['Poster inspired in all the guitars that Jimi Hendrix used along his short career.'],
        aditionalImages: [
            {
                name: 'hendrix_det1', //.jpg || .webp
                description: 'Red variant',
            },
            {
                name: 'hendrix_det2', //.jpg || .webp
                description: 'Green variant',
            },
        ]

    },
    {
        name: 'PulpFiction',
        hero: 'pulp_fiction', //.jpg || .webp
        description: 'Poster',
        title: "Pulp Fiction Action Figure Collection",
        info: ["An imaginary action figure collection inspired in Quentin Tarantino's film."],
        aditionalImages: [
            {
                name: 'pulpfiction_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'pulpfiction_det2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'pulpfiction_det3', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'pulpfiction_det4', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'pulpfiction_det5', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'pulpfiction_det6', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'Dave',
        hero: '2001_det2', //.jpg || .webp
        description: 'Poster',
        title: "I'm afraid Dave",
        info: ["A poster inspired in Stanley Kubrick's film 2001: A space Odyssey.', 'This poster is a 3D image viewable with red and blue spectacles."],
        aditionalImages: [
            {
                name: '2001_det1', //.jpg || .webp
                description: 'Poster as seen using red and blue spectacles',
            },
        ]

    },
    {
        name: 'Birds',
        hero: 'birds', //.jpg || .webp
        description: 'Poster',
        title: "The Birds",
        info: ["Poster inspired in Alfred Hitchcock's film from 1963."],
        aditionalImages: [
            {
                name: 'birds_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'birds_det2', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'SexPistols',
        hero: 'records1', //.jpg || .webp
        description: 'Never mind the bollocks - The Sex Pistols',
        title: 'Fake records covers',
        info: ['A series reinterpreting the covers of some most celebrated albums.'],
        aditionalImages: [
            {
                name: 'records2', //.jpg || .webp
                description: 'On the Rooftop - The Beatles',
            },
            {
                name: 'records3', //.jpg || .webp
                description: 'On 52nd street - Charlie Parker',
            },
            {
                name: 'records4', //.jpg || .webp
                description: 'Meat is murder - The Smiths',
            },
            {
                name: 'records5', //.jpg || .webp
                description: 'London Calling - The Clash',
            },
            {
                name: 'records6', //.jpg || .webp
                description: 'Elvis Presley - Elvis Presley',
            },
            {
                name: 'records7', //.jpg || .webp
                description: 'Ascension - John Coltrane',
            },
            {
                name: 'records8', //.jpg || .webp
                description: 'Miles Smiles- Miles Davis',
            },
            {
                name: 'records9', //.jpg || .webp
                description: 'Duck Stab - The Residents',
            },
            {
                name: 'records10', //.jpg || .webp
                description: 'Take the A train - Dexter Gordon',
            },
        ]

    },
    {
        name: 'WesAndersonCollection',
        hero: 'wes_anderson_collection_detail1', //.jpg || .webp
        description: 'The Wes Anderson Collection',
        title: 'The Wes Anderson Collection',
        info: ["Series of books about Wes Anderson's movies.", "Written by Matt Zoller Seitz."],
        aditionalImages: [
            {
                name: 'wes_anderson_collection_detail2', //.jpg || .webp
                description: 'The Wes Anderson Collection (interior pages)',
            },
            {
                name: 'wes_anderson_collection_detail3', //.jpg || .webp
                description: 'The Wes Anderson Collection (interior pages)',
            },
            {
                name: 'wes_anderson_collection_detail5', //.jpg || .webp
                description: 'The Grand Budapest Hotel',
            },
            {
                name: 'wes_anderson_collection_detail6', //.jpg || .webp
                description: 'The Grand Budapest Hotel (interior pages)',
            },
            {
                name: 'wes_anderson_collection_detail4', //.jpg || .webp
                description: 'The Grand Budapest Hotel (interior pages)',
            },
            {
                name: 'wes_anderson_collection_detail7', //.jpg || .webp
                description: 'The Grand Budapest Hotel (interior pages)',
            },
            {
                name: 'wes_anderson_collection_detail8', //.jpg || .webp
                description: 'Bad Dads',
            },
            {
                name: 'wes_anderson_collection_detail9', //.jpg || .webp
                description: 'Bad Dads',
            },
            {
                name: 'wes_anderson_collection_detail10', //.jpg || .webp
                description: '',
            },
            {
                name: 'wes_anderson_collection_detail11', //.jpg || .webp
                description: 'Isle of Dogs',
            },
        ]

    },
    {
        name: 'CocktailParty',
        hero: 'cutout1', //.jpg || .webp
        description: 'Poster',
        title: 'The cocktail party cut-out set',
        info: ["Along with The Sunday Barbecue Cut-Out Set it's one of the earliest posters I've made."],
        aditionalImages: [
            {
                name: 'cutout_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'cutout_det2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'cutout_det3', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'cutout_det4', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'cutout2', //.jpg || .webp
                description: 'The Sunday Barbecue Cut-Out Set Poster',
            },
        ]

    },
    {
        name: 'SketchBook',
        hero: 'moleskine_1', //.jpg || .webp
        description: '',
        title: 'Sketch book pages',
        info: ['A few pages from the many sketch books I have.'],
        aditionalImages: [
            {
                name: 'moleskine_2', //.jpg || .webp
                description: '',
            },
            {
                name: 'moleskine_3', //.jpg || .webp
                description: '',
            },
            {
                name: 'moleskine_4', //.jpg || .webp
                description: '',
            },
            {
                name: 'moleskine_5', //.jpg || .webp
                description: '',
            },
            {
                name: 'moleskine_6', //.jpg || .webp
                description: '',
            },
            {
                name: 'moleskine_7', //.jpg || .webp
                description: '',
            },
            {
                name: 'moleskine_8', //.jpg || .webp
                description: '',
            },
        ]

    },
    {
        name: 'TenGreatYears',
        hero: 'ten_great_years', //.jpg || .webp
        description: 'Poster',
        title: 'Ten Great Years',
        info: ['An image portraying the many looks of the fabulous four.'],
        aditionalImages: [
            // {
            //     name: '',
            //     description: '',
            // },
        ]

    },
    {
        name: 'Rug',
        hero: 'rug', //.jpg || .webp
        description: 'Poster',
        title: "The Dude's Rug",
        info: ['A poster inspired in the 1998 The Big Lebowski film.', '(It really ties the room together.)'],
        aditionalImages: [
            {
                name: 'rug_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'rug_det2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'rug_det3', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'LongTimeAgo',
        hero: 'Along_time_ago', //.jpg || .webp
        description: 'Poster',
        title: "A long time ago",
        info: ['A poster inspired in the three first original Star Wars films.'],
        aditionalImages: [
            // {
            //     name: '',
            //     description: '',
            // },
        ]

    },
    {
        name: 'Leon',
        hero: 'leon', //.jpg || .webp
        description: 'Poster',
        title: "Leon",
        info: ["Poster inspired in Luc Besson's 1994 film Leon, The Professional, starring Natalie Portman, Jean Reno, Gary Oldman and Danny Aiello."],
        aditionalImages: [
            {
                name: 'leon_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'leon_det2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'leon_det3', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'Belafonte',
        hero: 'belafonte', //.jpg || .webp
        description: 'Poster',
        title: "Belafonte",
        info: ["Poster inspired in Wes Anderson's film The Life Aquatic.', 'This illustration is also part of the book The Wes Anderson Collection, written by Matt Zoller Seitz and published by Abrams Books."],
        aditionalImages: [
            {
                name: 'belafonte_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'belafonte_det2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'belafonte_det3', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'PlayingCards',
        hero: 'playing_cards_1', //.jpg || .webp
        description: "Wes Anderson Playing Card Set Vol.2",
        title: "Playing Cards",
        info: ['Limited editions of playing cards inspired in movies and musicians.'],
        aditionalImages: [
            {
                name: 'playing_cards_2', //.jpg || .webp
                description: "Wes Anderson Playing Card Set Vol.1",
            },
            {
                name: 'playing_cards_3', //.jpg || .webp
                description: "Wes Anderson Playing Card Set Vol.1",
            },
            {
                name: 'playing_cards_4', //.jpg || .webp
                description: "The Beatles Ten Great Years Playing Cards",
            },
            {
                name: 'playing_cards_5', //.jpg || .webp
                description: "A Galaxy Far, Far Away Playing Cards",
            },
            {
                name: 'playing_cards_6', //.jpg || .webp
                description: "A Galaxy Far, Far Away Playing Cards",
            },
        ]

    },
    {
        name: 'NoMaam',
        hero: 'no_maam', //.jpg || .webp
        description: 'Poster',
        title: "No maam, we're musicians",
        info: ['Poster inspired in the 1980 film the Blues Brothers, starring Dan Aykroyd and John Belushi.'],
        aditionalImages: [
            {
                name: 'no_maam_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'no_maam_det2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'no_maam_det3', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'England',
        hero: 'England', //.jpg || .webp
        description: 'Poster',
        title: "England 932 A.D.",
        info: ['Poster inspired in the 1975 film Monty Python and the Holy Grail.'],
        aditionalImages: [
            {
                name: 'England_det1', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'England_det2', //.jpg || .webp
                description: 'Poster detail',
            },
            {
                name: 'England_det3', //.jpg || .webp
                description: 'Poster detail',
            },
        ]

    },
    {
        name: 'LonelyPhoneBooth',
        hero: 'lonely-phone-booth-detail1', //.jpg || .webp
        description: 'Book',
        title: "The Lonely Phone Booth",
        info: ['A picture book about the last phone booth in New York City.', 'Written by Peter Ackerman.'],
        aditionalImages: [
            {
                name: 'lonely-phone-booth-detail2', //.jpg || .webp
                description: 'Book detail',
            },
            {
                name: 'lonely-phone-booth-detail3', //.jpg || .webp
                description: 'Book detail',
            },
            {
                name: 'lonely-phone-booth-detail4', //.jpg || .webp
                description: 'Another book from the same series',
            },
            // {
            //     name: 'lonely-phone-booth-detail5', //.jpg || .webp
            //     description: 'Book detail',
            // },
        ]

    },
    {
        name: 'MagneticDolls',
        hero: 'magnetic_dolls', //.jpg || .webp
        description: '',
        title: "Bill's Magnetic Dolls Collection",
        info: ['A limited edition of fridge magnets inspired in the many characters of actor Bill Murray.'],
        aditionalImages: [
            // {
            //     name: '',
            //     description: '',
            // },
        ]

    },
    {
        name: 'Puzzle',
        hero: 'puzzle_1', //.jpg || .webp
        description: "Le Fabuleux Destin D'Amélie Poulin",
        title: "Puzzles",
        info: ["A limited edition of puzzles made especially for Max's 2017 solo show in NYC."],
        aditionalImages: [
            {
                name: 'puzzle_2', //.jpg || .webp
                description: "Le Fabuleux Destin D'Amélie Poulin",
            },
            {
                name: 'puzzle_3', //.jpg || .webp
                description: 'All Of Them Witches',
            },
            {
                name: 'puzzle_4', //.jpg || .webp
                description: '',
            },
        ]

    },
    {
        name: 'ExtremeOpposites',
        hero: 'Too_old', //.jpg || .webp
        description: "",
        title: "Extreme Opposites",
        info: ['A picture book written and illustrated by Max in 2013.', 'It was also published in Italy under the name of Troppo Opposti.', '*The last two images Too full/Too empty have never been published.'],
        aditionalImages: [
            {
                name: 'Too_young', //.jpg || .webp
                description: '',
            },
            {
                name: 'Too_hard', //.jpg || .webp
                description: '',
            },
            {
                name: 'Too_soft', //.jpg || .webp
                description: '',
            },
            {
                name: 'Too_narrow', //.jpg || .webp
                description: '',
            },
            {
                name: 'Too_wide', //.jpg || .webp
                description: '',
            },
            {
                name: 'Too_quiet', //.jpg || .webp
                description: '',
            },
            {
                name: 'Too_noisy', //.jpg || .webp
                description: '',
            },
            {
                name: 'Too_full', //.jpg || .webp
                description: '',
            },
            {
                name: 'Too_empty', //.jpg || .webp
                description: '',
            },
        ]

    },
    {
        name: 'Maxtape',
        hero: 'maxtape', //.jpg || .webp
        description: '',
        title: "Maxtape",
        info: ['Pictures from Max’s 2017 solo show at Spoke Art Gallery, New York City.'],
        aditionalImages: [
            {
                name: 'show2017_1', //.jpg || .webp
                description: 'Photos courtesy of Lanee Bird: www.laneebird.com',
            },
            {
                name: 'show2017_2', //.jpg || .webp
                description: 'Photos courtesy of Lanee Bird: www.laneebird.com',
            },
            {
                name: 'show2017_3', //.jpg || .webp
                description: 'Photos courtesy of Lanee Bird: www.laneebird.com',
            },
            {
                name: 'show2017_4', //.jpg || .webp
                description: 'Photos courtesy of Lanee Bird: www.laneebird.com',
            },
            {
                name: 'show2017_5', //.jpg || .webp
                description: 'Photos courtesy of Lanee Bird: www.laneebird.com',
            },
            {
                name: 'show2017_6', //.jpg || .webp
                description: 'Photos courtesy of Lanee Bird: www.laneebird.com',
            },
        ]

    },
];


// Function definitions

const turnOffPreloader = () => {
    const preloader = document.querySelector("#pre-loader");
    preloader.style.display = "none";

    const main = document.querySelector(".main");
    main.style.display = "block";
}

const loadContentFromUrl = () => {
    let hash = window.location.hash;

    if (hash != ''){
        hash = hash.replace('#', '');

        let workSelected = works.find(obj => obj.name === hash);

        loadContent(workSelected);
    }
}

const checkUrlAndCloseWindow = () => {
    let hash = window.location.hash;
    if (hash == ''){
        closeAndResetWindow();
    }
}

const fetchAndLoadWork = (event) => {
    let workSelected = event.currentTarget.getAttribute('data-work');

    workSelected = works.find(obj => obj.name === workSelected);

    loadContent(workSelected);
}

const removeKeyboardFocus = () => {
    const galleryImages = document.querySelectorAll(".main-works .row .col");
    galleryImages.forEach((image) => {
        image.setAttribute("tabindex", "-1");
    });
}

const generateInfoParagraphs = (work) => {
    let info = '';
    for (let i = 0; i < work.info.length; i++) {
        info += '<p>' + work.info[i] + '</p>';
    }

    return info;
}

const generateThumbnails = (work) =>{
    let aditionalImages = '<div class="image active" style="background-image: url(images/media-works/thumbnails/' + work.hero + '.jpg);"> <p style="display:none;">' + work.description + '</p></div>';

    for (let i = 0; i < work.aditionalImages.length; i++) {
            aditionalImages += '<div class="image" style="background-image: url(images/media-works/thumbnails/' + work.aditionalImages[i].name + '.jpg);"> <p style="display:none;">' + work.aditionalImages[i].description + '</p></div>';
    }

    return aditionalImages;
}

const generateContent = (work, paragraphsInfo, thumbnails) => {
    let content = `
        <div class="content-container">

            <div class="pre-loader pre-loader-content">
            <div class="loader">
                <svg viewBox="25 25 50 50">
                <circle cx="50" cy="50" r="20"></circle>
                </svg>
            </div>
            </div>

            <div class="content" style="display:none;">

                <div class="image-container">
                    <div class="image">

                        <picture>
                        <source id="sourceWebp" srcset="images/media-works/content/${work.hero}.webp" type="image/webp">
                        <source id="sourceJpg" srcset="images/media-works/content/${work.hero}.jpg" type="image/jpeg">
                        <img id="srcImg" src="images/media-works/content/${work.hero}.jpg" alt="${work.title} ${work.description}">
                        </picture>

                        <div class="">
                            <p class="description">${work.description}</p>
                        </div>
                    </div>
                </div>

                <div class="info-container">

                    <div class="info">

                        <div class="button-container">
                            <button type="button" class="close">
                                <img aria-hidden="true" src="icons/close-outline.svg" alt="Menu icon.">
                            </button>
                        </div>

                        <p class="title">${work.title}</p>

                        ${paragraphsInfo}
                    </div>


                    <p class="more" ${work.aditionalImages.length > 0 ? '' : 'style="display:none;"'}>More images:</p>
                    <div class="aditional-images" ${work.aditionalImages.length > 0 ? '' : 'style="display:none;"'}>
                        ${thumbnails}
                    </div>

                </div>

                <div class="controls-container" ${work.aditionalImages.length > 0 ? '' : 'style="display:none;"'}>
                    <div class="controls">
                        <button aria-label="Previous image" type="button" name="button" class="previous">
                            <img aria-hidden="true" src="icons/cheveron-outline-left.svg" alt="Left icon.">
                        </button>

                        <button aria-label="Next image" type="button" name="button" class="next">
                            <img aria-hidden="true" src="icons/cheveron-outline-right.svg" alt="Close menu icon.">
                        </button>
                    </div>
                </div>

            </div>
        </div>
    `;

    return content;
}

const turnOffContentPreloader = () => {
    setTimeout(() => {

        document.querySelector(".pre-loader-content").style.display = "none";

        document.querySelector(".content").style.display = "flex";

    }, 500);
}

const closeAndResetWindow = () => {
    document.querySelector("html").style.overflowY = "scroll";

    let contentContainer = document.querySelector(".content-container");
    contentContainer.remove();

    document.onkeydown = null;

    window.history.replaceState({}, '', 'work.html');

    let galleryImages = document.querySelectorAll(".main-works .row .col");
    galleryImages.forEach((image) => {
        image.removeAttribute("tabindex");
    });
}

const selectImage = (event) => {
    const heroImage = document.querySelector(".image picture");

    const sourceWebp = document.querySelector("#sourceWebp");
    const sourceJpg = document.querySelector("#sourceJpg");
    const srcImg = document.querySelector("#srcImg");

    // Avoid image transition
    srcImg.style.transitionProperty = "none";
    srcImg.style.right = "unset";
    srcImg.style.left = "unset";

    const aditionalImages = document.querySelectorAll(".aditional-images .image");

    aditionalImages.forEach((element) => {
        element.classList.remove("active");
    });

    event.currentTarget.classList.add("active");

    const to = (event.currentTarget.style.backgroundImage.length) -6;
    const url = event.currentTarget.style.backgroundImage.slice(35, to);

    const description = event.currentTarget.firstElementChild.innerHTML;

    sourceWebp.srcset = "images/media-works/content/" + url + ".webp";
    sourceJpg.srcset = "images/media-works/content/" + url + ".jpg";
    srcImg.src = "images/media-works/content/" + url + ".jpg";

    heroImage.nextElementSibling.firstElementChild.innerHTML = description;
}

const next = () => {
    const heroImage = document.querySelector(".image img");
    // reset properties
    heroImage.style.right = "unset";
    heroImage.style.left = "unset";

    const aditionalImages = document.querySelectorAll(".aditional-images .image");

    const currentSelected = document.querySelector(".image.active");

    let nextImage = currentSelected.nextElementSibling;

    if (nextImage == null){
        nextImage = aditionalImages[0];
    }

    aditionalImages.forEach((element) => {
        element.classList.remove("active");
    });

    nextImage.classList.add("active");

    const to = (nextImage.style.backgroundImage.length) -6;
    const url = nextImage.style.backgroundImage.slice(35, to);

    const description = nextImage.firstElementChild.innerHTML;

    // set transition
    heroImage.style.opacity = "0";
    heroImage.style.transitionProperty = "none";
    heroImage.style.right = "-100%";
    heroImage.style.transitionProperty = "right";

    const sourceWebp = document.querySelector("#sourceWebp");
    const sourceJpg = document.querySelector("#sourceJpg");
    const srcImg = document.querySelector("#srcImg");

    sourceWebp.srcset = "images/media-works/content/" + url + ".webp";
    sourceJpg.srcset = "images/media-works/content/" + url + ".jpg";
    srcImg.src = "images/media-works/content/" + url + ".jpg";


    srcImg.onload = () => {
        setTimeout(() => {
            heroImage.style.opacity = "1";
            heroImage.style.right = "0%";
        }, 200);
    };


    heroImage.parentElement.nextElementSibling.firstElementChild.innerHTML = description;
}

const previous = () => {
    const heroImage = document.querySelector(".image img");
    // reset properties
    heroImage.style.right = "unset";
    heroImage.style.left = "unset";

    const aditionalImages = document.querySelectorAll(".aditional-images .image");

    const currentSelected = document.querySelector(".image.active");

    let previousImage = currentSelected.previousElementSibling;

    if (previousImage == null){
        const lastImage = (aditionalImages.length) -1;
        previousImage = aditionalImages[lastImage];
    }

    aditionalImages.forEach((element) => {
        element.classList.remove("active");
    });

    previousImage.classList.add("active");

    const to = (previousImage.style.backgroundImage.length) -6;
    const url = previousImage.style.backgroundImage.slice(35, to);

    const description = previousImage.firstElementChild.innerHTML;

    // set transition
    heroImage.style.opacity = "0";
    heroImage.style.transitionProperty = "none";
    heroImage.style.left = "-100%";
    heroImage.style.transitionProperty = "left";

    const sourceWebp = document.querySelector("#sourceWebp");
    const sourceJpg = document.querySelector("#sourceJpg");
    const srcImg = document.querySelector("#srcImg");

    sourceWebp.srcset = "images/media-works/content/" + url + ".webp";
    sourceJpg.srcset = "images/media-works/content/" + url + ".jpg";
    srcImg.src = "images/media-works/content/" + url + ".jpg";


    srcImg.onload = () => {
        setTimeout(() => {
            heroImage.style.opacity = "1";
            heroImage.style.left = "0%";
        }, 200);
    };

    heroImage.parentElement.nextElementSibling.firstElementChild.innerHTML = description;
}

const swipeImage = () => {
    let image = document.querySelector(".main-works .image-container .image img");

    if (document.querySelector(".aditional-images").children.length > 1){
        let touchstartX = 0;
        let touchendX = 0;

        image.addEventListener('touchstart', function(event){
            touchstartX = event.changedTouches[0].screenX;
        }, {passive: true});

        image.addEventListener('touchend', function(event) {
            touchendX = event.changedTouches[0].screenX;
            handleGesture(touchendX, touchstartX);
        }, {passive: true});
    }
}

const handleGesture = (touchendX, touchstartX) => {
    if (touchendX < touchstartX && (touchstartX - touchendX) > 50 ) {
        next();
    }
    if (touchendX > touchstartX && (touchendX - touchstartX > 50) ) {
        previous();
    }
}

const loadContent = (work) => {

    removeKeyboardFocus();

    const info = generateInfoParagraphs(work);

    const aditionalImages = generateThumbnails(work);

    const content = generateContent(work, info, aditionalImages);

    const mainWorks = document.querySelector(".main-works");
    mainWorks.insertAdjacentHTML('beforeend', content);

    // Avoid main gallery to scroll in the background
    document.querySelector("html").style.overflowY = "hidden";

    turnOffContentPreloader();


    // Add content functionalities:

    // Close window by clicking outside the content container
    const contentContainer = document.querySelector(".content-container");

    contentContainer.addEventListener('click', (event) => {
        if (event.target.matches(".content-container")){
            closeAndResetWindow();
        }
    });

    // Close window by clicking X icon
    const close = document.querySelector(".button-container button");
    close.addEventListener('click', closeAndResetWindow);

    // Change hero image by clicking an aditional image
    const aditionalImagesContent = document.querySelectorAll(".aditional-images .image");

    aditionalImagesContent.forEach((image) => {
        image.addEventListener("click", selectImage);
    });

    // Change hero image by clicking < / >  icons
    const nextArrow = document.querySelector(".controls .next");
    nextArrow.addEventListener('click', next);

    const previousArrow = document.querySelector(".controls .previous");
    previousArrow.addEventListener('click', previous);

    // Key events
    document.onkeydown = (e) => {
        const key = e.key;

        if (key === 'ArrowLeft' && work.aditionalImages.length > 0){
            previous();
        }
        if (key === 'ArrowRight' && work.aditionalImages.length > 0){
            next();
        }
        if (key === 'Escape'){
            closeAndResetWindow();
        }
    }

    // Touch events for swiping image
    swipeImage();
}


// Code execution

window.onload = () =>  {

    loadContentFromUrl();

    // Set viewport for mobile
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    turnOffPreloader();
};


window.onhashchange = () => {
    // In case back button is clicked
    checkUrlAndCloseWindow();
};


const galleryImages = document.querySelectorAll(".main-works .row .col");

galleryImages.forEach((image) => {
    image.addEventListener("click", fetchAndLoadWork);
});


// Lazy loading images:
if ("IntersectionObserver" in window) {

    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              let pictureSourceDesktopWebp = entry.target.firstElementChild.firstElementChild;

              if(pictureSourceDesktopWebp.srcset == ''){
                  pictureSourceDesktopWebp.srcset = pictureSourceDesktopWebp.dataset.srcset;
              }

              let pictureSourceDesktopJpeg = entry.target.firstElementChild.firstElementChild.nextElementSibling;

              if(pictureSourceDesktopJpeg.srcset == ''){
                  pictureSourceDesktopJpeg.srcset = pictureSourceDesktopJpeg.dataset.srcset;
              }

              let pictureSourceMobileWebp = entry.target.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling;

              if(pictureSourceMobileWebp.srcset == ''){
                  pictureSourceMobileWebp.srcset = pictureSourceMobileWebp.dataset.srcset;
              }

              let pictureSourceMobileJpeg = entry.target.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;

              if(pictureSourceMobileJpeg.srcset == ''){
                  pictureSourceMobileJpeg.srcset = pictureSourceMobileJpeg.dataset.srcset;
              }

              let pictureImg = entry.target.firstElementChild.lastElementChild;

              if(pictureImg.src == ''){
                  pictureImg.src = pictureImg.dataset.src;
              }

              observer.unobserve(entry.target);
            }
          });
      }, {root: document.querySelector('.main.main-works'), rootMargin: "0px 0px 500px 0px"});

      document.querySelectorAll('.col').forEach(col => { observer.observe(col) });

} else {

    let images = document.querySelectorAll('.col picture');

    images.forEach(function(image) {

        let pictureSource = image.firstElementChild;

        let pictureImg = image.lastElementChild;


        if(pictureSource.srcset == ''){
            pictureSource.srcset = pictureSource.dataset.srcset;
        }

        if(pictureImg.src == ''){
            pictureImg.src = pictureImg.dataset.src;
        }

    });
}
