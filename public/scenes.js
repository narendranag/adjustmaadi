// Every scene is one Bengaluru problem, shot as a potboiler. The page picks one at random on load.
// `kn` lines carry the Kannada, `tr` its transliteration and `en` what it means (or the joke).
window.SCENES = [
  {
    id: 'silk-board',
    slug: 'EXT. SILK BOARD JUNCTION — 6:47 PM — DAY 1,247 OF THE SAME COMMUTE',
    title: { en: 'The Junction That Never Moves', kn: 'ಕದಲದ ಜಂಕ್ಷನ್' },
    cast: ['HERO — Commuter Kumar', 'VILLAIN — Silk Board Junction'],
    action:
      'Slow-motion drone shot. Forty thousand bikes. One ambulance. Zero movement. Our hero has visibly aged since the opening credits.',
    lines: [
      { who: 'HERO', en: 'I left home in my twenties. I will reach office in my forties.' },
      {
        who: 'TRAFFIC POLICE',
        kn: 'ಸ್ವಲ್ಪ ಹಿಂದೆ ಹೋಗಿ ಸಾರ್',
        tr: 'Swalpa hinde hogi saar',
        en: 'Move back a little, sir. — Back where, sir? To 2019?',
      },
      { who: 'GOOGLE MAPS', en: '3 km. 2 hours. “You are on the fastest route.”' },
    ],
    sfx: 'HONK × 4,000',
    chorus: 'The signal turns green in the sequel.',
  },
  {
    id: 'auto-meter',
    slug: 'EXT. INDIRANAGAR 100 FEET ROAD — NIGHT — IT IS DRIZZLING, SLIGHTLY',
    title: { en: 'The Legend of the Meter', kn: 'ಮೀಟರ್ ದಂತಕಥೆ' },
    cast: ['HERO — You, with a laptop bag', 'THE DON — Auto Anna'],
    action:
      'Seven autos. Seven drivers. Seven slow head-shakes, perfectly in sync, like a dance number nobody rehearsed.',
    lines: [
      { who: 'HERO', en: 'Anna, Whitefield?' },
      { who: 'AUTO ANNA', kn: 'ಬರಲ್ಲ', tr: 'Baralla', en: 'Won’t come.' },
      { who: 'HERO', en: 'Meter?' },
      {
        who: 'AUTO ANNA',
        kn: 'ಮೀಟರ್ ಮೇಲೆ ನೂರು ಕೊಡಿ',
        tr: 'Meter mele nooru kodi',
        en: 'Meter plus a hundred. — He looks at the sky. — Rain is coming, saar.',
      },
    ],
    sfx: 'THUNDER (for dramatic effect only — it will not rain)',
    chorus: 'The meter is like a ghost. Everyone has heard of it. Nobody has seen it working.',
  },
  {
    id: 'water-tanker',
    slug: 'INT. APARTMENT SUMP — 5:30 AM — THE BOREWELL HAS GONE DRY',
    title: { en: 'Tanker: The Arrival', kn: 'ಟ್ಯಾಂಕರ್ ಬಂತು' },
    cast: ['HERO — Association Secretary', 'SAVIOUR — Tanker Thimmappa'],
    action:
      'A tanker reverses into frame in slow motion. Background score swells. Residents in nighties and shorts applaud from their balconies.',
    lines: [
      { who: 'TANKER THIMMAPPA', en: 'Six thousand litres. Two thousand rupees. Today’s rate.' },
      { who: 'HERO', en: 'Yesterday it was twelve hundred!' },
      {
        who: 'TANKER THIMMAPPA',
        kn: 'ನಾಳೆ ಇನ್ನೂ ಜಾಸ್ತಿ',
        tr: 'Naale innu jaasti',
        en: 'Tomorrow, even more.',
      },
      { who: 'APARTMENT WHATSAPP', en: 'Pls use water judiciously 🙏 Bucket bath only. — Sent by Flat 4B, from the swimming pool.' },
    ],
    sfx: 'GLUG… GLUG… (silence)',
    chorus: 'Two-minute showers build character.',
  },
  {
    id: 'power-cut',
    slug: 'INT. 2BHK, KORAMANGALA 6TH BLOCK — 10:58 AM — CLIENT CALL AT 11:00',
    title: { en: 'Current Hoytu', kn: 'ಕರೆಂಟ್ ಹೋಯ್ತು' },
    cast: ['HERO — Laptop at 4%', 'VILLAIN — The Transformer Down the Road'],
    action:
      'The fan slows down in slow motion, like a henchman dying at the end of a fight scene. The Wi-Fi router’s lights go out one by one.',
    lines: [
      {
        who: 'NEIGHBOUR AUNTY',
        kn: 'ಕರೆಂಟ್ ಹೋಯ್ತಾ?',
        tr: 'Current hoyta?',
        en: 'Did the power go? — Every flat in the building opens a window to check it isn’t just them.',
      },
      { who: 'HERO', en: 'Can you all hear me? I’m on mobile data. I’m on a hotspot. I’m on hope.' },
      { who: 'CLIENT', en: 'You’re on mute.' },
    ],
    sfx: 'BEEP. (the inverter gives up)',
    chorus: 'Current will come. Nobody knows when. That is the thrill.',
  },
  {
    id: 'pothole',
    slug: 'EXT. A ROAD, TECHNICALLY — BELLANDUR — MONSOON',
    title: { en: 'The Crater', kn: 'ರಸ್ತೆ ಗುಂಡಿ' },
    cast: ['HERO — Two-wheeler Tejas', 'VILLAIN — A Pothole With Its Own PIN Code'],
    action:
      'A child floats a paper boat in the pothole. A fish has moved in. An international space agency calls to ask if they may study it.',
    lines: [
      { who: 'HERO', en: 'I will jump it. I have seen every Darshan movie.' },
      { who: 'NARRATOR', en: 'He entered the pothole in Reel 3. He came out in the song sequence.' },
      {
        who: 'PASSER-BY',
        kn: 'ಏನ್ ಗುರು, ಗುಂಡಿ ಕಾಣಿಸ್ಲಿಲ್ವಾ?',
        tr: 'En guru, gundi kaanislilva?',
        en: 'What, boss, you didn’t see the pothole? — It was a puddle, anna. It looked shallow.',
      },
    ],
    sfx: 'KA-THUNK!',
    chorus: 'The road will be fixed. Right before the next election.',
  },
  {
    id: 'orr-flood',
    slug: 'EXT. OUTER RING ROAD — 15 MINUTES AFTER IT STARTED RAINING',
    title: { en: 'Outer Ring Lake', kn: 'ಮಳೆ ಬಂತು' },
    cast: ['HERO — A Techie on a Tractor', 'VILLAIN — Fifteen Minutes of Rain'],
    action:
      'Outer Ring Road is now Outer Ring Lake. Office-goers are evacuated in a JCB. Somewhere, a startup launches a boat-pooling app and closes its Series A by evening.',
    lines: [
      { who: 'CAB APP', en: 'Surge pricing 3.8×. Your driver is 4 minutes away. He is also swimming.' },
      { who: 'HERO', en: 'I pay more rent than my father earned. I am sitting in a JCB.' },
      {
        who: 'EVERYONE ON TWITTER',
        kn: 'ಬೆಂಗಳೂರು ಹವಾಮಾನ ಸೂಪರ್',
        tr: 'Bengaluru havamaana super',
        en: 'Bengaluru weather is super. — Posted from the JCB.',
      },
    ],
    sfx: 'SPLOOSH',
    chorus: 'Life jackets are business casual now.',
  },
  {
    id: 'landlord',
    slug: 'INT. OWNER’S DRAWING ROOM, JAYANAGAR — THE INTERVIEW',
    title: { en: 'Ten Months Advance', kn: 'ಹತ್ತು ತಿಂಗಳ ಅಡ್ವಾನ್ಸ್' },
    cast: ['HERO — Tenant (hopeful)', 'VILLAIN — Landlord Lakshmamma'],
    action:
      'A single bulb swings overhead. The hero is interrogated like a suspect in a police station scene.',
    lines: [
      {
        who: 'LANDLORD',
        kn: 'ಹತ್ತು ತಿಂಗಳ ಅಡ್ವಾನ್ಸ್',
        tr: 'Hattu tingala advance',
        en: 'Ten months’ deposit. Veg only. No bachelors. No pets. No guests after nine.',
      },
      { who: 'HERO', en: 'And when I move out?' },
      { who: 'LANDLORD', en: 'Painting charges. Eight months. Cleaning charges. The other two.' },
    ],
    sfx: 'DHISHUM (it is your wallet)',
    chorus: 'You will not get the deposit back. You will get a lesson.',
  },
  {
    id: 'metro-majestic',
    slug: 'INT. NAMMA METRO, MAJESTIC INTERCHANGE — 9:04 AM',
    title: { en: 'Interchange', kn: 'ಮುಂದಿನ ನಿಲ್ದಾಣ' },
    cast: ['HERO — Everyone', 'VILLAIN — Also Everyone'],
    action:
      'The doors open. Humans go in as individuals and come out as a single organism. Someone’s tiffin box travels to a different line without them.',
    lines: [
      {
        who: 'ANNOUNCEMENT',
        kn: 'ಮುಂದಿನ ನಿಲ್ದಾಣ ಮೆಜೆಸ್ಟಿಕ್',
        tr: 'Mundina nildaana Majestic',
        en: 'Next station, Majestic. Doors will open on… all sides, apparently.',
      },
      { who: 'HERO', en: 'Excuse me, this is my stop.' },
      { who: 'THE CROWD', en: 'It is everybody’s stop, maga.' },
    ],
    sfx: 'BEEP BEEP BEEP (doors) — SQUISH',
    chorus: 'Personal space was in the brochure. Only in the brochure.',
  },
  {
    id: 'hybrid',
    slug: 'INT. TECH PARK, FLOOR 14 — WEDNESDAY — “COLLABORATION DAY”',
    title: { en: 'Return to Office', kn: 'ಆಫೀಸ್‌ಗೆ ವಾಪಸ್' },
    cast: ['HERO — Senior Software Engineer', 'VILLAIN — The Culture Email'],
    action:
      'The hero commutes two and a half hours. He sits down. He joins a video call. Everyone on the call is sitting next to him.',
    lines: [
      { who: 'MANAGER', en: 'Three days in office. For the culture.' },
      { who: 'HERO', en: 'What is the culture?' },
      { who: 'MANAGER', en: 'Poha at 11. Free. Limited quantity.' },
    ],
    sfx: '“YOU’RE ON MUTE” × 12, IN STEREO',
    chorus: 'The poha is worth it. It is not worth it. Eat the poha.',
  },
  {
    id: 'ten-minute',
    slug: 'EXT. / INT. — HSR LAYOUT — SIMULTANEOUSLY',
    title: { en: 'Ten Minutes', kn: 'ಹತ್ತು ನಿಮಿಷ' },
    cast: ['HERO — You', 'THE FASTEST MAN IN INDIA — Delivery Anna'],
    action:
      'Split screen. Left: a bunch of coriander reaches your door in 8 minutes. Right: you are still trying to leave the same street by car.',
    lines: [
      {
        who: 'DELIVERY ANNA',
        kn: 'ಹತ್ತು ನಿಮಿಷದಲ್ಲಿ ಬರ್ತೀನಿ',
        tr: 'Hattu nimishadalli bartini',
        en: 'I’ll be there in ten minutes. — And he is.',
      },
      { who: 'HERO', en: 'How did you get here so fast?' },
      { who: 'DELIVERY ANNA', en: 'Footpath, saar. Footpath is the express lane.' },
    ],
    sfx: 'VROOOM (on the footpath)',
    chorus: 'Ask the coriander for directions.',
  },
  {
    id: 'dosa-queue',
    slug: 'EXT. A FAMOUS DARSHINI, BASAVANAGUDI — SUNDAY — 8:15 AM',
    title: { en: 'Benne Dosa: The Wait', kn: 'ಬೆಣ್ಣೆ ದೋಸೆ' },
    cast: ['HERO — Hungry', 'VILLAIN — The Man Holding a Spot for Eleven People'],
    action:
      'A queue that begins in the restaurant and ends in a different pincode. The dosa takes four minutes. The queue takes forty-five. Both are worth it.',
    lines: [
      { who: 'THE MAN', en: 'My people are coming. Just parking.' },
      { who: 'HERO', en: 'You said that forty minutes ago.' },
      {
        who: 'THE MAN',
        kn: 'ಒಂದ್ ನಿಮಿಷ, ಬಂದ್ರು ಬಂದ್ರು',
        tr: 'Ond nimisha, bandru bandru',
        en: 'One minute, they’ve come, they’ve come. — They have not come.',
      },
    ],
    sfx: 'SIZZLE (from inside, torturously)',
    chorus: 'Stand in the queue. It is how the ghee knows you mean it.',
  },
  {
    id: 'weather',
    slug: 'EXT. CUBBON PARK — APRIL — 38°C',
    title: { en: 'Pleasant Weather (Deleted Scene)', kn: 'ಸೆಕೆ' },
    cast: ['HERO — Someone Who Moved Here For The Weather', 'VILLAIN — The Sun, Personally'],
    action:
      'The hero drags a suitcase labelled “Pleasant Weather” across the lawns. It melts. A pigeon asks for an AC.',
    lines: [
      {
        who: 'THATHA ON A BENCH',
        kn: 'ನಮ್ಮ ಕಾಲದಲ್ಲಿ ಫ್ಯಾನೇ ಬೇಕಾಗಿರಲಿಲ್ಲ',
        tr: 'Namma kaaladalli fan-e bekagiralilla',
        en: 'In our day, we didn’t even need a fan.',
      },
      { who: 'HERO', en: 'Then what happened?' },
      { who: 'THATHA', en: 'You all came.' },
    ],
    sfx: 'SIZZLE (it is you)',
    chorus: 'Sweater weather returns in December. For four days.',
  },
  {
    id: 'flyover',
    slug: 'EXT. FLYOVER CONSTRUCTION SITE — SINCE THE HERO’S CHILDHOOD FLASHBACK',
    title: { en: 'Work In Progress', kn: 'ಕಾಮಗಾರಿ ಪ್ರಗತಿಯಲ್ಲಿದೆ' },
    cast: ['HERO — Grew Up Watching It', 'VILLAIN — A Pillar That Leads Nowhere'],
    action:
      'Flashback, in sepia: a boy watches the first pillar go up. Present day: the boy is now the site engineer. Still one pillar.',
    lines: [
      {
        who: 'SIGNBOARD',
        kn: 'ಕಾಮಗಾರಿ ಪ್ರಗತಿಯಲ್ಲಿದೆ. ಅನಾನುಕೂಲಕ್ಕೆ ವಿಷಾದಿಸುತ್ತೇವೆ',
        tr: 'Kaamagaari pragatiyallide. Anaanukoolakke vishaadisuttheve',
        en: 'Work in progress. Inconvenience regretted.',
      },
      { who: 'HERO', en: 'When will it open?' },
      { who: 'ENGINEER', en: 'My son will cut the ribbon.' },
    ],
    sfx: 'DRILLING (at 2 AM, specifically)',
    chorus: 'It is not delayed. It is a heritage structure now.',
  },
  {
    id: 'startup-darshini',
    slug: 'INT. DARSHINI, KORAMANGALA — THREE FOUNDERS, ONE BY-TWO COFFEE',
    title: { en: 'Seed Round', kn: 'ಬೈ-ಟು ಕಾಫಿ' },
    cast: ['HEROES — Three Co-founders', 'VILLAIN — The Investor Who Asks About Revenue'],
    action: 'A napkin. A pitch. A filter coffee split three ways with surgical precision.',
    lines: [
      { who: 'FOUNDER', en: 'We are building Uber for idli.' },
      { who: 'INVESTOR', en: 'But is it AI?' },
      { who: 'FOUNDER', en: 'Sir, it is AI-dli.' },
      {
        who: 'INVESTOR',
        kn: 'ಸಖತ್ ಆಗಿದೆ',
        tr: 'Sakkath aagide',
        en: 'Superb. — Signs a term sheet on the napkin.',
      },
    ],
    sfx: 'KA-CHING (valuation), SLURP (coffee)',
    chorus: 'Pre-revenue is a lifestyle.',
  },
  {
    id: 'bus-change',
    slug: 'INT. BMTC BUS 500D — PEAK HOUR',
    title: { en: 'Change', kn: 'ಚಿಲ್ಲರೆ ಇಲ್ಲ' },
    cast: ['HERO — Passenger with a ₹500 Note', 'THE BANK — The Conductor'],
    action:
      'The conductor examines the ₹500 note the way a villain examines a forged will.',
    lines: [
      {
        who: 'CONDUCTOR',
        kn: 'ಚಿಲ್ಲರೆ ಇಲ್ಲ',
        tr: 'Chillare illa',
        en: 'No change. — He writes the balance on the back of your ticket.',
      },
      { who: 'HERO', en: 'When will I get it?' },
      { who: 'CONDUCTOR', en: 'Get down at the last stop. We will settle there.' },
    ],
    sfx: 'TRRRING (the bell)',
    chorus: 'The balance on the back of the ticket is legally binding. Emotionally.',
  },
  {
    id: 'nandi-hills',
    slug: 'EXT. NANDI HILLS — 5:45 AM — SUNRISE, ALLEGEDLY',
    title: { en: 'Sunrise Point', kn: 'ಸೂರ್ಯೋದಯ' },
    cast: ['HERO — Left Home at 3:30 AM', 'VILLAIN — Thirty Thousand People With the Same Idea'],
    action:
      'The hero reaches the top after two hours of hairpin bends. It is fog. It is only fog. Somewhere behind it, the sun rises for someone else.',
    lines: [
      { who: 'HERO', en: 'I cannot see the sunrise.' },
      {
        who: 'CHAI ANNA',
        kn: 'ಮುಂದಿನ ವಾರ ಬನ್ನಿ',
        tr: 'Mundina vaara banni',
        en: 'Come next week.',
      },
      { who: 'HERO’S INSTAGRAM', en: '“Above the clouds ☁️✨ #blessed” — 400 likes.' },
    ],
    sfx: 'WHOOSH (fog)',
    chorus: 'The sunrise was the friends we made in the traffic on the way.',
  },
  {
    id: 'kannada-class',
    slug: 'EXT. APARTMENT PARKING, SARJAPUR — EVENING — THE CLIMAX',
    title: { en: 'Language Lesson', kn: 'ಕನ್ನಡ ಕಲಿಯಿರಿ' },
    cast: ['HERO — New in Town, Trying His Best', 'MENTOR — Security Anna'],
    action:
      'Dramatic music. The hero has been practising for three weeks. He steps forward to deliver his first full sentence in Kannada.',
    lines: [
      { who: 'HERO', en: 'Anna, I know only one line in Kannada.' },
      { who: 'SECURITY ANNA', en: 'Which one?' },
      {
        who: 'HERO',
        kn: 'ಸ್ವಲ್ಪ ಅಡ್ಜಸ್ಟ್ ಮಾಡ್ಕೊಳ್ಳಿ',
        tr: 'Swalpa adjust maadkolli',
        en: 'Please adjust a little.',
      },
      { who: 'SECURITY ANNA', en: 'Then you know the whole language, guru. Welcome to Bengaluru.' },
    ],
    sfx: 'APPLAUSE, WHISTLES, CONFETTI',
    chorus: 'ನಮ್ಮ ಬೆಂಗಳೂರು. Namma Bengaluru. Everyone adjusts. That’s the city.',
  },
]
