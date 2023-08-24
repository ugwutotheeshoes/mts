import React from "react";
import {
  VscHome,
  VscVmRunning,
  VscLibrary,
  // VscChevronDown,
  // VscChevronUp,
} from "react-icons/vsc";
export const links = [
  {
    id: 1,
    text: "Home",
    icon: <VscHome />,
    url: "/",
  },
  {
    id: 2,
    text: "Genre",
    icon: <VscLibrary />,
    url: "/genre",
  },
  {
    id: 3,
    text: "TV Shows",
    icon: <VscVmRunning />,
    url: "/shows",
  },
];

export const icons = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1648827303/Trailer/Action/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY_._V1__uzkz5r.jpg",
    name: "advontura",
    genre: "family, adventure",
    ratings: "/10",
    url: "/1",
    text: "view details",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1648827303/Trailer/Action/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY_._V1__uzkz5r.jpg",
    name: "scream boi",
    genre: "horror",
    ratings: "/10",
    url: "/1",
    text: "view details",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1648827303/Trailer/Action/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY_._V1__uzkz5r.jpg",
    name: "home alone with guns",
    genre: "action, comedy",
    ratings: "/10",
    url: "/1",
    text: "view details",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1648827303/Trailer/Action/MV5BOGE2NWUwMDItMjA4Yi00N2Y3LWJjMzEtMDJjZTMzZTdlZGE5XkEyXkFqcGdeQXVyODk4OTc3MTY_._V1__uzkz5r.jpg",
    name: "home alone without guns",
    genre: "action, comedy",
    ratings: "/10",
    url: "/1",
    text: "view details",
  },
];

export const genre = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,h_350,w_210/v1622468574/Trailer/Action/Keanu_Reeves_Neon_John_Wick_Chapter_3_Parabellum_4K_Ultra_HD_Mobile_Wallpaper_gvqk44.jpg",
    text: "action",
    url: "/action",
    border: "purple",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1622469323/Trailer/Adventure/Jurassic_Park_1993_Phone_Wallpaper___Moviemania_ncsmes.jpg",
    text: "adventure",
    url: "/adventure",
    border: "darkgreen",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1622468902/Trailer/Animation/Hotel_Transylvania_3__Summer_Vacation_vampire_Scuba_diving_animated_move_720x1280_wallpaper_e0nwfg.jpg",
    text: "animation",
    url: "/animation",
    border: "blue",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,h_350,w_220/v1692066048/Trailer/Comedy/Macaulay_Culkin_channels_Home_Alone_at_wrestling_ring_yjfrxr.jpg",
    text: "comedy",
    url: "/comedy",
    border: "red",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,h_350,w_220/v1622470076/Trailer/Crime/apostrophe9__Photo_skdydm.jpg",
    text: "crime",
    url: "/crime",
    border: "white",
  },
  {
    id: 6,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,h_350,w_210/v1692062303/Trailer/Family/Ariel_a3s7e9.jpg",
    text: "family",
    url: "/family",
    border: "brown",
  },
  {
    id: 7,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,h_350,w_210/v1692064428/Trailer/Horror/30996100-e275-441e-ad2a-36b5c69f3175_hpyu7q.jpg",
    text: "horror",
    url: "/horror",
    border: "grey",
  },
  {
    id: 8,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,h_350,w_210/v1692065508/Trailer/Sci-fi/bumblebee.jpg",
    text: "sci-fi",
    url: "/scifi",
    border: "yellow",
  },
  {
    id: 9,
    image:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/c_fill,h_350,w_210/v1692064966/Trailer/Series/Milk_Heavy_Sugar_aso0ik.jpg",
    text: "series",
    url: "/series",
    border: "green",
  },
];

export const movies = [
  {
    id: 0,
    name: "Creed III",
    category: "action",
    genre: "Sports, Drama",
    ratings: 7.3,
    video: "https://youtube.com/watch?v=AHmCH7iB_IM",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692188968/Trailer/Homepage/Creed_III_2023_d79d6g.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692188973/Trailer/Homepage/Creed_II___GearMoose_vypfpy.jpg",
    details:
      "Still dominating the boxing world, Adonis Creed is thriving in his career and family life. When Damian, a childhood friend and former boxing prodigy resurfaces after serving time in prison, he's eager to prove that he deserves his shot in the ring. The face-off between former friends is more than just a fight. To settle the score, Adonis must put his future on the line to battle Damian -- a fighter who has nothing to lose.",
    director: "Michael B. Jordan",
    writers: "Ryan Coogler, Keenan Coogler, Zach Baylin, Sylvester Stallone",
    casts:
      "Michael B. Jordan, Tessa Thompson, Jonathan Majors, Wood Harris, Mila Davis-Kent, Florian Munteanu, Phylicia Rashad",
    release: "March 3, 2023",
  },
  {
    id: 1,
    name: "John Wick: Chapter 4",
    front: true,
    border: "right",
    category: "action",
    genre: "Action, Crime, Thriller",
    ratings: 8.5,
    video: "https://www.youtube.com/watch?v=qEVUtrk8_B4",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692070211/Trailer/Homepage/John_Wick__Chapter_4_Poster__jrfsvi.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692070206/Trailer/Homepage/JOHN_WICK___CHAPTER_4_rr0ha9.jpg",
    details:
      "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
    director: "Chad Stahelski",
    writers: "Shay Hatten, Michael Finch, Derek Kolstad",
    casts:
      "Keanu Reeves, Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Ian McShane",
    release: "March 24, 2023",
  },
  {
    id: 2,
    name: "Ant-Man and the Wasp: Quantumania",
    category: "action",
    genre: "Action, Adventure, Comedy",
    ratings: 6.4,
    video: "https://www.youtube.com/watch?v=ZlNFpri-Y40",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692188780/Trailer/Homepage/Ant-Man_and_the_Wasp__Quantumania_2023_upsjmk.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692188410/Trailer/Homepage/jonathan_majors_lockscreen_ibmxza.jpg",
    details:
      "Scott Lang and Hope Van Dyne, along with Hank Pym and Janet Van Dyne, explore the Quantum Realm, where they interact with strange creatures and embark on an adventure that goes beyond the limits of what they thought was possible.",
    director: "Peyton Reed",
    writers: "Jeff Loveness, Stan Lee, Larry Lieber Jack Kirby",
    casts:
      "Paul Rudd, Evangeline Lilly, Jonathan Majors, Kathryn Newton, David Dastmalchian, Katy O'Brian, William Jackson Harper, Bill Murray, Michelle Pfeiffer, Corey Stoll, Michael Douglas",
    release: "February 17, 2023",
  },
  {
    id: 3,
    name: "Oppenheimer",
    category: "drama",
    genre: "Biography, Drama, History",
    ratings: 8.6,
    video:
      "https://www.youtube.com/watch?v=uYPbbksJxIg&pp=ygULb3BwZW5oZWltZXI%3D",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692186603/Trailer/Homepage/opp.jpg",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692186574/Trailer/Homepage/ah10nu6xx7w9kunoytk9.jpg",
    details:
      "The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb.",
    director: "Christopher Nolan",
    writers: "Christopher Nolan, Kai Bird, Martin Sherwin",
    casts:
      "Cillian Murphy, Emily Blunt, Robert Downey Jr., Alden Ehrenreich, Scott Grimes, Jason Clarke, Kurt Koehler, Tony Goldwyn, John Gowans, Macon Blair",
    release: "July 21, 2023",
  },
  {
    id: 4,
    name: "Barbie",
    category: "comedy",
    front: true,
    genre: "Adventure, Comedy, Fantasy",
    ratings: 7.4,
    video: "https://www.youtube.com/watch?v=pBk4NYhWNMM&pp=ygUGYmFyYmll",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692187039/Trailer/Homepage/Barbie_Director_Greta_Gerwig_s_Favorite_Books_vl1mhj.png",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692187041/Trailer/Homepage/barbie.jpg",
    details:
      "Barbie suffers a crisis that leads her to question her world and existence.",
    director: "Greta Gerwig",
    writers: "Greta Gerwig, Noah Baumbach",
    casts:
      "Margot Robbie, Issa Rae, Kate McKinnon, Alexandra Shipp, Emma Mackey, Dua Lipa, Ryan Gosling, Simu Liu, Kingsley Ben-Adir, Ncuti Gatwa, Scott Evans",
    release: "July 21, 2023",
  },
  {
    id: 5,
    name: "Guardians of the Galaxy Vol. 3",
    front: true,
    border: "left",
    category: "adventure",
    genre: "Adventure, Action, Comedy",
    ratings: "none",
    video: "https://www.youtube.com/watch?v=JqcncLPi9zw",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692070001/Trailer/Homepage/Guardians_of_the_Galaxy_Vol__3_zilqm1.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692070003/Trailer/Homepage/Guardians_of_the_Galaxy_ne6pfl.jpg",
    details:
      "Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.",
    director: "James Gunn",
    writers: "James Gunn, Dan Abnett, Andy Lanning",
    casts:
      "Chris Pratt, Zoe Saldaña, Dave Bautista, Karen Gillan, Pom Klementieff, Vin Diesel, Bradley Cooper, Sean Gunn, Chukwudi Iwuji, Will Poulter, Elizabeth Debicki, Maria Bakalova, Sylvester Stallone",
    release: "May 5, 2023",
  },
  {
    id: 6,
    name: "Dungeons & Dragons: Honor Among Thieves",
    category: "adventure",
    genre: "Adventure, Action, Fantasy",
    ratings: 7.3,
    video: "https://www.youtube.com/watch?v=IiMinixSXII",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692189741/Trailer/Homepage/Dungeons_Dragons__Honor_Among_Thieves_2023_vv83yb.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692189744/Trailer/Homepage/Dungeons_Dragons__Rege_Jean-Page_Hired_For_Purpose_Of_Out-Hotting_Chris_Pine_-_Looper_lkldnc.jpg",
    details:
      "A charming thief and a band of unlikely adventurers embark on an epic quest to retrieve a long lost relic, but their charming adventure goes dangerously awry when they run afoul of the wrong people.",
    director: "John Francis Daley, Jonathan Goldstein",
    writers:
      "Jonathan Goldstein, John Francis Daley, Michael Gilio, Chris McKay",
    casts:
      "Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith, Sophia Lillis, Hugh Grant",
    release: "April 7, 2023",
  },
  {
    id: 7,
    name: "Indiana Jones and the Dial of Destiny",
    category: "adventure",
    genre: "Adventure, Action",
    ratings: 6.8,
    video:
      "https://www.youtube.com/watch?v=eQfMbSe7F2g&pp=ygUlSW5kaWFuYSBKb25lcyBhbmQgdGhlIERpYWwgb2YgRGVzdGlueQ%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692190831/Trailer/Homepage/Indiana_Jones_and_the_Dial_of_Destiny_gdy7v6.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692190834/Trailer/Homepage/How_The_Dial_Of_Destiny_Works_In_Indiana_Jones_5_Explained_With_Real_Science_Math_mdrqkx.jpg",
    details:
      "Archaeologist Indiana Jones races against time to retrieve a legendary artifact that can change the course of history.",
    director: "James Mangold",
    writers:
      "Jez Butterworth, John-Henry Butterworth, David Koepp, James Mangold, George Lucas, Philip Kaufman",
    casts:
      "Harrison Ford, Phoebe Waller-Bridge, Antonio Banderas, John Rhys-Davies, Shaunette Renée Wilson, Thomas Kretschmann, Toby Jones, Boyd Holbrook, Olivier Richters, Ethann Isidore, Mads Mikkelsen",
    release: "June 30, 2023",
  },
  {
    id: 8,
    name: "Spider-Man: Across the Spider-Verse",
    front: true,
    border: "right",
    category: "animation",
    genre: "Animation, Action, Adventure, Comedy",
    ratings: 8,
    video: "https://www.youtube.com/watch?v=cqGjhVJWtEg",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692070253/Trailer/Homepage/Spider_Man__Across_The_Spider_Verse_International_Poster_hoh0lo.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692072155/Trailer/Homepage/miles_qvosv1.jpg",
    details:
      "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",
    director: "Joaquim Dos Santos, Justin K. Thompson, Kemp Powers",
    writers: "Phil Lord, Christopher Miller, David Callaham",
    casts:
      "Shameik Moore, Hailee Steinfeld, Jake Johnson, Issa Rae, Daniel Kaluuya, Jason Schwartzman, Brian Tyree Henry, Luna Lauren Vélez, Greta Lee, Rachel Dratch, Jorma Taccone, Shea Whigham, Oscar Isaac",
    release: "June 2, 2023",
  },
  {
    id: 9,
    name: "Peter Pan & Wendy",
    category: "adventure",
    genre: "Adventure, Action, Fantasy",
    ratings: 4.4,
    video:
      "https://www.youtube.com/watch?v=p-5sVX7MRj8&pp=ygURUGV0ZXIgUGFuICYgV2VuZHk%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692394635/Trailer/Homepage/Peter_Pan_Wendy_2023_p7vbwi.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692395073/Trailer/Homepage/jungle.png",
    details:
      "Wendy Darling, a young girl looking to avoid boarding school, meets Peter Pan, a boy who refuses to grow up. Wendy, her brothers, and Tinker Bell travel with Peter to the magical world of Neverland, where she encounters an evil pirate captain.",
    director: "David Lowery",
    writers: "David Lowery, Toby Halbrooks",
    casts:
      "Jude Law, Alexander Molony, Ever Anderson, Yara Shahidi, Alyssa Wapanatâhk, Joshua Pickering, Jacobi Jupe, Molly Parker, Alan Tudyk, Jim Gaffigan",
    release: "April 28, 2023",
  },
  {
    id: 10,
    name: "The Super Mario Bros. Movie",
    category: "animation",
    genre: "Animation, Adventure, Comedy",
    ratings: 7.1,
    video: "https://www.youtube.com/watch?v=TnGl01FkMMo",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692189501/Trailer/Homepage/The_Super_Mario_Bros__Movie_2023_jexyj0.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692189546/Trailer/Homepage/peach_g0ypyr.jpg",
    details:
      "With help from Princess Peach, Mario gets ready to square off against the all-powerful Bowser to stop his plans from conquering the world.",
    director: "Aaron Horvath, Michael Jelenic",
    writers: "Matthew Fogel",
    casts:
      "Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, Fred Armisen, Sebastian Maniscalco, Charles Martinet, Kevin Michael Richardson",
    release: "March 31, 2023",
  },
  {
    id: 11,
    name: "Elemental",
    border: "left",
    category: "animation",
    genre: "Animation, Adventure, Comedy",
    ratings: 7,
    video:
      "https://www.youtube.com/watch?v=hXzcyx9V0xw&pp=ygUSZWxlbWVudGFscyB0cmFpbGVy",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692395592/Trailer/Homepage/Disney_Pixar_Elemental_Movie_Review_zwmhir.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692395595/Trailer/Homepage/Does_Elemental_Have_A_Post-Credits_Scene__wmxdp2.jpg",
    details:
      "Follows Ember and Wade, in a city where fire-, water-, land- and air-residents live together.",
    director: "Peter Sohn",
    writers: "John Hoberg, Kat Likkel, Brenda Hsueh",
    casts:
      "Leah Lewis, Mamoudou Athie, Ronnie De, Catherine O'Hara, Joe Pera, Shila Ommi",
    release: "June 16, 2023",
  },
  {
    id: 12,
    name: "Demon Slayer: Kimetsu no Yaiba – To the Sword Village",
    category: "animation",
    genre: "Animation, Adventure, Comedy",
    ratings: 7.3,
    video:
      "https://www.youtube.com/watch?v=9DhuWapDDrw&pp=ygU3RGVtb24gU2xheWVyOiBLaW1ldHN1IG5vIFlhaWJhIOKAkyBUbyB0aGUgU3dvcmQgVmlsbGFnZQ%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692396631/Trailer/Homepage/kimetsu_ztaqsi.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692396633/Trailer/Homepage/Tanjiro_qlovib.jpg",
    details:
      "All the Upper Rank Demons assemble at the Infinity Castle after Upper Six Demons' defeat.",
    director: "Harou Sotozaki",
    writers: "Ufotable, Koyoharu Gotouge",
    casts:
      "Kana Hanazawa, Akari Kito, Zach Aguilar, Mamoru Miyano, Natsuki Hanae, Kengo Kawanishi, Laila Berzins, Kira Buckland",
    release: "February 3, 2023",
  },
  {
    id: 13,
    name: "The Last Voyage of the Demeter",
    border: "right",
    category: "horror",
    genre: "Horror",
    ratings: 6.5,
    video:
      "https://www.youtube.com/watch?v=6FgUUO9Ztd0&pp=ygUeVGhlIExhc3QgVm95YWdlIG9mIHRoZSBEZW1ldGVy",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692479108/Trailer/Homepage/539708ef-b0d0-4d1a-ba97-5348b1df2989_w364sh.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692479110/Trailer/Homepage/Demeter_Director__It_s_Alien_At_Sea_bvvqkv.jpg",
    details:
      "A crew sailing from Carpathia to England find that they are carrying very dangerous cargo.",
    director: "André Øvredal",
    writers: "Bragi F. Schut, Zak Olkewicz, Bram Stoker",
    casts:
      "Javier Botet, Corey Hawkins, Aisling Franciosi, Liam Cunningham, David Dastmalchian, Chris Walley, Stefan Kapičić",
    release: "August 18, 2023",
  },
  {
    id: 14,
    name: "Insidious: The Red Door",
    category: "horror",
    genre: "Horror, Thriller, Mystery",
    ratings: 5.6,
    video:
      "https://www.youtube.com/watch?v=ZuQuOnYnr3Q&pp=ygUXSW5zaWRpb3VzOiBUaGUgUmVkIERvb3I%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692480057/Trailer/Homepage/insidious.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692480056/Trailer/Homepage/insi.jpg",
    details:
      "The Lamberts must go deeper into The Further than ever before to put their demons to rest once and for all.",
    director: "Patrick Wilson",
    writers: "Leigh Whannell, Scott Teems",
    casts:
      "Ty Simpkins, Patrick Wilson, Lin Shaye, Rose Byrne, Joseph Bishara, Andrew Astor, Leigh Whannel",
    release: "July 7, 2023",
  },
  {
    id: 15,
    name: "The Pope's Exorcist",
    front: true,
    category: "horror",
    genre: "Horror, Thriller, Mystery",
    ratings: 8,
    video:
      "https://www.youtube.com/watch?v=YJXqvnT_rsk&pp=ygUTVGhlIFBvcGUncyBFeG9yY2lzdA%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692480912/Trailer/Homepage/The_Pope_s_Exorcist_hmwzxy.png",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692480919/Trailer/Homepage/exorcist.jpg",
    details:
      "Follow Gabriele Amorth, the Vatican's leading exorcist, as he investigates the possession of a child and uncovers a conspiracy the Vatican has tried to keep secret.",
    director: "Julius Avery",
    writers:
      "Micheal Petroni, Evan Spiliotopoulos, R. Dean McCreary, Chester Hastings, Jeff Katz",
    casts:
      "Russell Crowe, Laurel Marsden, Alex Essoe, Carrie Munro, Daniel Zovatto, Peter DeSouza-Feighoney, Franco Nero",
    release: "April 14, 2023",
  },
  {
    id: 16,
    name: "The Nun II",
    category: "horror",
    genre: "Horror, Thriller, Mystery",
    ratings: "none",
    video:
      "https://www.youtube.com/watch?v=QF-oyCwaArU&pp=ygUKVGhlIE51biBJSQ%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692481372/Trailer/Homepage/nun.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692481373/Trailer/Homepage/nun%20ii.jpg",
    details:
      "1956 - France. A priest is murdered. An evil is spreading. The sequel to the worldwide smash hit follows Sister Irene as she once again comes face-to-face with Valak, the demon nun.",
    director: "Michael Chaves",
    writers: "Ian Goldberg, Richard Naing, Akela Cooper",
    casts:
      "Bonnie Aarons, Taissa Farmiga, Storm Reid, Anna Popplewell, Jonas Bloquet, Katelyn Rose Downey",
    release: "September 8, 2023",
  },
  {
    id: 17,
    name: "Saw X",
    border: "left",
    category: "horror",
    genre: "Horror, Thriller, Mystery",
    ratings: "none",
    video: "https://www.youtube.com/watch?v=t3PzUo4P21c&pp=ygUFU2F3IFg%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692482001/Trailer/Homepage/saw_daq4nb.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692482003/Trailer/Homepage/saw_x_ejsx6m.jpg",
    details:
      "Chasing a promising procedure that would allegedly cure his cancer, John Kramer heads towards Mexico to go through an experimental treatment, only to find out he was prey for a scam. Now, the scammers becomes the prey on Jigsaw's new game.",
    director: "Kevin Greutert",
    writers: "Josh Stolberg, Pete Goldfinger",
    casts:
      "Tobin Bell, Shawnee Smith, Costas Mandylor, Synnøve Macody Lund, Steven Brand, Renata Vac",
    release: "September 29, 2023",
  },
  {
    id: 18,
    name: "The Out-Laws",
    category: "comedy",
    genre: "Action, Comedy, Crime",
    ratings: 5.4,
    video:
      "https://www.youtube.com/watch?v=R8xepj9wpi4&pp=ygUMVGhlIE91dC1MYXdz",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692482420/Trailer/Homepage/The_Out-Laws_2023_-_IMDb_ehuzgs.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692482422/Trailer/Homepage/outlaw_t8izha.jpg",
    details:
      "A straight-laced bank manager about to marry the love of his life. When his bank is held up by infamous Ghost Bandits during his wedding week, he believes his future in-laws who just arrived in town, are the infamous Out-Laws.",
    director: "Tyler Spindel",
    writers: "Evan Turner; Ben Zazove",
    casts:
      "Nina Dobrev, Ellen Barkin, Adam DeVine, Pierce Brosnan, Lauren Lapkus, Poorna Jagannathan, Richard Kind, Michael Rooker",
    release: "June 30, 2023",
  },
  {
    id: 19,
    name: "Murder Mystery 2",
    category: "crime",
    genre: "Action, Comedy, Crime",
    ratings: 5.7,
    video:
      "https://www.youtube.com/watch?v=LM2F56uK0fs&pp=ygUQTXVyZGVyIE15c3RlcnkgMg%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692595059/Trailer/Homepage/Murder_Mystery_2_Official_Trailer_Spot_Cast_Poster_Gallery_Red_Carpet_GIF_Netflix_xkmn0i.png",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692595061/Trailer/Homepage/2313327_elmuhd.jpg",
    details:
      "Full-time detectives Nick and Audrey are struggling to get their private eye agency off the ground. They find themselves at the center of international abduction when their friend Maharaja, is kidnapped at his own lavish wedding.",
    director: "Jeremy Garelick",
    writers: "James Vanderbilt",
    casts:
      "Jennifer Aniston, Adam Sandler, Mélanie Laurent, Enrique Arce, Mark Strong, Kuhoo Verma, Adeel Akhtar",
    release: "March 31,  2023",
  },
  {
    id: 20,
    name: "Killers of the Flower Moon",
    front: true,
    category: "crime",
    genre: "Crime, Drama, History",
    ratings: "none",
    video:
      "https://www.youtube.com/watch?v=EP34Yoxs3FQ&pp=ygUaS2lsbGVycyBvZiB0aGUgRmxvd2VyIE1vb24%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692595924/Trailer/Homepage/2206890_xs3svj.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692595930/Trailer/Homepage/2374046_wdktge.jpg",
    details:
      "Members of the Osage tribe in the United States are murdered under mysterious circumstances in the 1920s, sparking a major F.B.I. investigation involving J. Edgar Hoover.",
    director: "Martin Scorsese",
    writers: "Martin Scorsese, Eric Roth, David Grann",
    casts:
      "Martin Scorsese, Leonardo DiCaprio, Lily Gladstone, Robert De Niro, Brendan Fraser, Jesse Plemons, Louis Cancelmi, Sturgill Simpson",
    release: "October 20, 2023",
  },
  {
    id: 21,
    name: "You People",
    category: "comedy",
    genre: "Comedy, Romance",
    ratings: 5.5,
    video:
      "https://www.youtube.com/watch?v=pCMHc-IFAB0&pp=ygUKWW91IFBlb3BsZQ%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692595436/Trailer/Homepage/download_11_s5cixd.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692595443/Trailer/Homepage/2287431_cd367g.jpg",
    details:
      "Follows a new couple and their families, who find themselves examining modern love and family dynamics amidst clashing cultures, societal expectations and generational differences.",
    director: "Kenya Barris",
    writers: "Jonah Hill, Kenya Barris",
    casts:
      "Jonah Hill, Lauren London, Eddie Murphy, Julia Louis-Dreyfus, Nia Long, Kenya Barris, David Duchovny",
    release: "January 20, 2023",
  },
  {
    id: 22,
    name: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    category: "animation",
    genre: "Animation, Action, Adventure, Comedy",
    ratings: 7.5,
    video:
      "https://www.youtube.com/watch?v=IHvzw4Ibuho&pp=ygUrVGVlbmFnZSBNdXRhbnQgTmluamEgVHVydGxlczogTXV0YW50IE1heWhlbQ%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692190191/Trailer/Homepage/Teenage_Mutant_Ninja_Turtles__Mutant_Mayhem_gets_a_new_poster_for_World_Turtle_Day_jvfhyr.png",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692190186/Trailer/Homepage/mutant_mayhem_dhjwyp.jpg",
    details:
      "The film follows the Turtle brothers as they work to earn the love of New York City while facing down an army of mutants.",
    director: "Jeff Rowe, Kyler Spears",
    writers:
      "Seth Rogen, Evan Goldberg, Jeff Rowe, Dan Hernandez, Benji Samit, Peter Laird, Kevin Eastman",
    casts:
      "Micah Abbey, Shamon Brown Jr., Nicolas Cantu, Brady Noon, Ayo Edebiri, Maya Rudolph, John Cena, Seth Rogen",
    release: "August 2, 2023",
  },
  {
    id: 23,
    name: "GoodFellas",
    category: "crime",
    genre: "Biography, Crime, Drama",
    ratings: 8.7,
    video:
      "https://www.youtube.com/watch?v=2ilzidi_J8Q&pp=ygUKR29vZEZlbGxhcw%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692596893/Trailer/Homepage/Gangster_Movies_Photo__Goodfellas_aixcle.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692596902/Trailer/Homepage/290301_fhnkmr.jpg",
    details:
      "The story of Henry Hill and his life in the mafia, covering his relationship with his wife Karen and his mob partners Jimmy Conway and Tommy DeVito.",
    director: "Martin Scorsese",
    writers: "Nicholas Pileggi, Martin Scorsese",
    casts:
      "Ray Liotta, Robert De Niro, Joe Pesci, Paul Sorvino, Lorraine Bracco, Frank Vincent, Christopher Serrone",
    release: "September 19, 2023",
  },
  {
    id: 24,
    name: "Cidade de Deus",
    category: "crime",
    genre: "Crime, Drama, Biography",
    ratings: 8.6,
    video:
      "https://www.youtube.com/watch?v=nBWtTrLxUjM&pp=ygUPIENpZGFkZSBkZSBEZXVz",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692597813/Trailer/Homepage/Cidade_de_Deus_Fernando_Meirelles_onnjbd.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692597814/Trailer/Homepage/download_12_qc8zen.jpg",
    details:
      "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
    director: "Fernando Meirelles, Kátia Lund",
    writers: "Paulo Lins, Bráulio Mantovani",
    casts:
      "Alexandre Rodrigues, Alice Braga, Douglas Silva, Phellipe Haagensen, Darlan Cunha, Jonathan Haagensen, Leandro Firmino",
    release: "August 30, 2002",
  },
  {
    id: 25,
    name: "American Gangster",
    category: "crime",
    genre: "Biography, Crime, Drama",
    ratings: 7.8,
    video:
      "https://www.youtube.com/watch?v=BV_nssS6Zkg&pp=ygURQW1lcmljYW4gR2FuZ3N0ZXI%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692598171/Trailer/Homepage/American_Gangster_2007_ge0py4.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692598175/Trailer/Homepage/74639_yfx9ba.jpg",
    details:
      "An outcast New York City cop is charged with bringing down Harlem drug lord Frank Lucas, whose real life inspired this partly biographical film.",
    director: "Ridley Scott",
    writers: "Steven Zaillian, Mark Jacobson",
    casts:
      "Lymari Nadal, Denzel Washington, Russell Crowe, Carla Gugino, Josh Brolin, KaDee Strickland, Idris Elba",
    release: "October 19, 2007",
  },
  {
    id: 26,
    name: "Seven",
    category: "crime",
    genre: "Crime, Drama, Mystery",
    ratings: 8.6,
    video: "https://www.youtube.com/watch?v=znmZoVkCjpI&pp=ygUFc2V2ZW4%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692598665/Trailer/Homepage/seven.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692598664/Trailer/Homepage/282289_mcme9g.jpg",
    details: "seven",
    director: "David Fincher",
    writers: "Andrew Kevin Walker",
    casts:
      "Brad Pitt, Morgan Freeman, Kevin Spacey, Gwyneth Paltrow, Andrew Kevin Walker, R. Lee Ermey, John C. McGinley, Reg E. Cathey",
    release: "September 22, 1995",
  },
  {
    id: 27,
    name: "The Little Mermaid",
    category: "family",
    genre: "Adventure, Family, Fantasy",
    ratings: 7.2,
    video:
      "https://www.youtube.com/watch?v=kpGo2_d3oYE&pp=ygUSVGhlIExpdHRsZSBNZXJtYWlk",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692599148/Trailer/Homepage/mermaid.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692599149/Trailer/Homepage/Eric_and_Ariel_ipjr4j.jpg",
    details:
      "A young mermaid makes a deal with a sea witch to trade her beautiful voice for human legs so she can discover the world above water and impress a prince.",
    director: "Rob Marshall",
    writers: "David Magee, Hans Christian Andersen, John Musker",
    casts:
      "Halle Bailey, Melissa McCarthy, Jonah Hauer-King, Javier Bardem, Jessica Alexander, Daveed Diggs, Simone Ashley",
    release: "May 25, 2023",
  },
  {
    id: 28,
    name: "Home Alone",
    category: "family",
    genre: "Comedy, Family",
    ratings: 7.7,
    video:
      "https://www.youtube.com/watch?v=Fmih-zWIjGY&pp=ygURSG9tZSBBbG9uZSB0YWlsZXI%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692599671/Trailer/Homepage/kevin.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692599672/Trailer/Homepage/download_13_qvrnuk.jpg",
    details:
      "An eight-year-old troublemaker, mistakenly left home alone, must defend his home against a pair of burglars on Christmas eve.",
    director: "Chris Columbus",
    writers: "John Hughes",
    casts:
      "Macaulay Culkin, Joe Pesci, Daniel Stern, Kieran Culkin, Catherine O'Hara, John Heard, Devin Ratray",
    release: "December 15, 1990",
  },
  {
    id: 29,
    name: "Wonka",
    category: "family",
    genre: "Adventure, Comedy, Family",
    ratings: "none",
    video:
      "https://www.youtube.com/watch?v=otNh9bTjXWg&pp=ygULd29ua2VyIDIwMjM%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692599985/Trailer/Homepage/2443433_fhzgdd.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692599987/Trailer/Homepage/2446828_uwkmhq.jpg",
    details:
      "Focusing on a young Willy Wonka and how he came to meet the Oompa-Loompas on one of his earliest adventures.",
    director: "Paul King",
    writers:
      "Timothée Chalamet, Hugh Grant, Rowan Atkinson, Matt Lucas, Mathew Baynton, Olivia Colman, Freya Parker",
    casts: "Simon Farnaby, Paul King, Roald Dahl",
    release: "December 15, 2023",
  },
  {
    id: 30,
    name: "65",
    category: "scifi",
    genre: "Action, Sci-fi, Adventure, Drama",
    ratings: 5.4,
    video: "https://www.youtube.com/watch?v=bHXejJq5vr0&pp=ygUCNjU%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692600448/Trailer/Homepage/65_eo10o9.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692600447/Trailer/Homepage/655_uq4eha.jpg",
    details:
      "An astronaut crash lands on a mysterious planet only to discover he's not alone.",
    director: "Scott Beck, Bryan Woods",
    writers: "Scott Beck, Bryan Woods",
    casts:
      "Adam Driver, Ariana Greenblatt, Chloe Coleman, Nika King,   Alexandra Shipp, Brian Dare",
    release: "March 15, 2023",
  },
  {
    id: 31,
    name: "Transformers: Rise of the Beasts",
    category: "scifi",
    genre: "Action, Sci-fi, Adventure",
    ratings: 6.1,
    video:
      "https://www.youtube.com/watch?v=itnqEauWQZM&pp=ygUgVHJhbnNmb3JtZXJzOiBSaXNlIG9mIHRoZSBCZWFzdHM%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692767276/Trailer/Homepage/Transformers_Rise_of_the_Beasts_wallpaper_ombxco.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692767266/Trailer/Homepage/2409118_bhpbni.jpg",
    details:
      "During the '90s, a new faction of Transformers - the Maximals - join the Autobots as allies in the battle for Earth.",
    director: "Steven Caple Jr.",
    writers: "Joby Harold, Darnell Metayer, Josh Peters",
    casts:
      "Anthony Ramos, Liza Koshy, Pete Davidson, Peter Cullen, Ron Perlman, Michelle Yeoh, Dominique Fishback",
    release: "July 16, 2023",
  },
  {
    id: 32,
    name: "Asteroid City",
    category: "comedy",
    genre: "Comedy, Drama, Romance",
    ratings: 6.7,
    video:
      "https://www.youtube.com/watch?v=9FXCSXuGTF4&pp=ygUNQXN0ZXJvaWQgQ2l0eQ%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692850134/Trailer/Homepage/Asteroid_City_2023_6_7___Comedy_Drama_Romance_cwjypp.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692850141/Trailer/Homepage/2382341_zuz0tl.jpg",
    details:
      "Following a writer on his world famous fictional play about a grieving father who travels with his tech-obsessed family to small rural Asteroid City to compete in a junior stargazing event, only to have his world view disrupted forever.",
    director: "Wes Anderson",
    writers: "Wes Anderson, Roman Coppola",
    casts:
      "Scarlett Johansson, Jason Schwartzman, Maya Hawke, Margot Robbie, Sophia Lillis, Tom Hanks, Tony Revolori, Adrien Brody, Rupert Friend, Edward Norton,  Bryan Cranston, Matt Dillon, Tilda Swinton, Steve Carell, Jeff Goldblum, Hope Davis, Willem Dafoe",
    release: "June 15, 2023",
  },
  {
    id: 33,
    name: "Blue Beetle",
    category: "scifi",
    genre: "Sci-fi, Action, Adventure",
    ratings: 6.8,
    video:
      "https://www.youtube.com/watch?v=4wxyy8Rcz4k&pp=ygUTYmx1ZSBiZWV0bGUgdHJhaWxlcg%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692851116/Trailer/Homepage/Blue_Bettle_Movie_Poster_hgp62w.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692851117/Trailer/Homepage/Blue_Beetle_bckxke.jpg",
    details:
      "An alien scarab chooses college graduate Jaime Reyes to be its symbiotic host, bestowing the teenager with a suit of armor that's capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero known as Blue Beetle.",
    director: "Angel Manuel Soto",
    writers: "Gareth Dunnet-Alcocer",
    casts:
      "Xolo Maridueña, Bruna Marquezine, George Lopez, Belissa Escobedo, Raoul Trujillo,  Susan Sarandon, Harvey Guillén",
    release: "August 18, 2023",
  },
  {
    id: 34,
    name: "The Sopranos",
    category: "series",
    genre: "Crime, Action, Drama",
    ratings: 9.2,
    video:
      "https://www.youtube.com/watch?v=KMx4iFcozK0&pp=ygUTdGhlIHNvcHJhbm9zdHJhaWxlcg%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692852847/Trailer/Homepage/The_Sopranos_1_s4c11z.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692852850/Trailer/Homepage/The_Sopranos_Last_Supper_1999_by_Annie_Liebowitz_id52or.jpg",
    details:
      "New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
    director: "David Chase",
    writers:
      "Michael Imperioli, David Chase, Mathew Weiner, Terence Winter, Mitchell Burgess, Robin Green, Frank Renzulli",
    casts:
      "James Gandolfini, Michael Imperioli, Jamie-Lynn Sigler, Drea de Matteo, Steven Van Zandt, Tony Sirico, Lorraine Bracco",
    release: "January 10, 1999",
  },
  {
    id: 35,
    name: "Preacher",
    category: "series",
    genre: "Adventure, Drama, Fantasy",
    ratings: 7.9,
    video:
      "https://www.youtube.com/watch?v=3gueM4VilVE&pp=ygUQUHJlYWNoZXIgdHJhaWxlcg%3D%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692854187/Trailer/Homepage/The_poster_for_the_final_season_of_PREACHER__k8ueas.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692854188/Trailer/Homepage/Preacher__Cassidy_Joseph_Gilgun_photo_via_Preacher_s_Instagram_hsq5bh.jpg",
    details:
      "After a supernatural event at his church, a preacher enlists the help of a vampire and his ex to find God.",
    director: "Sam Catlin, Evan Goldberg, Seth Rogen",
    writers:
      "Sam Catlin, Dominic Cooper, Seth Rogen, Steve Dillon, Mary Laws, Evan Goldberg, Anatol Yusef, Noah Taylor, Graham McTavish, Mark Harelik, Pip Torrens",
    casts:
      "Dominic Cooper, Joseph Gilgun, Ruth Negga, Ian Colletti, Lucy Griffiths, Pip Torrens, Graham McTavish",
    release: "May 22, 2016",
  },
  {
    id: 36,
    name: "The Fresh Prince of Bel-Air",
    category: "series",
    genre: "Family, Comedy",
    ratings: 7.9,
    video:
      "https://www.youtube.com/watch?v=1nCqRmx3Dnw&pp=ygUjZnJlc2ggcHJpbmNlIG9mIGJlbCBhaXIgb2xkIHRyYWlsZXI%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692855076/Trailer/Homepage/Fresh_Prince_Wallpaper_w9uveo.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692855072/Trailer/Homepage/Will_Smith_Says_Yes_To_Modern_Day_Version_of_Fresh_Prince_of_Bel-Air_With_Fresh_Princess_pz4chf.jpg",
    details:
      "A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.",
    director: "Andy Borowitz, Susan Borowitz",
    writers: "Susan Borowitz, Jeff Pollack",
    casts:
      "Will Smith, James Avery, Alfonso Ribeiro, Karyn Parsons, Joseph Marcell, Janet Hubert, Daphne Maxwell Reid, Tatyana Ali",
    release: "September 10, 1990",
  },
  {
    id: 37,
    name: "Breaking Bad",
    category: "series",
    genre: "Crime, Action, Thriller",
    ratings: 9.5,
    video:
      "https://www.youtube.com/watch?v=HhesaQXLuRY&pp=ygUMQnJlYWtpbmcgQmFk",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692855737/Trailer/Homepage/bad_rezbod.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692855725/Trailer/Homepage/Breaking_Bad_2008_2013_shared_by_mastrianni901_cbhpc5.jpg",
    details:
      "A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    director: "Vince Gilligan",
    writers:
      "Vince Gilligan, Moira Walley-Beckett, Thomas Schnauz, Peter Gould, Sam Catlin",
    casts:
      "Bryan Cranston, Aaron Paul, Anna Gunn, Dean Norris, RJ Mitte, Bob Odenkirk, Betsy Brandt",
    release: "January 20, 2008",
  },
  {
    id: 38,
    name: "Supernatural",
    category: "series",
    genre: "Action, Adventure, Mystery, Fantasy",
    ratings: 8.4,
    video:
      "https://www.youtube.com/watch?v=t-775JyzDTk&pp=ygUMU3VwZXJuYXR1cmFs",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692856723/Trailer/Homepage/Season_12_bwd8ct.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692856458/Trailer/Homepage/spernatural_bdbohg.jpg",
    details:
      "Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons, and gods that roam the earth.",
    director: "Eric Kripke",
    writers: "Eric Kripke, Robert Singer, Sera Gamble, Ben Edlund",
    casts:
      "Jensen Ackles, Jared Padalecki, Misha Collins, Mark Sheppard, Jeffrey Dean Morgan, Jim Beaver, Alexander Calvert",
    release: "September 13, 2005",
  },
  {
    id: 39,
    name: "The Bear",
    category: "series",
    genre: "Drama, Comedy",
    ratings: 8.5,
    video: "https://www.youtube.com/watch?v=gBmkI4jlaIo&pp=ygUIdGhlIGJlYXI%3D",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692856843/Trailer/Homepage/The_best_shows_on_Hulu_right_now_August_2023___Digital_Trends_dyzayj.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692856848/Trailer/Homepage/The_Bear_Actors_on_Why_the_Show_Doesn_t_Need_Romance_irwaqq.jpg",
    details:
      "A young chef from the fine dining world returns to Chicago to run his family's sandwich shop",
    director: "Christopher Storer",
    writers: "Christopher Storer, Sofia Levitsky-Weltz, Karen Joseph Adcock",
    casts:
      "Jeremy Allen White, Ebon Moss-Bachrach, Ayo Edebiri, Lionel Boyce, Liza Colón-Zayas, Abby Elliot, Mathy Matheson",
    release: "June 23, 2022",
  },
  {
    id: 40,
    name: "Shameless",
    category: "series",
    genre: "Comedy, Drama",
    ratings: 8.6,
    video: "https://www.youtube.com/watch?v=9tvkYS5cA58&pp=ygUJc2hhbWVsZXNz",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692857017/Trailer/Homepage/Shameless_2011_n2gsmd.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/a_270,co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692857019/Trailer/Homepage/Shameless_jtfenk.jpg",
    details:
      "A scrappy, feisty, fiercely loyal Chicago family makes no apologies.",
    director: "Paul Abbott, John Wells",
    writers:
      "Alex Borstein, Sheila, Callaghan, Paul Abbott, John Wells, Mike O'Malley",
    casts:
      "William H. Macy, Emmy Rossum, Justin Chatwin, Ethan Cutkosky, Emma Howey, Jeremy Allen White, Steve Howey, Noel Fisher, Cameron Monaghan, Joan Cusack",
    release: "January 9, 2011",
  },
  {
    id: 41,
    name: "They Cloned Tyrone",
    category: "scifi",
    genre: "Sci-fi, Action, Mystery",
    ratings: 6.7,
    video:
      "https://www.youtube.com/watch?v=2S3M1xFVdVg&pp=ygUSVGhleSBDbG9uZWQgVHlyb25l",
    img: "https://res.cloudinary.com/ugwutotheeshoes/image/upload/v1692850785/Trailer/Homepage/tyrone_pda0ir.jpg",
    poster:
      "https://res.cloudinary.com/ugwutotheeshoes/image/upload/co_rgb:000000/b_rgb:000000,co_rgb:000000,o_80/v1692850785/Trailer/Homepage/cloned_tyrone_i5ot0d.jpg",
    details:
      "A series of eerie events thrusts an unlikely trio onto the trail of a nefarious government conspiracy.",
    director: "Juel Taylor",
    writers:
      "Alex Borstein, Sheila, Callaghan, Paul Abbott, John Wells, Mike O'Malley",
    casts:
      "Jamie Foxx, John Boyega, Teyonah Parris, Kiefer Sutherland, J. Alphonse Nicholson, Megan Sousa, David Alan Grier, Shariff Earp",
    release: "June 14, 2023",
  },
];
