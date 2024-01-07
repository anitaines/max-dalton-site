// Data
const news = [
    {
        name: "matisse", // 48
        date: "December 31, 2023",
        dateTime: "2023-12-31",
        hero: "matisse-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of Henri Matisse painting in his studio.",
        title: "Matisse",
        content: "<p>Henri Matisse was born the last day of 1869. At the age of seventy-two, he became reliant on a wheelchair and since then he often worked from his bed, making drawings and collages. He used a two-metre-long bamboo cane tipped with charcoal to make sketches for the decoration of the Chapelle du Rosaire de Vence on the walls of his room.</p> " +
        "<p>This and more studio portraits are part of my new book <i>Painters of the 20th Century Painting in their Studios</i>. Written by Edel Cassidy and published by Paragon Books.</p>" +
        "<p>Available now at <a target='_blank' rel='noreferrer' href='https://www.instagram.com/paragon_books/'>@paragon_books</a> and the major book stores. If you're in Europe you can order it from <a target='_blank' rel='noreferrer' href='https://www.instagram.com/anthologymagazine/'>@anthologymagazine</a>.</p>",
        aditionalImages: [
            {
                name: "matisse-2" //.jpg || .webp
            },
            {
                name: "matisse-3" //.jpg || .webp
            }
        ]
    },
    {
        name: "happyHolidays", // 47
        date: "December 25, 2023",
        dateTime: "2023-12-25",
        hero: "happy-holidays", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustration of Santa having a tea break.",
        title: "Happy Holidays",
        content: "<p>A few years back I've made this drawing of Santa having a tea break for a cover of The New Yorker. Unfortunately it wasn't accepted but I still think it's a nice illustration, so I picked it up from the bin and here I share it with you today.</p>" +
        "<p>Happy Holidays to all of you! &#127876;</p>",
        aditionalImages: []
    },
    {
        name: "kandinsky", // 46
        date: "December 16, 2023",
        dateTime: "2023-12-08",
        hero: "kandinsky-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of Wassily Kandinsky painting in his studio.",
        title: "Kandinsky",
        content: "<p>Wassily Kandinsky was born this day in 1866 in Moscow. He moved to Paris when the Nazis closed the Bauhaus to finally establish his studio in Neuilly-sur-Seine.</p> " +
        "<p>This and more studio portraits are part of my new book <i>Painters of the 20th Century Painting in their Studios</i>. Written by Edel Cassidy and published by Paragon Books.</p>" +
        "<p>Available now at <a target='_blank' rel='noreferrer' href='https://www.instagram.com/paragon_books/'>@paragon_books</a> and the major book stores. If you're in Europe you can order it from <a target='_blank' rel='noreferrer' href='https://www.instagram.com/anthologymagazine/'>@anthologymagazine</a>.</p>",
        aditionalImages: [
            {
                name: "kandinsky-2" //.jpg || .webp
            },
            {
                name: "kandinsky-3" //.jpg || .webp
            },
            {
                name: "kandinsky-4" //.jpg || .webp
            }
        ]
    },
    {
        name: "freud", // 45
        date: "December 8, 2023",
        dateTime: "2023-12-08",
        hero: "freud-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of Lucian Freud  painting in his studio.",
        title: "Freud",
        content: "<p>Lucian Freud was born this day in 1922 in Berlin and moved to England when he was ten years old. Here we can see him in his London studio portraying his long-time assistant David Dawson and Eli, Dawson's whippet, a recurring motif of his paintings.</p> " +
        "<p>This studio and many more are illustrated in my new book 'Painters of the 20th Century Painting in their Studios', with texts by Edel Cassidy, published by <a target='_blank' rel='noreferrer' href='https://www.instagram.com/paragon_books/'>@paragon_books</a>.</p>" +
        "<p>It's available now in all the major book stores. If you purchase it directly from Paragon, you'll get a small print as an extra.</p>" +
        "<p>If you're in Europe and worry about the shipping costs from the US, you can get it at <a target='_blank' rel='noreferrer' href='https://www.instagram.com/anthologymagazine/'>@anthologymagazine</a>, which is located in Ireland. Do those come also with a print? Yes, they do!</p>",
        aditionalImages: [
            {
                name: "freud-2" //.jpg || .webp
            }
        ]
    },
    {
        name: "magritte", // 44
        date: "November 21, 2023",
        dateTime: "2023-11-21",
        hero: "magritte-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of Magritte painting in his studio.",
        title: "Magritte",
        content: "<p>René Magritte was born 125 years ago in Lessines, Belgium. From 1930 to 1954, he and his wife, Georgette (also his model and muse), lived on the ground floor at 135 Rue Esseghem in Brussels. Magritte built a studio in the back garden, where he and his brother, Paul, ran Studio Dongo, an advertising agency that earned him a living wage. (Here you can see the small building in the back from the kitchen window.) For painting, he never had a proper studio and set up his easel in a corner of the living room.</p> " +
        "<p>This studio and many more are portrayed in my book 'Painters of the 20th Century Painting in their Studios'. Written by Edel Cassidy (excerpt from the book copied here) and published by <a target='_blank' rel='noreferrer' href='https://www.instagram.com/paragon_books/'>@paragon_books</a>.</p>" +
        "<p>The design is from Ros Woddham <a target='_blank' rel='noreferrer' href='https://www.instagram.com/roswoodham/'>@roswoodham</a>.</p>" +
        "<p>Available now!</p>",
        aditionalImages: []
    },
    {
        name: "monet", // 43
        date: "November 16, 2023",
        dateTime: "2023-11-16",
        hero: "monet-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of Monet painting in his garden.",
        title: "Monet",
        content: "<p>In 1883, Claude Monet (born November 14, 1840 in Paris, France) moved to Giverny with his second wife, Alice Hoschedé, and their children. There was a barn attached to their rented house that doubled as a painting studio. The house also had a small garden in which Monet spent most of his time because of his love of plein-air painting.</p> " +
        "<p>This open-air studio is portrayed in my new book <i>Painters of the 20th Century Painting in their Studios</i> along with other 29 major artists of the past century. All the stories, such as the excerpt copied above, are beautifully written by Edel Cassidy <a target='_blank' rel='noreferrer' href='https://www.instagram.com/anthologymagazine/'>@anthologymagazine</a>.</p>" +
        "<p>The book is available now at <a target='_blank' rel='noreferrer' href='https://www.instagram.com/paragon_books/'>@paragon_books</a> books and many of your favourite book sellers.</p>" +
        "<p>Oh, you want this image as a puzzle? You got it! <a target='_blank' rel='noreferrer' href='https://www.instagram.com/everybodylovesrecess/'>@everybodylovesrecess</a>.</p>",
        aditionalImages: [
            {
                name: "monet-2" //.jpg || .webp
            }
        ]
    },
    {
        name: "moreParisSketches", // 42
        date: "November 13, 2023",
        dateTime: "2023-11-13",
        hero: "more-paris-sketches-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of child carrying a pile of baguettes",
        title: "More Paris Sketches",
        content: "",
        aditionalImages: [
            {
                name: "more-paris-sketches-2" //.jpg || .webp
            },
            {
                name: "more-paris-sketches-3" //.jpg || .webp
            },
            {
                name: "more-paris-sketches-4" //.jpg || .webp
            },
            {
                name: "more-paris-sketches-5" //.jpg || .webp
            },
            {
                name: "more-paris-sketches-6" //.jpg || .webp
            },
            {
                name: "more-paris-sketches-7" //.jpg || .webp
            },
            {
                name: "more-paris-sketches-8" //.jpg || .webp
            },
            {
                name: "more-paris-sketches-9" //.jpg || .webp
            },
            {
                name: "more-paris-sketches-10" //.jpg || .webp
            }
        ]
    },
    {
        name: "paintersBookA", // 41
        date: "November 9, 2023",
        dateTime: "2023-11-09",
        hero: "painters-book-a-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Cover of the illustrated book.",
        title: "Painters of the 20th Century Painting in their Studios",
        content: "<p style='text-transform: uppercase;'>Available now!</p>" +
        "<p>Each order from paragon-books.com will include your choice of an open edition, 9\" x 9\" print of Frida Kahlo or Andy Warhol in their studios.</p>" +
        "<p>Order now " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/paragon_books/'>@paragon_books</a>.</p>",
        aditionalImages: [
            {
                name: "painters-book-a-2" //.jpg || .webp
            },
            {
                name: "painters-book-a-3" //.jpg || .webp
            },
            {
                name: "painters-book-a-4" //.jpg || .webp
            }
        ]
    },
    {
        name: "paris#7", // 40
        date: "November 9, 2023",
        dateTime: "2023-11-09",
        hero: "paris-7", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of painter.",
        title: "Paris #7",
        content: "",
        aditionalImages: []
    },
    {
        name: "paris#6", // 39
        date: "November 9, 2023",
        dateTime: "2023-11-09",
        hero: "paris-6", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of two persons sitting and having coffee.",
        title: "Paris #6",
        content: "",
        aditionalImages: []
    },
    {
        name: "paris#5", // 38
        date: "November 9, 2023",
        dateTime: "2023-11-09",
        hero: "paris-5", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of Gyro's store.",
        title: "Paris #5",
        content: "",
        aditionalImages: []
    },
    {
        name: "paris#4", // 38
        date: "November 6, 2023",
        dateTime: "2023-11-06",
        hero: "paris-4", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Self portrait illustration carrying a big canvas in the street.",
        title: "Paris #4",
        content: "<p>This one is actually a self portrait. I once carried a 2x2 meter canvas from Sennelier at Quai Voltaire to my studio at Le Marais. That's almost 30 blocks! And the wind by the Seine wasn't on my side either so it was no picnic. It was worth the experience, though. Would I do it again? Probably.</p>",
        aditionalImages: []
    },
    {
        name: "paris#3", // 37
        date: "November 5, 2023",
        dateTime: "2023-11-05",
        hero: "paris-3", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of man walking with a baguette.",
        title: "Paris #3",
        content: "",
        aditionalImages: []
    },
    {
        name: "paris#2", // 36
        date: "November 5, 2023",
        dateTime: "2023-11-05",
        hero: "paris-2", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of a woman pushing a Crepes' cart.",
        title: "Paris #2",
        content: "",
        aditionalImages: []
    },
    {
        name: "paris#1", // 35
        date: "November 4, 2023",
        dateTime: "2023-11-04",
        hero: "paris-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of a parisian front store.",
        title: "Paris #1",
        content: "",
        aditionalImages: []
    },
    {
        name: "wakeTheDead", // 34
        date: "October 31, 2023",
        dateTime: "2023-10-31",
        hero: "wake-the-dead-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Picture of fake victorian toy.",
        title: "Wake the dead",
        content: "<p>Today is the day when the dead rise for one wild carnival. They might ring your bell asking for candy. You better do as they say. Happy Halloween!</p>" +
        "<p>*This fake victorian toy, I made it to celebrate my favourite time of the year. #halloween</p>" +
        "<p>Not for sale this one. It's just a prototype. Should I produce it in a large number?</p>",
        aditionalImages: [
            {
                name: "wake-the-dead-2" //.jpg || .webp
            },
            {
                name: "wake-the-dead-3" //.jpg || .webp
            },
            {
                name: "wake-the-dead-4" //.jpg || .webp
            }
        ]
    },
    {
        name: "theSingerFamily", // 33
        date: "August 25, 2023",
        dateTime: "2023-08-25",
        hero: "the-family-singer-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustrated cover for the 'The Family Singer' book.",
        title: "The Family Singer",
        content: "<p>A few months ago I've made this cover for a book by Maurice Carr, published by the Yiddish Book Center.</p>" +
        "<p>Maurice Carr, nephew of writers Israel Joshua and Nobel Prize winner Isaac Bashevis Singer, tells the story of his mother Esther Singer Kreitman, who was also an important writer living in the shadow of her two famous brothers and their exile to London at the outbreak of WWI. It's a good book, I've enjoyed it.</p>" +
        "<p>Alas, the publishers decided last minute to go with a photo for the cover. I still think this is a good illustration, so here I am showing it to you before it gets forgotten.</p>",
        aditionalImages: [
            {
                name: "the-family-singer-2" //.jpg || .webp
            },
            {
                name: "the-family-singer-3" //.jpg || .webp
            },
            {
                name: "the-family-singer-4" //.jpg || .webp
            },
            {
                name: "the-family-singer-5" //.jpg || .webp
            }
        ]
    },
    {
        name: "dogInStudio", // 32
        date: "August 1, 2023",
        dateTime: "2023-08-01",
        hero: "dog-in-studio", //.jpg || .webp
        width: 670,
        height: 830,
        alt: "Picture of my dog in the studio.",
        title: "Dog in studio",
        content: "",
        aditionalImages: []
    },
    {
        name: "squidGame", // 31
        date: "June 19, 2023",
        dateTime: "2023-06-19",
        hero: "squid-game", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Pencil illlustration of Squid Game.",
        title: "Squid Game",
        content: "<p>Remember The Squid Game? I've made this drawing exclusively for the second episode of my current show Moments in Film 63, based on M.C. Escher's Relativity. The original is in charcoal and there's also a coloured version. You can see them both " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/63culture/'>@63culture</a>.</p>",
        aditionalImages: []
    },
    // 30
    {
        name: "fairAndSquare", // 29
        date: "May 3, 2023",
        dateTime: "2023-05-03",
        hero: "fair-and-square-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Fair & Square snacks' box illustrated.",
        title: "Fair & Square",
        content: "<p>I'm very happy to share a project that I've been working on for several months along with Brand Agency " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/truffl/'>@truffl</a> " +
        "and " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/itsfairandsquare/'>@itsfairandsquare</a>.</p>" +
        "<p>These delicious crackers are gut-friendly, allergen-free, plant-based and gluten-free. The brand is designed to make healthy snacking as exciting as junk food alternatives. And the packaging. Oh, the packaging!!!</p>" +
        "<p>Thanks to " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/truffl/'>@truffl</a> " +
        "and " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/itsfairandsquare/'>@itsfairandsquare</a> " +
        "for letting me participate on this very fun and ambitious rebrand.</p>" +
        "<p>Full case study on " +
        "<a target='_blank' rel='noreferrer' href='https://truffl.com/work/fair-and-square'>Truffl.com</a>.</p>",
        aditionalImages: [
            {
                name: "fair-and-square-2" //.jpg || .webp
            },
            {
                name: "fair-and-square-3" //.jpg || .webp
            },
            {
                name: "fair-and-square-4" //.jpg || .webp
            }
        ]
    },
    {
        name: "addamsFamily", // 28
        date: "March 19, 2023",
        dateTime: "2023-03-19",
        hero: "addams-1", //.jpg || .webp
        width: 670,
        height: 536,
        alt: "Illustration of Addams Family's house.",
        title: "Addams Family",
        content: "<p>&#127926;They're creepy and they're kooky, mysterious and spooky.&#127926;</p>" +
        "<p>I've always loved the Addams Family. I used to watch the black and white show on our black and white TV when I was a kid (I am that old) and very much enjoyed the recent Tim Burton's Wednesday as well. The 90s movies are great too but, most of all, I am a fan of the original cartoons by Charles Addams.</p>" +
        "<p>My new two versions of the Addams Mansion are a bit of a mix of them all. You can see the reference I used for the night version in the last picture of this post. The scene was also used for the opening titles of the 1991 movie directed by Barry Sonnenfeld.</p>" +
        "<p>These posters were especially made for WonderCon 2023 and they will first be made available at the convention starting March 24th at 11:30am when doors to the con open. The remaining artwork will go up at " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/spoke_art/'>@spoke_art</a> " +
        "online store Thursday, March 30th at 10am PT.</p> " +
        "<p>WonderCon is at the Anaheim Convention Center and Spoke Art Gallery is at Booth 1109.</p>",
        aditionalImages: [
            {
                name: "addams-2" //.jpg || .webp
            },
            {
                name: "addams-3" //.jpg || .webp
            },
            {
                name: "addams-4" //.jpg || .webp
            },
            {
                name: "addams-5" //.jpg || .webp
            },
            {
                name: "addams-6" //.jpg || .webp
            },
            {
                name: "addams-7" //.jpg || .webp
            },
            {
                name: "addams-8" //.jpg || .webp
            },
            {
                name: "addams-9" //.jpg || .webp
            },
            {
                name: "addams-10" //.jpg || .webp
            }
        ]
    },
    {
        name: "klimtMonetMondrianPuzzles", // 27
        date: "March 1, 2023",
        dateTime: "2023-03-01",
        hero: "kmm-puzzles-1", //.jpg || .webp
        width: 670,
        height: 536,
        alt: "Max's illustrations turned puzzles",
        title: "Puzzles!",
        content: "<p>These brand new, beautifully crafted, 500 piece jigsaw puzzles of three of my Artist Studio Series  will be available this FRIDAY, March 3rd at 1PM PST at " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/everybodylovesrecess/'>@everybodylovesrecess</a> " +
        "shop.</p> " +
        "<p>High quality puzzle pieces come packaged in a sturdy and easy-to-wrap box, excellent for gifting, reuse, and storage.</p> " +
        "<p style='text-align: center;'><a target='_blank' rel='noreferrer' href='https://everybodylovesrecess.com'>everybodylovesrecess.com</a></p>",
        aditionalImages: [
            {
                name: "kmm-puzzles-2" //.jpg || .webp
            },
            {
                name: "kmm-puzzles-3" //.jpg || .webp
            },
            {
                name: "kmm-puzzles-4" //.jpg || .webp
            },
            {
                name: "kmm-puzzles-5" //.jpg || .webp
            },
            {
                name: "kmm-puzzles-6" //.jpg || .webp
            },
            {
                name: "kmm-puzzles-7" //.jpg || .webp
            },
            {
                name: "kmm-puzzles-8" //.jpg || .webp
            },
            {
                name: "kmm-puzzles-9" //.jpg || .webp
            }
        ]
    },
    {
        name: "happyWinter", // 26
        date: "December 23, 2022",
        dateTime: "2022-12-23",
        hero: "happy-winter", //.jpg || .webp
        width: 1080,
        height: 864,
        alt: "A man and his cute dog in the snow.",
        title: "Happy winter! Happy Holidays!",
        content: "",
        aditionalImages: []
    },
    {
        name: "golfjournal", // 25
        date: "December 15, 2022",
        dateTime: "2022-12-15",
        hero: "golf-journal-01", //.jpg || .webp
        width: 1080,
        height: 1080,
        alt: "Illustration of a person playing golf inside a decorative snowball.",
        title: "Golf Journal",
        content: "<p>For all the golfers out there, here's a peek of my contribution for the winter issue of " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/usga/'>@usga</a> " +
        "Golf Journal.</p> " +
        "<p>Out now!</p>",
        aditionalImages: [
            {
                name: "golf-journal-02", //.jpg || .webp
            },
            {
                name: "golf-journal-03", //.jpg || .webp
            },
            {
                name: "golf-journal-04", //.jpg || .webp
            },
            {
                name: "golf-journal-05", //.jpg || .webp
            },
            {
                name: "golf-journal-06", //.jpg || .webp
            },
            {
                name: "golf-journal-07", //.jpg || .webp
            },
            {
                name: "golf-journal-08", //.jpg || .webp
            },
            {
                name: "golf-journal-09", //.jpg || .webp
            }
        ]
    },
    {
        name: "moments63a", // 24
        date: "December 6, 2022",
        dateTime: "2022-12-06",
        hero: "mif63-01", //.jpg || .webp
        width: 1080,
        height: 1080,
        alt: "Flyer of the show.",
        title: "My next show",
        content: "<p>Happy to announce my next show at " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/63culture/'>@63culture</a> " +
        "Seoul.</p> " +
        "<p>Looking forward to meeting you in person this Friday!</p> " +
        "<p>Brought to you by " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/myartmuseum_official/'>@myartmuseum_official</a> " +
        "and " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/spoke_art/'>@spoke_art</a>" +
        "</p>",
        aditionalImages: []
    },
    {
        name: "interviewbyringier", // 23
        date: "June 3, 2022",
        dateTime: "2022-06-03",
        hero: "interview", //.jpg || .webp
        width: 1080,
        height: 726,
        alt: "Illustration of Frank A. Meyer interviewing Christian Lindner.",
        title: "Interview by Ringier",
        content: "<p>My illustration for the " +
        "<a target='_blank' rel='noreferrer' href='https://www.instagram.com/interviewbyringier/'>@interviewbyringier</a> " +
        "new issue.</p> " +
        "<p>Frank A. Meyer interviews Germany's Finance Minister Christian Lindner.</p> " +
        "<p>Out now!</p>",
        aditionalImages: []
    },
    {
        name: "mingus", // 22
        date: "April 22, 2022",
        dateTime: "2022-04-22",
        hero: "mingus", //.jpg || .webp
        width: 670,
        height: 536,
        alt: "Illustration of Charles Mingus walking by the Berliner Philharmonie.",
        title: "Charles Mingus' 100th birthday",
        content: "<p>To celebrate genius jazz musician Charles Mingus' 100th birthday I portrayed him walking in front of the Berliner Philharmonie, a very nice and strange building constructed over the years 1960-1963.</p> <p>I passed it a few days ago and thought that it looked like a giant crown.</p> <p>As it happens, Mingus played here in the 70s.</p>",
        aditionalImages: []
    },
    {
        name: "gulaschpeter", // 21
        date: "April 20, 2022",
        dateTime: "2022-04-20",
        hero: "gulaschpeter-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustration of Max eating Gulasch at a nice restaurant.",
        title: "Der Gulaschpeter",
        content: "<p>I went to have lunch at an Austrian restaurant. The gulasch that I ordered was very good and made me think a lot of my grandmother.</p> <p>She was Austrian and used to make an excellent gulasch. It was one of my regular meals when I was little.</p> <p>She also introduced me to Der Struwwelpeter, a picture book that, despite of its terrible stories, I'm to this day very fond of.</p> <p>After lunch, I went for a walk.</p> <p>Right on the corner of the restaurant there was this antiquarian bookshop with sidewalk sales tables. And there it was, a 1950's edition of Der Struwwelpeter.</p> <p>And so I got my first vintage picture book in Berlin.</p>",
        aditionalImages: [
            {
                name: "gulaschpeter-2", //.jpg || .webp
            },
            {
                name: "gulaschpeter-3", //.jpg || .webp
            },
            {
                name: "gulaschpeter-4", //.jpg || .webp
            },
            {
                name: "gulaschpeter-5", //.jpg || .webp
            },
            {
                name: "gulaschpeter-6", //.jpg || .webp
            }
        ]
    },
    {
        name: "ende", // 20
        date: "April 16, 2022",
        dateTime: "2022-04-16",
        hero: "friedhof-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustration of Max walking in a graveyard on a snowy day.",
        title: "Ending and beginning",
        content: "<p>Here's a little story about ending and beginning:</p> <p>After some time on leave for a stressful move from Buenos Aires to Berlin I'm finally settled in and getting ready to start working again.</p> <p>I went for a few art supplies (including this very sketchbook) in the afternoon. On my way back from the store I walked through a graveyard. There, as if the place wasn't cold enough, it started to snow.</p> <p>I saw the grave of a family whose name used to be “Ende”, which means “End” in German.</p> <p>That's an appropriate name to have written on a tomb, I thought.</p> <p>Then, I started this sketchbook.</p> <p style='text-align:center;'>The End</p>",
        aditionalImages: [
            {
                name: "friedhof-2", //.jpg || .webp
            },
            {
                name: "friedhof-3", //.jpg || .webp
            },
            {
                name: "friedhof-4", //.jpg || .webp
            }
        ]
    },
    {
        name: "theSmallStuff2", // 19
        date: "April 14, 2022",
        dateTime: "2022-04-14",
        hero: "pd1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustration and a few previous ideas of The Small Stuff's book cover.",
        title: "The Small Stuff is finally out!",
        content: "<p>A few months ago <a target='_blank' rel='noreferrer' href='https://www.instagram.com/paulyd71/'>@paulyd71</a> gave me the opportunity to design the cover of his new novel.</p> <p>Here's the final illustration and a few previous ideas.</p> <p>The Small Stuff is finally out! Get it at your local bookstore or the major online stores.</p>",
        aditionalImages: [
            {
                name: "pd2", //.jpg || .webp
            },
            {
                name: "pd3", //.jpg || .webp
            },
            {
                name: "pd4", //.jpg || .webp
            }
        ]
    },
    {
        name: "parasite2", // 18
        date: "April 13, 2022",
        dateTime: "2022-04-13",
        hero: "p1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Illustration of Parasite's home.",
        title: "Parasite poster",
        content: "<p>My Parasite poster is now available <a target='_blank' rel='noreferrer' href='https://www.instagram.com/spoke_art/'>@spoke_art</a>.</p> <p>Hand numbered 1-100.</p>",
        aditionalImages: [
            {
                name: "p2", //.jpg || .webp
            },
            {
                name: "p3", //.jpg || .webp
            },
            {
                name: "p4", //.jpg || .webp
            },
            {
                name: "p5", //.jpg || .webp
            },
            {
                name: "p6", //.jpg || .webp
            },
            {
                name: "p7", //.jpg || .webp
            },
            {
                name: "p8", //.jpg || .webp
            },
            {
                name: "p9", //.jpg || .webp
            }
        ]
    },
    {
        name: "cards", // 17
        date: "February 9, 2022",
        dateTime: "2022-02-09",
        hero: "cards-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustrations of several cards found in the street.",
        title: "Cards found in the street",
        content: "<p>Since many years now, I've been finding playing cards in the street and other public spaces.</p> <p>I've found cards all around the world: New York City, USA; Paris, France; Buenos Aires, Argentina; London, UK; Marrakesh, Morocco...</p> <p>What does this mean?</p> <p>Who's throwing away single cards?</p>  <p>Will I ever be able to collect the 52 cards of a deck?</p> <p>Quite a mystery.</p>",
        aditionalImages: [
            {
                name: "cards-2", //.jpg || .webp
            },
            {
                name: "cards-3", //.jpg || .webp
            },
            {
                name: "cards-4", //.jpg || .webp
            },
            {
                name: "cards-5", //.jpg || .webp
            },
            {
                name: "cards-6", //.jpg || .webp
            },
            {
                name: "cards-7", //.jpg || .webp
            },
            {
                name: "cards-8", //.jpg || .webp
            }
        ]
    },
    {
        name: "tricycle", // 16
        date: "February 1, 2022",
        dateTime: "2022-02-01",
        hero: "tricycle_IG1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustrations for Tricycle magazine's cover.",
        title: "Tricycle magazine",
        content: "<p>My illustration for the Spring issue cover of Buddhist magazine Tricycle. <a target='_blank' rel='noreferrer' href='https://www.instagram.com/tricyclemag/'>@tricyclemag</a></p>",
        aditionalImages: [
            {
                name: "tricycle_IG2", //.jpg || .webp
            },
            {
                name: "tricycle_IG3", //.jpg || .webp
            },
            {
                name: "tricycle_IG4", //.jpg || .webp
            },
            {
                name: "tricycle_IG5", //.jpg || .webp
            },
            {
                name: "tricycle_IG6", //.jpg || .webp
            }
        ]
    },
    {
        name: "piano", // 15
        date: "January 20, 2022",
        dateTime: "2022-01-20",
        hero: "piano-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustration of my piano.",
        title: "My turn of the 20th century Art Nouveau piano",
        content: "<p>This piano was built in Barcelona by the factory Ortiz & Cussó. It has a beautiful sound but what I like the most is its fine woodwork.</p> <p>The figures that are formed on its walnut root surface look like faces of people burning in Hell. I always feel being watched when I play it.</p> <p>Chopin once abandoned a concert in England because he had been terrified to see <q>cursed creatures</q> on the surface of his piano.</p> <p>I wonder if that piano was also made of walnut root. Or perhaps it was just the opium kicking in.</p>",
        aditionalImages: [
            {
                name: "piano-2", //.jpg || .webp
            },
            {
                name: "piano-3", //.jpg || .webp
            },
            {
                name: "piano-4", //.jpg || .webp
            }
        ]
    },
    {
        name: "jeff", // 14
        date: "January 16, 2022",
        dateTime: "2022-01-16",
        hero: "jeff", //.jpg || .webp
        width: 670,
        height: 891,
        alt: "Poster illustrated about Jeff Goodman dancing.",
        title: "Jeff Goodman is a Double Threat",
        content: "<p>He can act and he can sing. Dancing is not his thing, though, or so he says.</p> <p>He'll be doing a concert on February 18 and 100% of the ticket sales will support <a target='_blank' rel='noreferrer' href='https://www.instagram.com/childsplayaz/'>@childsplayaz</a>.</p> <p>VIP tickets include an after-party wine reception and a printed poster I've designed for this occasion.</p> <p>For more info, please visit <a target='_blank' rel='noreferrer' href='https://www.instagram.com/jeffsagoodman/'>@jeffsagoodman</a>'s website <a target='_blank' rel='noreferrer' href='https://www.jeffsagoodman.com/doublethreat'>jeffsagoodman.com/doublethreat</a>.</p>",
        aditionalImages: []
    },
    {
        name: "album", // 13
        date: "January 13, 2022",
        dateTime: "2022-01-13",
        hero: "album-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustration of my grandfather's photo album.",
        title: "Beikichi's Photo Album",
        content: "<p>My grandfather was born on a small island east of Okinawa named Tsuken. The island is also known as “Carrot Island” because of its production of carrots.</p> <p>His family were carrot farmers too and since the economy wasn't well, they sold their pig to help him buy his ticket to South America, so he could find an opportunity in a new land.</p> <p>When he left the island in 1931 he took with him a few things, among them a photo album full of pictures of his family.</p> <p>47 years later he returned to the island to see his family again for the first time, carrying the same photo album filled with pictures of his own wife and children.</p>",
        aditionalImages: [
            {
                name: "album-2", //.jpg || .webp
            },
            {
                name: "album-3", //.jpg || .webp
            },
            {
                name: "album-4", //.jpg || .webp
            },
            {
                name: "album-5", //.jpg || .webp
            },
            {
                name: "album-6", //.jpg || .webp
            },
            {
                name: "album-7", //.jpg || .webp
            }
        ]
    },
    {
        name: "bernardStrasser", // 12
        date: "January 11, 2022",
        dateTime: "2022-01-11",
        hero: "bernard-strasser-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustration of my grandfather's medals.",
        title: "Bernard Strasser's WWI medals",
        content: "<p>My great grandfather fought in World War I for the Austro-Hungarian Empire.</p> <p>For that, he received two medals: The Honour Cross of the World War 1914/1918 for front-line veterans and the Medal for Bravery (Der Tapferkeit), which has the portrait of Emperor Franz Josef on the obverse.</p> <p>I don't know exactly what he did in the war -except that he was in the K.U.K. Infantry Regiment- or why did he received these medals. Maybe he killed a lot of Russian (or French, or British) soldiers, or maybe he just stayed in the trench avoiding to get killed.</p> <p>Maybe they gave him the medals because he worked in the kitchen and knew how to make a killer Apfelstrudel. I choose to believe the latter.</p>",
        aditionalImages: [
            {
                name: "bernard-strasser-2", //.jpg || .webp
            },
            {
                name: "bernard-strasser-3", //.jpg || .webp
            },
            {
                name: "bernard-strasser-4", //.jpg || .webp
            },
            {
                name: "bernard-strasser-5", //.jpg || .webp
            }
        ]
    },
    {
        name: "irishBodhran", // 11
        date: "January 4, 2022",
        dateTime: "2022-01-04",
        hero: "bodhran-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Illustration of my Irish Bodhran.",
        title: "My Irish Bodhran",
        content: "<p>About twenty years ago, when I was visiting Ireland for the first time, I took a bus tour to the Cliffs of Moher. It was such beautiful place that I wandered along the cliffs for over two hours, went to an abandoned tower, took a few pictures and had a good time.</p> <p>When I returned to the parking lot, the bus had left. So I decided to hitchhike my way back to Dublin.</p> <p>A truck driver offered to take me to a small town not too far away named Doolin, where I could wait for another bus. And so I did.</p> <p>It was late in the afternoon and I had to wait for two more hours for the bus, so in my way to the pub I stumbled across an old and tiny music store.</p> <p>There was this drum in the window that was calling me, even though I had no idea how to play it. “A couple of Guinness pints and you'll be on your way”, said the woman in the store.</p> <p>Once in the pub, the locals were very kind and taught me a little how to play.</p> <p>And of course, I missed the bus again.</p>",
        aditionalImages: [
            {
                name: "bodhran-2", //.jpg || .webp
            },
            {
                name: "bodhran-3", //.jpg || .webp
            },
            {
                name: "bodhran-4", //.jpg || .webp
            },
            {
                name: "bodhran-5", //.jpg || .webp
            },
            {
                name: "bodhran-6", //.jpg || .webp
            },
            {
                name: "bodhran-7", //.jpg || .webp
            },
            {
                name: "bodhran-8", //.jpg || .webp
            },
        ]
    },
    {
        name: "grandmothersTrunk", // 10
        date: "January 2, 2022",
        dateTime: "2022-01-02",
        hero: "grandmothers-trunk-1", //.jpg || .webp
        width: 670,
        height: 839,
        alt: "Illustration of my grandmother's travel trunk.",
        title: "My grandmother's travel trunk",
        content: "<p>My grandmother left Vienna right before the Nazi occupation.</p> <p>Everything she could carry with her, fitted in a travel trunk.</p> <p>It has been with me since I was born.</p> <p>I used it as a coffin when I was a child pretending to be a vampire.</p> <p>It became my wardrobe in my twenties, when I was single and trying to make it as an artist.</p> <p>Lately, I've been using it to store art supplies in my studio.</p> <p>I wish I could use it as my luggage for flying, but I'm not so sure if the transportation security would accept it.</p>",
        aditionalImages: [
            {
                name: "grandmothers-trunk-2", //.jpg || .webp
            },
            {
                name: "grandmothers-trunk-3", //.jpg || .webp
            },
            {
                name: "grandmothers-trunk-4", //.jpg || .webp
            },
            {
                name: "grandmothers-trunk-5", //.jpg || .webp
            },
            {
                name: "grandmothers-trunk-6", //.jpg || .webp
            },
        ]
    },
    {
        name: "happyNewYear", // 9
        date: "January 1, 2022",
        dateTime: "2022-01-01",
        hero: "happy-new-year", //.jpg || .webp
        width: 1080,
        height: 864,
        alt: "Photo of me in front of the blackboard in my studio in Buenos Aires.",
        title: "Happy New Year!",
        content: "<p>Happy New Year! Hope you had a good start of 2022 as I did.</p> <p>I have a few resolutions for this year. One of them will be to keep an illustrated compendium of my favourite objects. I feel the need to do it and, if you're interested to know, here's why:</p> <p>In a few weeks I'll be moving back to Europe after many years living in Buenos Aires. I'm very excited about that idea but one of the problems that I find (moving your home to another continent isn't easy) is to figure out what am I going to do with all of my stuff.</p> <p>I admit that I have a great deal of attachment to objects. Especially old ones. They're amulets to me. Their presence have a power on my state of mind. Sometimes they even seem to perform a magical act over particular events.They're also time machines. Every object that I have brings me back to a glorious or a dark moment of my life. They bring people back from death too. I feel the presence of those who I loved every time I pick up an object that belonged to them. Objects give me comfort. They're blankets in a cold night when feelings are overwhelming.</p> <p>I know I won't be able to take everything with me in my act of home changing. Some things I'll have to leave behind because they're too heavy to carry. Now I mean physically, not emotionally. I hope this detachment doesn't hurt too much. In the end- I try to convince myself- it's just stuff.</p> <p>I've heard that the less objects you possess, the happier you are. I'm still not so sure about that statement. I guess I'll find out soon enough. In the meantime, this list will work as a funeral for those things that I'll have to say goodbye to and as a celebratory homage to those that will keep accompanying me on my hoarding journey. I'll be posting them here once in a while (starting tomorrow).</p> <p>Finally, here's a photo of me in front of the blackboard in my studio in Buenos Aires. In my hands I have one of my favourite books. But I'll talk about them later.</p>",
        aditionalImages: []
    },
    {
        name: "theSmallStuff", // 8
        date: "December 20, 2021",
        dateTime: "2021-12-20",
        hero: "the-small-stuff-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "The Small Stuff book cover.",
        title: "The Small Stuff",
        content: "<p>Not so long ago I designed the cover for <a target='_blank' rel='noreferrer' href='https://www.instagram.com/paulyd71/'>Paul Davidson</a>'s debut fiction novel <i>THE SMALL STUFF</i>. Coming April 2022 from <a target='_blank' rel='noreferrer' href='https://www.instagram.com/hadleighhousepublishing/'>Hadleigh House Publishing</a>.</p>",
        aditionalImages: [
            {
                name: "the-small-stuff-2", //.jpg || .webp
            },
            {
                name: "the-small-stuff-3", //.jpg || .webp
            },
            {
                name: "the-small-stuff-4", //.jpg || .webp
            },
            {
                name: "the-small-stuff-5", //.jpg || .webp
            },
            {
                name: "the-small-stuff-6", //.jpg || .webp
            }
        ]
    },
    {
        name: "stefanZweig", // 7
        date: "November 28, 2021",
        dateTime: "2021-11-28",
        hero: "stefan-zweig-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Stefan Zweig illustration.",
        title: "Stefan Zweig",
        content: "<p>Stefan Zweig was born in Vienna on November 28, 1881, exactly 140 years ago. He was a novelist, a playwright, a journalist and a biographer best known for his 1922 novel Amok. In 1934 Zweig was forced to leave Austria following Hitler's rise to power. He died in Brasil in 1942 after a suicide pact with his wife Lotte.</p> <p>Zweig's books were habitual at home when I was growing up, since my grandparents were also from Vienna, also had to leave before the occupation of Austria and were very acquainted to his writings.  Many years later, I was happily surprised to find out that Wes Anderson was partly inspired in his work when he wrote The Grand Budapest Hotel.</p> <p>Images belong to The Wes Anderson Collection: The Grand Budapest Hotel, written by Matt Zoller Seitz, published by Abrams Books, 2015 .</p>",
        aditionalImages: [
            {
                name: "stefan-zweig-2", //.jpg || .webp
            },
            {
                name: "stefan-zweig-3", //.jpg || .webp
            },
            {
                name: "stefan-zweig-4", //.jpg || .webp
            },
            {
                name: "stefan-zweig-5", //.jpg || .webp
            }
        ]
    },
    {
        name: "anthologyMagazine", // 6
        date: "November 17, 2021",
        dateTime: "2021-11-17",
        hero: "anthology-magazine-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Anthology Magazine covers.",
        title: "Anthology Magazine",
        content: "<p>Thank you Edel Cassidy <a target='_blank' rel='noreferrer' href='https://www.instagram.com/anthologymagazine/'>@anthologymagazine</a> for a beautiful article about my artists portraits. I'm on the cover! </p> <p>You can order the Winter Issue here <a target='_blank' rel='noreferrer' href='https://bit.ly/3bI0JBp'>https://bit.ly/3bI0JBp</a></p>",
        aditionalImages: [
            {
                name: "anthology-magazine-2", //.jpg || .webp
            },
            {
                name: "anthology-magazine-3", //.jpg || .webp
            },
            {
                name: "anthology-magazine-4", //.jpg || .webp
            }
        ]
    },
    {
        name: "flwTimeless", // 5
        date: "October 21, 2021",
        dateTime: "2021-10-21",
        hero: "FLW-Timeless-1", //.jpg || .webp
        width: 670,
        height: 670,
        alt: "Frank Lloyd Wright illustration.",
        title: "Frank Lloyd Wright: Timeless",
        content: "<p>Spoke Art Gallery and the Frank Lloyd Wright Foundation return this weekend with Frank Lloyd Wright: Timeless, an annual show featuring a dozen artists reinterpreting their favorite Frank Lloyd Wright sites. See it in person at Taliesin West in Scottsdale, AZ.</p> <p>My contribution this year is a new 3D View-Max-ter reel.</p> <p>For more info go to <a target='_blank' rel='noreferrer' href='https://www.instagram.com/spoke_art/'>@spoke_art</a> or <a target='_blank' rel='noreferrer' href='https://www.instagram.com/wrighttaliesin/'>@wrighttaliesin</a></p>",
        aditionalImages: [
            {
                name: "FLW-Timeless-2", //.jpg || .webp
            },
            {
                name: "FLW-Timeless-3", //.jpg || .webp
            },
            {
                name: "FLW-Timeless-4", //.jpg || .webp
            },
            {
                name: "FLW-Timeless-5", //.jpg || .webp
            },
            {
                name: "FLW-Timeless-6", //.jpg || .webp
            },
            {
                name: "FLW-Timeless-7", //.jpg || .webp
            },
            {
                name: "FLW-Timeless-8", //.jpg || .webp
            }
        ]
    },
    {
        name: "parasite", // 4
        date: "September 1, 2021",
        dateTime: "2021-09-01",
        hero: "parasite-1", //.jpg || .webp
        width: 1080,
        height: 864,
        alt: "Director Bong Joon-ho and Production Designer Lee Ha-jun holding Parasite Poster.",
        title: "parasite",
        content: "<p>Thank you Director Bong Joon-ho and Production Designer Lee Ha-jun for this wonderful picture with my Parasite poster!</p> <p>I couldn't feel more honoured.</p>",
        aditionalImages: []
    },
    {
        name: "artClasses", // 3
        date: "May 13, 2021",
        dateTime: "2021-05-13",
        hero: "art-classes-1", //.jpg || .webp
        width: 1080,
        height: 1080,
        alt: "Group of children at an art show.",
        title: "Art classes",
        content: "<p><a target='_blank' rel='noreferrer' href='https://www.instagram.com/thinkmuseum/'>@thinkmuseum</a> is giving art classes to kids after visiting my show at <a target='_blank' rel='noreferrer' href='https://www.instagram.com/myartmuseum_official/'>My Art Museum</a>.</p> <p>There they create their own portraits with a lot of hair to honor me. They're all so very good! 🏆✨✨✨</p> <p>Images courtesy of <a target='_blank' rel='noreferrer' href='https://www.instagram.com/thinkmuseum/'>@thinkmuseum</a></p>",
        aditionalImages: [
            {
                name: "art-classes-2", //.jpg || .webp
            },
            {
                name: "art-classes-3", //.jpg || .webp
            },
            {
                name: "art-classes-4", //.jpg || .webp
            },
            {
                name: "art-classes-5", //.jpg || .webp
            },
            {
                name: "art-classes-6", //.jpg || .webp
            },
            {
                name: "art-classes-7", //.jpg || .webp
            },
            {
                name: "art-classes-8", //.jpg || .webp
            },
            {
                name: "art-classes-9", //.jpg || .webp
            },
        ]
    },
    {
        name: "americanIllustration", // 2
        date: "May 5, 2021",
        dateTime: "2021-05-05",
        hero: "american-illustration-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "AI-AP American Illustration AI40 selected winner.",
        title: "American Illustration",
        content: "<p>Thank you <a target='_blank' rel='noreferrer' href='https://www.instagram.com/american_illustration_winners/'>@american_illustration_winners</a> for the honor!</p>",
        aditionalImages: [
            {
                name: "american-illustration-2", //.jpg || .webp
            },
        ]
    },
    {
        name: "blackboard", // 1
        date: "May 2, 2021",
        dateTime: "2021-05-02",
        hero: "blackboard-1", //.jpg || .webp
        width: 670,
        height: 838,
        alt: "Picture of my studio's blackboard.",
        title: "Blackboard",
        content: "<p>It's Sunday. I have a blackboard.</p> <p>#facts</p>",
        aditionalImages: []
    },
];


// Function definitions

const applyBackgroundColor = (color) => {
    document.querySelector(".main-news").style.backgroundColor = color;
}

const getFromParam = () => {
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);

    let from = 0;

    if (urlParam.get('item') != null){
        from = urlParam.get('item');
    }

    return from;
}

const getToParam = () => {
    const queryString = window.location.search;
    const urlParam = new URLSearchParams(queryString);

    let to = 9;

    if (urlParam.get('item') != null){
        to = urlParam.get('to');
    }

    return to;
}

const generateNewsByPage = (news) => {
    let from = getFromParam();
    let to = getToParam();

    for (let i = from; i <= to; i++) {

        if (typeof news[i] !== 'undefined'){

            const content = generateArticle(news[i], i);

            let articlesContainer = document.querySelector(".articles-container");

            articlesContainer.insertAdjacentHTML('beforeend', content);
        }
    }
}

const generateArticle = (article, index) => {
    const aditionalImages = article.aditionalImages.length;

    let dots = "";

    if (aditionalImages > 0){
        for (let i = 0; i < aditionalImages; i++) {
            dots += "<div class='dot' data-src='images/media-news/" + article.aditionalImages[i].name + "'></div>";
        }
    }

    let lazy = index;
    if (index.toString().length > 1){
        lazy = index.toString().slice(-1);
    }

    const content = `
        <article class="item">
            <time datetime="${article.dateTime}">${article.date}</time>
            <h2>${article.title}</h2>
            <div class="image-container">
                <picture data-news="${article.name}">

                    <source class="sourceWebp" srcset="images/media-news/${article.hero}.webp" type="image/webp">

                    <source class="sourceJpg" srcset="images/media-news/${article.hero}.jpg" type="image/jpeg">

                    <img class="srcImg" src="images/media-news/${article.hero}.jpg"
                    alt="${article.alt}"
                    width="${article.width}" height="${article.height}"
                    ${article.aditionalImages.length > 0 ? '' : 'style="width:100%;"'}
                    ${lazy > 3 ? 'loading="lazy"' : 'loading="eager"'}>

                </picture>
                <div class="controls-container" ${article.aditionalImages.length > 0 ? '' : 'style="display:none;"'}>
                    <div class="controls">
                        <button aria-label="Previous image" type="button" name="button" class="previous">
                            <img aria-hidden="true" src="icons/cheveron-outline-left.svg" alt="Left icon.">
                        </button>

                        <button aria-label="Next image" type="button" name="button" class="next">
                            <img aria-hidden="true" src="icons/cheveron-outline-right.svg" alt="Close menu icon.">
                        </button>
                    </div>
                </div>
                <div class="dots-container ${article.name}" ${article.aditionalImages.length > 0 ? '' : 'style="display:none;"'}>
                    <div class="dot active" data-src="images/media-news/${article.hero}"></div>
                    ${dots}
                </div>
            </div>
            ${article.content}
        </article>
    `;

    return content;
}

const next = (event) => {

    const newsSelected = event.target.closest("article").querySelector("picture"); // picture with data-news attribute

    const newsName = newsSelected.getAttribute('data-news');

    const heroImage = newsSelected.lastElementChild; // picture img
    // reset properties
    heroImage.style.right = "unset";
    heroImage.style.left = "unset";

    const aditionalImages = document.querySelectorAll(".dots-container." + newsName + " .dot");

    const currentSelected = document.querySelector(".dots-container." + newsName + " .dot.active");

    let nextImage = currentSelected.nextElementSibling; //div class dot

    if (nextImage == null){
        nextImage = aditionalImages[0];
    }

    aditionalImages.forEach((element) => {
        element.classList.remove("active");
    });

    nextImage.classList.add("active");

    const url = nextImage.getAttribute('data-src');

    // set transition
    heroImage.style.opacity = "0";
    heroImage.style.transitionProperty = "none";
    heroImage.style.right = "-100%";
    heroImage.style.transitionProperty = "right";

    const sourceWebp = newsSelected.querySelector(".sourceWebp");
    const sourceJpg = newsSelected.querySelector(".sourceJpg");
    const srcImg = newsSelected.querySelector(".srcImg");

    sourceWebp.srcset = url + ".webp";
    sourceJpg.srcset = url + ".jpg";
    srcImg.src = url + ".jpg";


    srcImg.onload = () => {
        setTimeout(() => {
            heroImage.style.opacity = "1";
            heroImage.style.right = "0%";
        }, 200);
    };
}

const previous = (event) => {

    const newsSelected = event.target.closest("article").querySelector("picture"); // picture with data-news attribute

    const newsName = newsSelected.getAttribute('data-news');

    const heroImage = newsSelected.lastElementChild; // picture img
    // reset properties
    heroImage.style.right = "unset";
    heroImage.style.left = "unset";

    const aditionalImages = document.querySelectorAll(".dots-container." + newsName + " .dot");

    const currentSelected = document.querySelector(".dots-container." + newsName + " .dot.active");

    let previousImage = currentSelected.previousElementSibling; //div class dot

    if (previousImage == null){
        let lastImage = (aditionalImages.length) -1;
        previousImage = aditionalImages[lastImage];
    }

    aditionalImages.forEach((element) => {
        element.classList.remove("active");
    });

    previousImage.classList.add("active");

    const url = previousImage.getAttribute('data-src');

    // set transition
    heroImage.style.opacity = "0";
    heroImage.style.transitionProperty = "none";
    heroImage.style.left = "-100%";
    heroImage.style.transitionProperty = "left";

    let sourceWebp = newsSelected.querySelector(".sourceWebp");
    let sourceJpg = newsSelected.querySelector(".sourceJpg");
    let srcImg = newsSelected.querySelector(".srcImg");

    sourceWebp.srcset = url + ".webp";
    sourceJpg.srcset = url + ".jpg";
    srcImg.src = url + ".jpg";


    srcImg.onload = () => {
        setTimeout(() => {
            heroImage.style.opacity = "1";
            heroImage.style.left = "0%";
        }, 200);
    };
}

const handleGesture = (event) => {
    if (touchendX < touchstartX && (touchstartX - touchendX) > 50 ) {
        next(event);
    }
    if (touchendX > touchstartX && (touchendX - touchstartX > 50) ) {
        previous(event);
    }

    touchstartX = 0;
    touchendX = 0;
}

const generatePagination = (news) => {
    let from = getFromParam();

    let page = 0;

    for (let i = 0; i < news.length; i+= 10) {

        let counter = i + 9;

        page++;

        let pagination = `
            <a href="news.html?item=${i}&to=${counter}">
                <li ${from == i ? 'class="active"' : ''}>${page}</li>
            </a>
        `;

        let paginationContainer = document.querySelector(".pagination");

        paginationContainer.insertAdjacentHTML('beforeend', pagination);
    }
}

const resize = () => {
    const grid = document.querySelector(".articles-container");
    const rowHeight = getStyleValue(grid, "grid-auto-rows");
    const rowGap = getStyleValue(grid, "grid-row-gap");
    grid.style.gridAutoRows = "auto";
    grid.style.alignItems = "self-start";
    grid.querySelectorAll(".item").forEach(item => {
      item.style.gridRowEnd = `span ${Math.ceil(
        (item.clientHeight + rowGap) / (rowHeight + rowGap)
      )}`;

    });
    grid.removeAttribute("style");
}

const getStyleValue = (element, style) => {
    return parseInt(window.getComputedStyle(element).getPropertyValue(style));
}

const setMasonryLayout = () => {
    window.addEventListener("load", resize);
    window.addEventListener("resize", resize);
}


// Code execution

let backgroundColor = localStorage.getItem('backgroundColor');
if (backgroundColor == null){
    backgroundColor = '#6fa594';
}

applyBackgroundColor(backgroundColor);

generateNewsByPage(news);

// Add next / previuos functionality for images
document.addEventListener('click', (event) => {
    if (event.target.matches('.controls .next') || event.target.matches('.controls .next img')) {
        next(event);
    }

    if (event.target.matches('.controls .previous') || event.target.matches('.controls .previous img')) {
        previous(event);
    }
});

// Touch events for swiping images
let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', (event) => {
    if (event.target.matches('img.srcImg')) {
        const newsName = event.target.parentElement.getAttribute('data-news');

        const aditionalImages = document.querySelector(".dots-container." + newsName).children;

        if (aditionalImages.length > 1){
            touchstartX = event.changedTouches[0].screenX;
        }
    }
}, {passive: true});


document.addEventListener('touchend', (event) => {
    if (event.target.matches('img.srcImg')) {
        const newsName = event.target.parentElement.getAttribute('data-news');

        const aditionalImages = document.querySelector(".dots-container." + newsName).children;

        if (aditionalImages.length > 1){

            touchendX = event.changedTouches[0].screenX;
            handleGesture(event);
        }
    }
}, {passive: true});


generatePagination(news);

setMasonryLayout();
