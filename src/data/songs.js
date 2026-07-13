const songs = [
  {
    id: 'fast-car',
    title: 'Fast Car',
    artist: 'Tracy Chapman',
    cover: '/covers/fast-car.webp',
    spotify: 'https://open.spotify.com/embed/track/2M9ro2krNb7nr7HSprkEgo',
    lyrics: [
      `Remember when we were driving in your car, speed so fast felt like I was drunk, city lights lay out before us and your arm felt nice wrapped 'round my shoulder, and I had a feeling that I belonged, I had a feeling I could be someone`,
    ],
  },

  {
    id: 'cleopatra',
    title: 'Cleopatra',
    artist: 'The Lumineers',
    cover: '/covers/cleopatra.webp',
    spotify: 'https://open.spotify.com/embed/track/2AXY5WABx7NjWw1zb4qCdc',
    lyrics: [
      `But I've read this script and the costume fits, so I'll play my part`,
    ],
  },

  {
    id: 'take-on-me',
    title: 'Take On Me',
    artist: 'a-ha',
    cover: '/covers/take-on-me.webp',
    spotify: 'https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L',
    lyrics: [
      `But I'll be stumblin' away, slowly learnin' that life is okay, say after me "It's no better to be safe than sorry"`,
      `Is it life or just to play my worries away? You're all the things I've got to remember`,
    ],
  },
  {
    id: 'summer-of-69',
    title: 'Summer of 69',
    artist: 'Bryan Adams',
    cover: '/covers/summer-of-69.webp',
    spotify: 'https://open.spotify.com/embed/track/0GONea6G2XdnHWjNZd6zt3',
    lyrics: [
      `Oh, when I look back now, that summer seemed to last forever and if I had the choice yeah, I'd always wanna be there, those were the best days of my life`,
    ],
  },
  {
    id: 'shape-of-my-heart',
    title: 'Shape of My Heart',
    artist: 'Sting',
    cover: '/covers/shape-of-my-heart.webp',
    spotify: 'https://open.spotify.com/embed/track/6CKoWCWAqEVWVjpeoJXyNH',
    lyrics: [
      `And if I told you that I loved you, you'd maybe think there's something wrong, I'm not a man of too many faces, the mask I wear is one`,
    ],
  },
  {
    id: 'dead-sea',
    title: 'Dead Sea',
    artist: 'The Lumineers',
    cover: '/covers/dead-sea.webp',
    spotify: 'https://open.spotify.com/embed/track/1ipIRGBLxYh0ijp3JioP3p',
    lyrics: [
      `You told me I was like the Dead Sea, you'll never sink when you are with me`,
      `Finest words you ever said to me, honey, can't you see? I was born to be, be your Dead Sea`,
    ],
  },
  {
    id: 'like-a-stone',
    title: 'Like a Stone',
    artist: 'Audioslave',
    cover: '/covers/like-a-stone.webp',
    spotify: 'https://open.spotify.com/embed/track/3YuaBvuZqcwN3CEAyyoaei',
    lyrics: [
      `And on I read, until the day was gone, and I sat in regret of all the things I've done. For all that I've blessed, and all that I've wronged, in dreams until my death, I will wander on`,
    ],
  },
  {
    id: 'reality',
    title: 'Reality',
    artist: 'Lost Frequencies',
    cover: '/covers/reality.webp',
    spotify: 'https://open.spotify.com/embed/track/1Mys1gf9SkMBAVGGxpkJ7d',
    lyrics: [
      `Hate will make you cautious, love will make you glow`,
      `
Make me feel the warmth, make me feel the cold, It's written in our story, it's written on the walls.
This is our call, we rise and we fall, dancing in the moonlight, don't we have it all?`,
    ],
  },
  {
    id: 'catch-and-release',
    title: 'Catch and Release',
    artist: 'Matt Simons',
    cover: '/covers/catch-and-release.webp',
    spotify: 'https://open.spotify.com/embed/track/4mijx6Ka6ditVcHfL341w5',
    lyrics: [
      `So let it wash over me, I'm ready to lose my feet, take me off to the place where one reveals life's mystery`,
      `Everybody got their reason, everybody got their way, we're just catching and releasing what builds up throughout the day`,
    ],
  },
  {
    id: 'stuck-on-the-puzzle',
    title: 'Stuck on the Puzzle',
    artist: 'Alex Turner',
    cover: '/covers/stuck-on-the-puzzle.webp',
    spotify: 'https://open.spotify.com/embed/track/3cUxncrTWSA9lhlQbuIwUY',
    lyrics: [
      `I'm not the kind of fool who's gonna sit and sing to you about stars, girl. But last night I looked up into the dark half of the blue and they'd gone backwards`,
      `I have been searching from the bottom to the top for such a sight, as the one I caught when I saw your fingers dimming the lights, like you're used to being told that you're trouble`,
      `And I spent all night, stuck on the puzzle`,
    ],
  },
  {
    id: 'somewhere-only-we-know',
    title: 'Somewhere Only We Know',
    artist: 'Keane',
    cover: '/covers/somewhere-only-we-know.webp',
    spotify: 'https://open.spotify.com/embed/track/1SKPmfSYaPsETbRHaiA18G',
    lyrics: [
      `I walked across an empty land, I knew the pathway like the back of my hand, I felt the earth beneath my feet, sat by the river and it made me complete`,
      `And if you have a minute, why don't we go, talk about it somewhere only we know? This could be the end of everything, so why don't we go, somewhere only we know?`,
    ],
  },
  {
    id: 'sovereign-light-cafe',
    title: 'Sovereign Light Café',
    artist: 'Keane',
    cover: '/covers/sovereign-light-cafe.webp',
    spotify: 'https://open.spotify.com/embed/track/38v9pKVik1eEJhpSuh97oc',
    lyrics: [
      `I'm going back to a time when we owned this town, Down Powdermill Lane in the battlegrounds, we were friends and lovers and clueless clowns`,
      `I didn't know I was finding out how I'd be torn from you, when we talked about things we were gonna do, we were wide-eyed dreamers and wiser too`,
      `Yeah, I'm going where the people know my name`,
    ],
  },
  {
    id: 'broken-arrows',
    title: 'Broken Arrows',
    artist: 'Avicii',
    cover: '/covers/broken-arrows.webp',
    spotify: 'https://open.spotify.com/embed/track/260jSxvzkFt71ksvkcy2ke',
    lyrics: [
      `Now as you wade through the shadows that live in your heart, you'll find the light that leads home. Cause I see you for you and your beautiful scars, so take my hand, don't let go`,
      `Cause it's not too late, it's not too late I, I see the hope in your heart. And sometimes you lose and sometimes you're shooting, broken arrows in the dark`,
    ],
  },
  {
    id: 'more-than-this',
    title: 'More Than This',
    artist: 'One Direction',
    cover: '/covers/more-than-this.webp',
    spotify: 'https://open.spotify.com/embed/track/0UAB340gAcSMk3r0a8PTag',
    lyrics: [
      `I've never had the words to say but now I'm asking you to stay, for a little while inside my arms. And as you close your eyes tonight I pray that you will see the light, that's shining from the stars above`,
    ],
  },
  {
    id: 'night-changes',
    title: 'Night Changes',
    artist: 'One Direction',
    cover: '/covers/night-changes.webp',
    spotify: 'https://open.spotify.com/embed/track/5O2P9iiztwhomNh8xkR9lJ',
    lyrics: [
      `We're only getting older, baby and I've been thinking about you lately, does it ever drive you crazy just how fast the night changes?`,
      `Everything that you've ever dreamed of disappearing when you wake up, but there's nothing to be afraid of even when the night changes, it will never change me and you`,
    ],
  },

  {
    id: 'through-the-dark',
    title: 'Through the Dark',
    artist: 'One Direction',
    cover: '/covers/through-the-dark.webp',
    spotify: 'https://open.spotify.com/embed/track/1a0PcmEJAOEp4ZT3YtSLkM',
    lyrics: [
      `I will carry you over fire and water for your love, and I will hold you closer hope your heart is strong enough`,
      `When the night is coming down on you, we will find a way through the dark`,
    ],
  },
  {
    id: 'when-we-were-young',
    title: 'When We Were Young',
    artist: 'Adele',
    cover: '/covers/when-we-were-young.webp',
    spotify: 'https://open.spotify.com/embed/track/7IWkJwX9C0J7tHurTD7ViL',
    lyrics: [
      `Let me photograph you in this light in case it is the last time, that we might be exactly like we were before we realised, we were sad of getting old, it made us restless`,
      `It was just like a movie, it was just like a song, my god you remind me of when we were young`,
    ],
  },
  {
    id: 'wasnt-expecting-that',
    title: "Wasn't Expecting That",
    artist: 'Jamie Lawson',
    cover: '/covers/wasnt-expecting-that.webp',
    spotify: 'https://open.spotify.com/embed/track/7nm68uKwGwMqznlOSBxhps',
    lyrics: [
      `It was only a smile but my heart, it went wild. I wasn't expecting that`,
      `I thought love wasn't meant to last, honey I thought you were just passing through. If I ever get the nerve to ask, what did I get right to deserve somebody like you?`,
      `Isn't it strange how a life can be changed, in the flicker of the sweetest smile`,
    ],
  },
  {
    id: 'one',
    title: 'One',
    artist: 'Ed Sheeran',
    cover: '/covers/one.webp',
    spotify: 'https://open.spotify.com/embed/track/4IgwXiKvVCAsHxUFL8mqLL',
    lyrics: [
      `All my friends have gone to find, another place to let their hearts collide. Just promise me, you'll always be a friend, 'cause you are the only one`,
      `And all my senses come to life while I'm stumbling home as drunk as I, have ever been`,
    ],
  },
  {
    id: 'black',
    title: 'Black',
    artist: 'Pearl Jam',
    cover: '/covers/black.webp',
    spotify: 'https://open.spotify.com/embed/track/5Xak5fmy089t0FYmh3VJiY',
    lyrics: [
      `Sheets of empty canvas, untouched sheets of clay, were laid spread out before me, as her body once did`,
      `All five horizons, revolved around her soul, as the earth to the sun, now the air I tasted and breathed has taken a turn`,
      `I know someday you'll have a beautiful life, I know you'll be a star in somebody else's sky, but why? why can't it be mine?`,
    ],
  },
  {
    id: 'budapest',
    title: 'Budapest',
    artist: 'George Ezra',
    cover: '/covers/budapest.webp',
    spotify: 'https://open.spotify.com/embed/track/2ixsaeFioXJmMgkkbd4uj1',
    lyrics: [
      `Give me one good reason why I should never make a change, and baby if you hold me then all of this will go away`,
    ],
  },
  {
    id: 'careless-whisper',
    title: 'Careless Whisper',
    artist: 'George Michael',
    cover: '/covers/careless-whisper.webp',
    spotify: 'https://open.spotify.com/embed/track/5WDLRQ3VCdVrKw0njWe5E5',
    lyrics: [
      `To the heart and mind ignorance is kind, there's no comfort in the truth, pain is all you'll find`,
    ],
  },
  {
    id: 'say-you-wont-let-go',
    title: "Say You Won't Let Go",
    artist: 'James Arthur',
    cover: '/covers/say-you-wont-let-go.webp',
    spotify: 'https://open.spotify.com/embed/track/5uCax9HTNlzGybIStD3vDh',
    lyrics: [
      `I knew I loved you then, but you'd never know, 'cause I played it cool when I was scared of letting go`,
      `I'm so in love with you, and I hope you know, darling your love is more than worth its weight in gold`,
      `I wanna live with you, even when we're ghosts, 'cause you were always there for me when I needed you most`,
    ],
  },
  {
    id: 'vielleicht-vielleicht',
    title: 'Vielleicht Vielleicht',
    artist: 'AnnenMayKantereit',
    cover: '/covers/vielleicht-vielleicht.webp',
    spotify: 'https://open.spotify.com/embed/track/17lu3VOOdnuf6fvtj6TDL5',
    lyrics: [
      `Es ist so schön dir zuzusehen, wenn du duschen gehst und dann vor mir stehst`,
      `Du gibst mir Zeit, und dann denk' ich dass es vielleicht, vielleicht, für immer so bleibt`,
    ],
  },
  {
    id: 'hey-soul-sister',
    title: 'Hey Soul Sister',
    artist: 'Train',
    cover: '/covers/hey-soul-sister.webp',
    spotify: 'https://open.spotify.com/embed/track/4HlFJV71xXKIGcU3kRyttv',
    lyrics: [
      `I knew when we collided, you're the one I had decided who's one of my kind`,
      ` I can be myself now finally, in fact, there's nothing I can't be. I want the world to see you'll be with me`,
    ],
  },
  {
    id: 'patience',
    title: 'Patience',
    artist: 'Chris Cornell',
    cover: '/covers/patience.webp',
    spotify: 'https://open.spotify.com/embed/track/7n3u7RrzdXGVcclBEp9aSa',
    lyrics: [
      `Shed a tear 'cause I'm missin' you, I'm still alright to smile, girl I think about you every day now`,
      `Was a time when I wasn't sure, but you set my mind at ease, there is no doubt you're in my heart now`,
    ],
  },
  {
    id: 'iris',
    title: 'Iris',
    artist: 'Goo Goo Dolls',
    cover: '/covers/iris.webp',
    spotify: 'https://open.spotify.com/embed/track/6Qyc6fS4DsZjB2mRW9DsQs',
    lyrics: [
      `I'd give up forever to touch you, 'cause I know that you feel me somehow, you're the closest to heaven that I'll ever be, and I don't wanna go home right now`,
      `All I can taste is this moment, and all I can breathe is your life, 'cause sooner or later it's over, I just don't wanna miss you tonight`,
      `I don't want the world to see me, 'cause I don't think that they'd understand, when everything's made to be broken, I just want you to know who I am`,
      `When everything feels like the movies, yeah, you bleed just to know you're alive`,
    ],
  },
  {
    id: 'chasing-cars',
    title: 'Chasing Cars',
    artist: 'Snow Patrol',
    cover: '/covers/chasing-cars.webp',
    spotify: 'https://open.spotify.com/embed/track/5hnyJvgoWiQUYZttV4wXy6',
    lyrics: [
      `Forget what we're told before we get too old, show me a garden that's burstin' into life`,
      `I need your grace to remind me, to find my own`,
    ],
  },
];

export default songs;
