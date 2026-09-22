let messages=["Happy Birthday! Wishing you a day filled with love, joy, and all the things that make you happiest. May this year bring you success, good health, and endless opportunities. Enjoy your special day to the fullest!",  
   "Happy Birthday! May your birthday be as wonderful and extraordinary as you are. May all your dreams come true, and may you be surrounded by love and laughter on your special day. Cheers to another year of amazing adventures and unforgettable memories!",
   "Happy Birthday! Wishing you a day filled with happiness, laughter, and all the things that bring you joy. May this year be your best one yet, filled with love, success, and countless blessings. Celebrate and make beautiful memories!",
   "Happy Birthday! May your birthday be a reflection of the incredible person you are. May you be showered with love, surrounded by friends and family, and blessed with good health and happiness. Here's to another year of amazing experiences and cherished moments!",
   "Happy Birthday! Wishing you a day filled with laughter, love, and all the things that make you smile. May this year bring you new opportunities, exciting adventures, and endless happiness. Celebrate your special day to the fullest!",
]
let i = messages.length;
let s = Math.floor(Math.random() * i);

document.getElementById("msg")
    .innerHTML = '" ' + messages[s] + ' "';