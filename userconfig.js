let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Alicante",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://linktr.ee/matt_ftw",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "personal",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "media/rrss",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com/",
              icon: "brand-youtube",
              icon_color: "#a6e3a1",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/",
              icon: "brand-reddit",
              icon_color: "#fab387",
            },
            {
              name: "mastodon",
              url: "https://mastodon.social",
              icon: "brand-mastodon",
              icon_color: "#f38ba8",
            },
            {
              name: "twitch",
              url: "https://drive.google.com/drive/home",
              icon: "brand-twitch",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "workspace",
          links: [
            {
              name: "mail",
              url: "https://mail.proton.me",
              icon: "brand-campaignmonitor",
              icon_color: "#a6e3a1",
            },
            {
              name: "calendar",
              url: "https://calendar.me",
              icon: "calendar-filled",
              icon_color: "#fab387",
            },
            {
              name: "vault",
              url: "https://vault.bitwarden.com",
              icon: "lock",
              icon_color: "#f38ba8",
            },
            {
              name: "drive",
              url: "https://drive.proton.me",
              icon: "cloud",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "work",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/",
              icon: "brand-linkedin",
              icon_color: "#a6e3a1",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#a6e3a1",
            },
            {
              name: "dev-community",
              url: "https://dev.to/",
              icon: "article",
              icon_color: "#fab387",
            },
            {
              name: "wakatime",
              url: "https://wakatime.com/dashboard",
              icon: "24-hours",
              icon_color: "#f38ba8",
            },
            {
              name: "dotfyle",
              url: "https://dotfyle.com/",
              icon: "puzzle",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "learn",
          links: [
            {
              name: "leetcode",
              url: "https://leetcode.com",
              icon: "code-plus",
              icon_color: "#a6e3a1",
            },
            {
              name: "stackoverflow",
              url: "https://stackoverflow.com",
              icon: "brand-stackoverflow",
              icon_color: "#fab387",
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "school",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "chatgpt",
              url: "https://chatgpt.com/",
              icon: "brand-openai",
              icon_color: "#a6e3a1",
            },
            {
              name: "hoopscotch",
              url: "https://hoppscotch.io/",
              icon: "api",
              icon_color: "#fab387",
            },
            {
              name: "searchcode",
              url: "https://searchcode.com/",
              icon: "zoom-code",
              icon_color: "#f38ba8",
            },
            {
              name: "codepen",
              url: "https://codepen.io/",
              icon: "brand-codepen",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "docs",
          links: [
            {
              name: "devdocs",
              url: "https://devdocs.io/",
              icon: "books",
              icon_color: "#a6e3a1",
            },
            {
              name: "mdn",
              url: "https://developer.mozilla.org/en-US/",
              icon: "brand-firefox",
              icon_color: "#fab387",
            },
            {
              name: "cheatsheets",
              url: "https://cheatsheets.zip/",
              icon: "file-spreadsheet",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "personal repos",
          links: [
            {
              name: "dotfiles",
              url: "https://github.com/Matt-FTW/dotfiles",
              icon: "palette",
              icon_color: "#a6e3a1",
            },
            {
              name: "obsidian",
              url: "https://github.com/Matt-FTW/obsidianVault",
              icon: "notes",
              icon_color: "#fab387",
            },
            {
              name: "startpage",
              url: "https://github.com/Matt-FTW/startpage",
              icon: "layout-dashboard",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "other repos",
          links: [
            {
              name: "lazyvim",
              url: "https://github.com/LazyVim/LazyVim",
              icon: "code",
              icon_color: "#a6e3a1",
            },
            {
              name: "hyprland",
              url: "https://github.com/hyprwm/Hyprland",
              icon: "app-window",
              icon_color: "#fab387",
            },
            {
              name: "yazi",
              url: "https://github.com/sxyazi/yazi",
              icon: "folder-open",
              icon_color: "#f38ba8",
            },
            {
              name: "material-ui apps",
              url: "https://github.com/nyas1/Material-You-app-list",
              icon: "brand-android",
              icon_color: "#89b4fa",
            },
          ],
        },
      ],
    },
    {
      name: "gaming",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "stores",
          links: [
            {
              name: "steam",
              url: "https://store.steampowered.com/",
              icon: "brand-steam",
              icon_color: "#a6e3a1",
            },
            {
              name: "epic",
              url: "https://store.epicgames.com",
              icon: "brand-fortnite",
              icon_color: "#fab387",
            },
            {
              name: "gog",
              url: "https://www.reddit.com/r/audiophile/",
              icon: "brand-appgallery",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "deals",
          links: [
            {
              name: "GG Deals",
              url: "https://gg.deals/",
              icon: "cash",
              icon_color: "#a6e3a1",
            },
            {
              name: "r/gameDeals",
              url: "https://www.reddit.com/r/GameDeals/",
              icon: "currency-euro",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "discussion",
          links: [
            {
              name: "r/gaming",
              url: "https://www.reddit.com/r/gaming/",
              icon: "device-gamepad",
              icon_color: "#a6e3a1",
            },
            {
              name: "r/indiegaming",
              url: "https://www.reddit.com/r/IndieGaming/",
              icon: "device-gamepad-2",
              icon_color: "#fab387",
            },
            {
              name: "r/nintendo",
              url: "https://www.reddit.com/r/nintendo/",
              icon: "device-nintendo",
              icon_color: "#f38ba8",
            },
            {
              name: "r/playstation",
              url: "https://www.reddit.com/r/playstation/",
              icon: "playstation-square",
              icon_color: "#89b4fa",
            },
            {
              name: "r/xbox",
              url: "https://www.reddit.com/r/xbox/",
              icon: "brand-xbox",
              icon_color: "#cba6f7",
            },
          ],
        },
        {
          name: "emulation/download",
          links: [
            {
              name: "vimm's lair",
              url: "https://vimm.net/",
              icon: "door",
              icon_color: "#a6e3a1",
            },
            {
              name: "roms megathread",
              url: "https://r-roms.github.io/",
              icon: "archive",
              icon_color: "#fab387",
            },
            {
              name: "r/emulation",
              url: "https://www.reddit.com/r/emulation/",
              icon: "pacman",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "mods",
          links: [
            {
              name: "nexus mods",
              url: "https://www.nexusmods.com/",
              icon: "hexagons",
              icon_color: "#a6e3a1",
            },
            {
              name: "modrinth",
              url: "https://www.modrinth.com/",
              icon: "brand-minecraft",
              icon_color: "#fab387",
            },
            {
              name: "moddb",
              url: "https://www.moddb.com",
              icon: "file-type-sql",
              icon_color: "#f38ba8",
            },
          ],
        },
        {
          name: "rating/tracking",
          links: [
            {
              name: "opencritic",
              url: "https://opencritic.com/",
              icon: "numbers",
              icon_color: "#a6e3a1",
            },
            {
              name: "RAWG",
              url: "https://rawg.io/",
              icon: "books",
              icon_color: "#fab387",
            },
          ],
        },
      ],
    },
    {
      name: "music",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "listen",
          links: [
            {
              name: "spotify",
              url: "https://open.spotify.com",
              icon: "brand-spotify",
              icon_color: "#a6e3a1",
            },
            {
              name: "soundcloud",
              url: "https://www.soundcloud.com",
              icon: "brand-soundcloud",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "rating/tracking",
          links: [
            {
              name: "AOTY",
              url: "https://www.albumoftheyear.org/",
              icon: "calendar-time",
              icon_color: "#a6e3a1",
            },
            {
              name: "rateyourmusic",
              url: "https://rateyourmusic.com/",
              icon: "stars-off",
              icon_color: "#fab387",
            },
          ],
        },
        {
          name: "discussion",
          links: [
            {
              name: "r/musicproduction",
              url: "https://www.reddit.com/r/musicproduction/",
              icon: "device-speaker",
              icon_color: "#a6e3a1",
            },
            {
              name: "r/hiphopheads",
              url: "https://www.reddit.com/r/hiphopheads/",
              icon: "headphones",
              icon_color: "#fab387",
            },
            {
              name: "r/audiophile",
              url: "https://www.reddit.com/r/audiophile/",
              icon: "ear",
              icon_color: "#f38ba8",
            },
            {
              name: "r/music",
              url: "https://www.reddit.com/r/music/",
              icon: "music-heart",
              icon_color: "#89b4fa",
            },
            {
              name: "r/metal",
              url: "https://www.reddit.com/r/metal/",
              icon: "guitar-pick",
              icon_color: "#cba6f7",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "freesound",
              url: "https://freesound.org/",
              icon: "volume",
              icon_color: "#a6e3a1",
            },
            {
              name: "pluginboutique",
              url: "https://www.pluginboutique.com/",
              icon: "building-store",
              icon_color: "#fab387",
            },
            {
              name: "pianobook",
              url: "https://www.pianobook.co.uk",
              icon: "piano",
              icon_color: "#f38ba8",
            },
            {
              name: "musescore",
              url: "https://musescore.com/",
              icon: "numbers",
              icon_color: "#89b4fa",
            },
            {
              name: "songsterr",
              url: "https://www.songsterr.com/",
              icon: "vinyl",
              icon_color: "#cba6f7",
            },
          ],
        },
      ],
    },
    {
      name: "art",
      background_url: "src/img/banners/cbg-10.gif",
      categories: [
        {
          name: "media",
          links: [
            {
              name: "unsplash",
              url: "https://unsplash.com",
              icon: "brand-unsplash",
              icon_color: "#a6e3a1",
            },
            {
              name: "pivix",
              url: "https://www.pixiv.net/en/",
              icon: "artboard",
              icon_color: "#fab387",
            },
            {
              name: "pinterest",
              url: "https://www.pinterest.com/",
              icon: "brand-pinterest",
              icon_color: "#f38ba8",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com",
              icon: "pencil-heart",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "palettes",
          links: [
            {
              name: "catppuccin",
              url: "https://catppuccin.com/",
              icon: "heart",
              icon_color: "#a6e3a1",
            },
            {
              name: "nord",
              url: "https://www.nordtheme.com/",
              icon: "brand-nord-vpn",
              icon_color: "#fab387",
            },
            {
              name: "dracula",
              url: "https://draculatheme.com/",
              icon: "bat",
              icon_color: "#f38ba8",
            },
            {
              name: "rose-pine",
              url: "https://rosepinetheme.com/",
              icon: "flower",
              icon_color: "#89b4fa",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "palette-converter",
              url: "https://farbenfroh.io/",
              icon: "adjustments",
              icon_color: "#a6e3a1",
            },
            {
              name: "excalidraw",
              url: "https://excalidraw.com/",
              icon: "pencil",
              icon_color: "#fab387",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
