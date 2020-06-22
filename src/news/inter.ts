import * as T from '../types'

export const INTER_SOURCES: T.SourceInterface[] = [
  {
    source: 'fedenerazzurra',
    link: 'https://www.fedenerazzurra.net/news?format=rss',
    lang: 'english',
    logo: 'https://i.ibb.co/tcWTvnG/fedenerazzurra.png',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.blog-item-banner-image > img',
        attr: 'data-src'
      },
      // contentEncoded: {
      //   selector: 'div.sqs-block.html-block.sqs-block-html > div.sqs-block-content',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'spaziointer',
    link: 'https://www.spaziointer.it/feed/',
    lang: 'italy',
    logo: 'https://i.ibb.co/Smk4dWf/spaziointer.png',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.elementor-image > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.elementor-element.elementor-element-7c4cb2a3.elementor-column.elementor-col-66.elementor-top-column > div.elementor-column-wrap.elementor-element-populated > div.elementor-widget-wrap > div.elementor-element.elementor-element-d97d86e.elementor-widget.elementor-widget-theme-post-content > div.elementor-widget-container',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'sempreinter',
    link: 'http://www.sempreinter.com/feed/',
    lang: 'english',
    logo: 'https://i.ibb.co/KXdybGG/sempreinter.jpg',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.image img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.article_box.main_article_single > div.article_text',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'tribalfootball',
    lang: 'english',
    logo: 'https://i.ibb.co/MpqxVFn/tribalfootball.png',
    link:
      'http://www.tribalfootball.com/rss/mediafed/general/rss.xml?club=inter-milan',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'picture > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.articleBody',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'SerpentOfMadoninna',
    link: 'https://www.serpentsofmadonnina.com/rss/current.xml',
    lang: 'english',
    logo: 'https://i.ibb.co/1srby0v/Serpent-Of-Madoninna.png',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'figure.e-image.e-image--hero > span.e-image__inner > span.e-image__image > picture.c-picture > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.c-entry-content',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'Tuttomercatoweb',
    link: 'https://www.tuttomercatoweb.com/rss/?ch=inter',
    lang: 'italy',
    logo: 'https://i.ibb.co/CwrZSVz/tmw-logo-quadrato.png',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.thumb.relative.center > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.text.mbottom',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'nerazzurriale',
    link: 'https://www.nerazzurriale.id/feed/',
    lang: 'indonesia',
    logo: 'https://i.ibb.co/SxH39JW/nerazzurriale.jpg',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.featured-image > a > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.entry-content.clearfix',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'intermilan-id',
    link: 'https://www.intermilan.id/feed',
    logo: 'https://i.ibb.co/Lr13JDF/intermilan-id.png',
    lang: 'indonesia',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'figure.entry-thumbnail > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.entry-content.mh-clearfix',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'fansnerazzurri',
    link: 'https://fansnerazzurri.com/feed/',
    logo: 'https://i.ibb.co/MRYgsQc/logo-nerazzurri.png',
    lang: 'indonesia',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.td-full-screen-header-image > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.td-post-content',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'fcinternews',
    link: 'https://www.fcinternews.it/rss/',
    logo:
      'https://net-static.tccstatic.com/template/fcinternews.it/img/admin.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'img.w-100',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.col-9.container-fluid > div.row.pb-3 > div.col-12 > span',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'gazzetta',
    link: 'https://www.gazzetta.it/rss/Squadre/Inter.xml',
    logo: 'https://i.ibb.co/wYKcb9b/ezgif-com-gif-maker-1.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.titles__image > figure > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.column.is-9',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'tuttosport',
    link: 'https://www.tuttosport.com/rss/calcio/serie-a/inter',
    logo: 'https://i.ibb.co/L622Sq0/tuttosport.jpg',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.main-section__main > figure.single-header__image > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.main-section__main > div.single-content > div.single-content__main',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'calcionews24',
    link: 'https://www.calcionews24.com/inter/feed/',
    logo: 'https://i.ibb.co/LnF2Cw9/logo-calcionews-orizzontale-new.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.td-post-content > div.td-post-featured-image > figure > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.td-post-content > div[itemprop="articleBody"]',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'fcinter1908',
    link: 'https://www.fcinter1908.it/feed/',
    logo: 'https://i.ibb.co/r5fBZ3y/fcinter1908.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.entry-content.grid-8 > div.entry-image.featured-image > a',
        attr: 'href'
      },
      // contentEncoded: {
      //   selector: 'div.entry-content-text',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'corrieredellosport',
    link: 'https://www.corrieredellosport.it/rss/calcio/serie-a/inter',
    logo: 'https://i.ibb.co/WD0Gkp1/cds.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'figure.main-article__image > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.main-article__body',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'getfootballnewsitaly',
    link: 'https://www.getfootballnewsitaly.com/serie-a/internazionale/feed/',
    logo: 'https://i.ibb.co/ngCmnKR/gifn.png',
    lang: 'english',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.visual-single > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.gffn-block.single > div.wrap',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'passioneinter.com',
    link: 'https://www.passioneinter.com/feed/',
    logo: 'https://i.ibb.co/DRLNfs9/ipad-pi-retina.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.entry-image.featured-image > a.popup > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.entry-content-text',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'Calciomercato',
    link: 'https://www.calciomercato.com/feed/teams/inter',
    logo: 'https://i.ibb.co/cbPNjny/calciomercato.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.article-header__picture > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.article-body > div.text',
      //   how: 'html'
      // }
    }
  },
  {
    source: 'football-italia',
    link:
      'https://app.football-italia.net/app-api/1.4/news/recommended?offset=0&limit=10&app-platform=web&app-version=0.1&app-id=football-italia-webapp&news-config=football-italia-iphone&ad-context=mobile&auth-fanatix-id=5d669151520a136eb8481012&auth-fanatix-token=6f594e7b55434cb22baf7dc8c4f6a766',
    logo: 'https://i.ibb.co/d799LPV/football-italia.png',
    lang: 'english',
    type: 'json',
    parser: null
  },
  {
    source: 'interlive',
    link:
      'https://www.interlive.it/feed/',
    logo: 'https://i.ibb.co/8j2p3fq/interlive.png',
    lang: 'italy',
    type: 'rss',
    parser: {
      mediaUrl: {
        selector: 'div.td-post-content.td-pb-padding-side > figure.wp-caption.alignnone > img',
        attr: 'src'
      },
      // contentEncoded: {
      //   selector: 'div.td-post-content.td-pb-padding-side',
      //   how: 'html'
      // }
    }
  }
]