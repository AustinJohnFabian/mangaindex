import { Injectable } from '@angular/core';
import { Comic } from '../models/comic.model';

@Injectable()
export class MangasService {

  comics: Comic[] = [
    {
      title: 'Ghost in the shell',
      description: ' Set in a futuristic cyberpunk world, the story revolves around a counter-cyberterrorist organization known as Public Security Section 9, led by the cyborg Major Motoko Kusanagi. In this world where cybernetic enhancements and advanced technology are commonplace, the series explores themes of identity, consciousness, and the impact of technology on society.',
      genre: 'Action',
      imageUrl: '../../../assets/images/GITS.jpg',
      status: 'Completed',
      type: 'New-Arrivals',
      rating: '7.5'


    },
    {
      title: 'One Piece',
      description: ' the story of Monkey D. Luffy, a young pirate with the ability to stretch his body like rubber after eating a mystical fruit. Luffy sets out on a journey to find the ultimate treasure known as the "One Piece" and become the Pirate King.',
      genre: 'Adventure',
      imageUrl: '../../../assets/images/onepiece.jpg',
      status: 'On Going',
      type: 'Popular-Manga',
      rating: '9.5'

    },
    {
      title: 'Attack on Titan',
      description: 'In a world where humanity is on the brink of extinction due to giant humanoid creatures called Titans, a young boy named Eren Yeager joins the fight to reclaim their lost territory and uncover the mysteries behind the Titans.',
      genre: 'Action',
      imageUrl: '../../../assets/images/AOT.jpg',
      status: 'Completed',
      type: 'Popular-Manga',
      rating: '9.0'
    },
    {
      title: 'Naruto',
      description: 'Follow the journey of Naruto Uzumaki, a young ninja who seeks recognition from his peers as he aspires to become the Hokage, the leader of his village.',
      genre: 'Action',
      imageUrl: '../../../assets/images/naruto.jpg',
      status: 'Completed',
      type: 'Popular-Manga',
      rating: '8.7'
    },
    {
      title: 'Death Note',
      description: 'When a high school student named Light Yagami discovers a supernatural notebook that grants him the power to kill anyone by writing their name in it, he sets out to cleanse the world of evil, becoming the target of a brilliant detective known as L.',
      genre: 'Mystery',
      imageUrl: '../../../assets/images/deathnote.jpg',
      status: 'Completed',
      type: 'New-Arrivals',
      rating: '9.2'
    },
    {
      title: 'Dragon Ball',
      description: 'Join Goku on his journey as he trains in martial arts and battles against powerful foes to protect the Earth and search for the mystical Dragon Balls.',
      genre: 'Action',
      imageUrl: '../../../assets/images/dragonballz.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '8.9'
    },
    {
      title: 'Bleach',
      description: 'Follow the story of Ichigo Kurosaki, a teenager with the ability to see ghosts. When he obtains the powers of a Soul Reaper, he must defend humanity from evil spirits and guide souls to the afterlife.',
      genre: 'Action',
      imageUrl: '../../../assets/images/bleach.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '8.4'
    },
    {
      title: 'Fullmetal Alchemist: Brotherhood',
      description: 'Follow the Elric brothers, Edward and Alphonse, as they search for the Philosopher\'s Stone to restore their bodies after a failed alchemical experiment.',
      genre: 'Action',
      imageUrl: '../../../assets/images/FMA.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '9.1'
    },
    {
      title: 'One Punch Man',
      description: 'Join Saitama, a superhero who can defeat any opponent with a single punch, as he seeks to find a worthy opponent and faces comical challenges along the way.',
      genre: 'Action',
      imageUrl: '../../../assets/images/onepunchman.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '8.6'
    },
    {
      title: 'Demon Slayer: Kimetsu no Yaiba',
      description: 'Follow Tanjiro Kamado, a young boy turned demon slayer, on his quest to avenge his family and find a cure for his demon-turned sister.',
      genre: 'Action',
      imageUrl: '../../../assets/images/demonslayer.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '9.0'
    },
    {
      title: 'My Hero Academia',
      description: 'Follow the story of Izuku Midoriya, a young boy born without superpowers in a world where they are the norm, as he enrolls in a prestigious hero academy to fulfill his dream of becoming a hero.',
      genre: 'Action',
      imageUrl: '../../../assets/images/bnha.jpg',
      status: 'On Going',
      type: 'Popular-Manga',
      rating: '8.7'
    },
    {
      title: 'Steins;Gate',
      description: 'Follows a group of eccentric individuals who discover a way to send messages to the past using a microwave and must navigate the consequences of altering the timeline.',
      genre: 'Sci-Fi',
      imageUrl: '../../../assets/images/steinsgate.jpg',
      status: 'Completed',
      type: 'New-Arrivals',
      rating: '9.1'
    },
    {
      title: 'Neon Genesis Evangelion',
      description: 'In a post-apocalyptic world, teenagers pilot giant biomechanical mechas known as Evangelions to defend humanity against mysterious beings called Angels.',
      genre: 'Sci-Fi',
      imageUrl: '../../../assets/images/NGE.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '8.8'
    },
    {
      title: 'Ghost in the Shell: Stand Alone Complex',
      description: 'Follows the members of Public Security Section 9 as they investigate cybercrimes and tackle the complex nature of human identity and consciousness in a technologically advanced world.',
      genre: 'Sci-Fi',
      imageUrl: '../../../assets/images/SAC.jpg',
      status: 'Completed',
      type: 'New-Arrivals',
      rating: '8.6'
    },
    {
      title: 'Cowboy Bebop',
      description: 'Set in a futuristic setting, follows a ragtag crew of bounty hunters aboard the spaceship Bebop as they travel through space in pursuit of dangerous criminals.',
      genre: 'Sci-Fi',
      imageUrl: '../../../assets/images/cowboybebop.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '8.9'
    },
    {
      title: 'Psycho-Pass',
      description: 'In a dystopian future, society is governed by a system that can predict and measure a person\'s likelihood to commit crimes, and a team of law enforcement officers must maintain order and investigate crimes.',
      genre: 'Sci-Fi',
      imageUrl: '../../../assets/images/psychopass.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '8.5'
    },
    {
      title: 'Gintama',
      description: 'Follows the misadventures of Gintoki Sakata, a lazy samurai who takes odd jobs to make ends meet in a world invaded by aliens.',
      genre: 'Comedy',
      imageUrl: '../../../assets/images/gintama.jpg',
      status: 'Completed',
      type: 'Popular-Manga',
      rating: '9.1'
    },
    {
      title: 'Nichijou',
      description: 'Depicts the humorous and exaggerated daily lives of a group of high school students and their quirky interactions.',
      genre: 'Comedy',
      imageUrl: '../../../assets/images/Nichijou.jpg',
      status: 'Completed',
      type: 'Popular-Manga',
      rating: '8.8'
    },
    {
      title: 'The Disastrous Life of Saiki K.',
      description: 'Follows the life of Kusuo Saiki, a high school student with psychic powers, as he tries to live a normal life while dealing with eccentric classmates and unexpected situations.',
      genre: 'Comedy',
      imageUrl: '../../../assets/images/saiki.jpg',
      status: 'Completed',
      type: 'Popular-Manga',
      rating: '8.6'
    },
    {
      title: 'Great Teacher Onizuka',
      description: 'Follows the story of Eikichi Onizuka, a former gang member turned teacher who uses unorthodox methods to connect with his students and teach them life lessons.',
      genre: 'Comedy',
      imageUrl: '../../../assets/images/GTO.jpg',
      status: 'Completed',
      type: 'Popular-Manga',
      rating: '8.9'
    },
    {
      title: 'Daily Lives of High School Boys',
      description: 'Depicts the everyday lives of three high school boys and their comedic interactions with friends, classmates, and the absurd situations they find themselves in.',
      genre: 'Comedy',
      imageUrl: '../../../assets/images/DLHSB.png',
      status: 'Completed',
      type: 'Popular-Manga',
      rating: '8.5'
    },

    {
      title: 'Black Clover',
      description: 'Follows Asta, a young boy born without magic powers, as he aims to become the Wizard King, the strongest mage in the kingdom, by relying on his physical strength and determination.',
      genre: 'Action',
      imageUrl: '../../../assets/images/blackclover.jpg',
      status: 'On Going',
      type: 'Popular-Manga',
      rating: '7.9'
    },
    {
      title: 'Jujutsu Kaisen',
      description: 'Follows Yuji Itadori, a high school student with impressive physical abilities who becomes involved in the world of curses and exorcism after swallowing a cursed object.',
      genre: 'Action',
      imageUrl: '../../../assets/images/jujutsukaisen.jpg',
      status: 'On Going',
      type: 'New-Arrivals',
      rating: '8.8'
    },
    {
      title: 'Dr. Stone',
      description: 'Set in a world where humanity has been petrified for thousands of years, follows the efforts of Senku Ishigami, a genius scientist, to rebuild civilization using science and technology.',
      genre: 'Adventure',
      imageUrl: '../../../assets/images/drstone.webp',
      status: 'On Going',
      type: 'New-Arrivals',
      rating: '8.2'
    },
    {
      title: 'Demon Slayer: Kimetsu no Yaiba - The Entertainment District Arc',
      description: 'Continues the story of Tanjiro Kamado and his demon slayer companions as they venture into the mysterious Entertainment District to investigate a series of disappearances.',
      genre: 'Action',
      imageUrl: '../../../assets/images/EDarc.jpg',
      status: 'On Going',
      type: 'Latest-Chapters',
      rating: '9.1'
    },
    {
      title: 'Fairy Tail',
      description: 'A fantasy adventure series set in the world of Earth-land, where wizards form guilds and take on quests and adventures. Follows the journey of Natsu Dragneel, a fire magic-wielding Dragon Slayer, and his friends in the Fairy Tail Guild.',
      genre: 'Fantasy',
      imageUrl: '../../../assets/images/fairytail.jpg',
      status: 'Completed',
      type: 'Latest-Chapters',
      rating: '8.2'
    },
    {
      title: 'Komi-san wa, Komyushou Desu.',
      description: 'Follows the story of Shoko Komi, a high school girl with a communication disorder that makes her appear cold and distant. Despite her difficulties in speaking to others, she strives to make 100 friends and relies on the help of her classmate, Hitohito Tadano.',
      genre: 'Comedy',
      imageUrl: '../../../assets/images/komisan.png',
      status: 'Ongoing',
      type: 'Latest-Chapters',
      rating: '8.7'
    },
  ];

  getComics(): Comic[] {
    return this.comics;
  }

  getComicByTitle(title: string): Comic | undefined {
    return this.comics.find(comic => comic.title === title);
  }

  getComicsByGenre(genre: string): any[] {
    return this.comics.filter(comic => comic.genre === genre);
  }

  getComicsByType(type: string): any[] {
    return this.comics.filter(comic => comic.type === type);
  }
  
  getUniqueGenres(): string[] {
    const genresSet = new Set<string>();
    this.comics.forEach(comic => genresSet.add(comic.genre));
    return Array.from(genresSet);
  }
  
  getUniqueTypes(): string[] {
    const typesSet = new Set<string>();
    this.comics.forEach(comic => typesSet.add(comic.type));
    return Array.from(typesSet);
  }

  getPopularComics(limit: number): any[] {
    // Sort the comics based on popularity (e.g., number of ratings, views, etc.)
    const sortedComics = this.comics.sort((a, b) => {
      // Convert the ratings to numbers before comparison
      const ratingA = Number(a.rating);
      const ratingB = Number(b.rating);
      
      return ratingB - ratingA;
    });
  
    // Return the specified number of popular comics
    return sortedComics.slice(0, limit);
  }

  getSlides(): Comic[] {
    return this.comics.filter(comic => comic.type === 'New-Arrivals');
  }  
}
