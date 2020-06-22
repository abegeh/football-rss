import * as T from '../types'

export const MILAN_SOURCES: T.SourceInterface[] = [
  {
    source: 'sempremilan',
    link: 'https://sempremilan.com/feed',
    lang: 'english',
    logo: 'https://i.ibb.co/DKd177m/sempremilan.jpg',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.col-s-12.post-overlay > div.image-container > img',
        attr: 'src'
      },
    },
  },
  {
    source: 'Tuttomercatoweb',
    link: 'https://www.tuttomercatoweb.com/rss/?ch=milan',
    lang: 'italy',
    logo: 'https://i.ibb.co/CwrZSVz/tmw-logo-quadrato.png',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: "div.thumb.relative.center > img",
        attr: "src"
      },
    }
  },
  {
    source: 'pianetamilan',
    link: 'https://www.pianetamilan.it/feed/',
    lang: 'italy',
    logo: 'https://i.ibb.co/fF4C4SJ/pianeta-milan-Logo.png',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: "div.entry-image.featured-image > a",
        attr: "href"
      },
    }
  },
  {
    source: 'tribalfootball',
    lang: 'english',
    logo: 'https://i.ibb.co/MpqxVFn/tribalfootball.png',
    link:
      'https://www.tribalfootball.com/rss/mediafed/general/rss.xml?club=ac-milan',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'picture > img',
        attr: 'src'
      },
    }
  },
  {
    source: 'AC Milan Spot',
    lang: 'english',
    logo: 'https://i.ibb.co/HKz3H6K/acmilanspot.png',
    link: 'https://acmilanspot.com/feed/',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.entry-content mh-clearfix > figure.entry-thumbnail > img',
        attr: 'src'
      },
    }
  },
  {
    source: 'Milan The Offside',
    lang: 'english',
    logo: 'https://i.ibb.co/DfJNmP2/milan-theoffise.png',
    link: 'https://acmilan.theoffside.com/rss/current',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'figure.e-image.e-image--hero > span.e-image__inner > span.e-image__image > picture.c-picture > img',
        attr: 'src'
      },
    }
  },
  {
    source: 'Spazio Milan',
    lang: 'italy',
    logo: 'https://i.ibb.co/vjTKfYR/spaziomilan.png',
    link: 'https://www.spaziomilan.it/feed/',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.elementor-image > img',
        attr: 'src'
      },
    }
  },
  {
    source: 'gazzetta',
    link: 'https://www.gazzetta.it/rss/Squadre/Milan.xml',
    logo: 'https://i.ibb.co/wYKcb9b/ezgif-com-gif-maker-1.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.titles__image > figure > img',
        attr: 'src'
      },
    },
  },
  {
    source: 'tuttosport',
    link: 'https://www.tuttosport.com/rss/calcio/serie-a/milan',
    logo: 'https://i.ibb.co/L622Sq0/tuttosport.jpg',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.main-section__main > figure.single-header__image > img',
        attr: 'src'
      },
      contentEncoded: {
        selector: 'div.main-section__main > div.single-content > div.single-content__main',
        how: 'html'
      }
    }
  },
  {
    source: 'getfootballnewsitaly',
    link: 'https://www.getfootballnewsitaly.com/serie-a/milan/feed/',
    logo: 'https://i.ibb.co/ngCmnKR/gifn.png',
    lang: 'english',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.visual-single > img',
        attr: 'src'
      },
    }
  },
  {
    source: 'corrieredellosport',
    link: 'https://www.corrieredellosport.it/rss/calcio/serie-a/milan',
    logo: 'https://i.ibb.co/WD0Gkp1/cds.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'figure.main-article__image > img',
        attr: 'src'
      },
    }
  },
  {
    source: 'football-italia',
    link:
      'https://app.football-italia.net/app-api/1.4/news/recommended?offset=0&limit=10&app-platform=web&app-version=0.1&app-id=football-italia-webapp&news-config=football-italia-iphone&ad-context=android&auth-fanatix-id=5e1587a0520a1313ce7f83a8&auth-fanatix-token=9b497a3cce14440868808f6f88f24db4',
    logo: 'https://i.ibb.co/d799LPV/football-italia.png',
    lang: 'english',
    type: 'json',
    parser: null
  },
  {
    source: 'Calciomercato',
    link: 'https://www.calciomercato.com/feed/teams/milan',
    logo: 'https://i.ibb.co/cbPNjny/calciomercato.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.article-header__picture > img',
        attr: 'src'
      },
    }
  },
  {
    source: 'ilmilanista',
    link: 'https://www.ilmilanista.it/feed/',
    logo: 'https://i.ibb.co/TRy6sJS/ilmilanista.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: "div.entry-image.featured-image > a",
        attr: "href"
      },
    }
  },
  {
    source: 'MilanNews',
    link: 'https://www.milannews.it/rss/',
    logo: 'https://i.ibb.co/VL3J94x/milannews.jpg',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: "div.testo_align > div.img > table > tbody > tr > td > img",
        attr: "src"
      },
    }
  },
  {
    source: 'RossonerriBlog',
    link: 'https://www.rossoneriblog.com/feed/',
    logo: 'https://i.ibb.co/4pJPDM5/rossonerri-blog.png',
    lang: 'english',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: "figure.wp-caption.alignright > a",
        attr: "href"
      },
    }
  },
  {
    source: 'calcionews24',
    link: 'https://www.calcionews24.com/milan/feed/',
    logo: 'https://i.ibb.co/LnF2Cw9/logo-calcionews-orizzontale-new.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.td-post-content > div.td-post-featured-image > figure > img',
        attr: 'src'
      },
    }
  },
  {
    source: 'milanisti-id',
    link: 'http://www.milanisti.or.id/feed/',
    logo: 'https://i.ibb.co/7KdhX9F/milanisti.png',
    lang: 'indonesia',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.entry-content > p > div.aligncenter > a',
        attr: 'href'
      },
    }
  },
  {
    source: 'milanlive',
    link: 'https://www.milanlive.it/feed/',
    logo: 'https://i.ibb.co/y4rjvrc/logo-milanlive.jpg',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'img.size-full',
        attr: 'src'
      },
    }
  }
]

