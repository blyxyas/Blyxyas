This is a readme if you want to download the source code, if you're in Github, you can open the README.md file

┌──────────────────────────────┐
│                      
│       Savestates                  +     
│                        
└──────────────────────────────┘

The way to save the game is with the savestate.json, so, don't delete it.
The savestate.json file have this some perculiarities:

    - The first object ("x") is crucial for the properly save of the game.
    - Some data is just stored in RAM, don't close the game (With CTRL + C) and some data will be losted.
    - Don't edit the savestate.json file, because other parameters will be broken.

┌──────────────┐
│              
│ Modules       
│ Required      
│              
└──────────────┘

There are a few required modules, because, well, the games are a little complex things.
So, just import this module and you will be fine.

    - colors

Yes, colors is the unique module to install, because both fs and readline are native of node.js.
Maybe I can create a version without the colors module, but it will be ugly, and not very aesthetic (┬┬﹏┬┬).

So just install colors with:

npm install colors
or all those alternatives, like -g or --save, y