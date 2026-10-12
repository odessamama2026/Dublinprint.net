const {
  Button,
  Icon,
  Badge,
  Card
} = window.DublinPrintDesignSystem_9deacc;
const LOGO = 'assets/logo-dark.jpg';
const MAPS = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('2C Grangegorman Lower, Smithfield, Dublin D07 K46Y');
const Ph = ({
  children
}) => React.createElement("span", {
  className: "ph"
}, "[", children, "]");
const goContact = () => {
  const el = document.getElementById('contact');
  if (el) window.scrollTo({
    top: el.offsetTop - 60,
    behavior: 'smooth'
  });
};
function Header() {
  return React.createElement("header", {
    className: "hdr"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("img", {
    src: LOGO,
    alt: "DublinPrint"
  }), React.createElement(Button, {
    size: "sm",
    onClick: goContact
  }, "Send your idea")));
}
function Hero({
  t
}) {
  const priceFirst = t.hero === 'price';
  return React.createElement("section", {
    className: "hero-band"
  }, React.createElement("div", {
    className: "wrap hero"
  }, React.createElement("div", null, React.createElement(Badge, {
    tone: t.mood === 'bold' ? 'dark' : 'brand'
  }, "Custom stickers in Dublin"), priceFirst && React.createElement(React.Fragment, null, React.createElement("div", {
    className: "mega"
  }, "\u20AC9.80"), React.createElement("p", {
    className: "mega-sub"
  }, "per A4 sheet, design included")), React.createElement("h1", null, "Your idea, turned into ", React.createElement("em", null, "stickers"), "."), React.createElement("p", {
    className: "lede"
  }, "Give us an idea or a few pictures and we'll design your stickers for you. As long as it fits on an A4 sheet, it's only \u20AC9.80."), !priceFirst && React.createElement("div", {
    className: "price"
  }, React.createElement("b", null, "\u20AC9.80"), React.createElement("span", null, "per A4 sheet, design included")), React.createElement("div", {
    className: "cta-row"
  }, React.createElement(Button, {
    size: "lg",
    variant: t.mood === 'bold' ? 'dark' : 'primary',
    onClick: goContact
  }, "Send us your idea"), React.createElement("div", {
    className: "cta-note"
  }, React.createElement(Icon, {
    name: "clock",
    size: 16,
    tone: "muted"
  }), "Ready to collect 2 hours after payment"))), React.createElement("div", {
    className: "hero-img"
  }, React.createElement("img", {
    src: "assets/hero-halloween.png",
    alt: "A DublinPrint team member holding a printed sheet of Halloween custom stickers",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))));
}
const STEPS = [{
  t: 'Send your idea',
  d: 'A short description or a few pictures is all we need.'
}, {
  t: 'We design it',
  d: 'We turn your idea into a sticker design that fits on an A4 sheet.'
}, {
  t: 'Pay and collect',
  d: 'Pay for your sheet, then pick up your stickers 2 hours later.'
}];
function HowItWorks() {
  return React.createElement("section", {
    className: "sec sec-alt"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("p", {
    className: "eyebrow"
  }, "How it works"), React.createElement("h2", {
    className: "h2"
  }, "Three simple steps"), React.createElement("ol", {
    className: "steps"
  }, STEPS.map((s, i) => React.createElement("li", {
    key: s.t,
    className: "step"
  }, React.createElement(Card, {
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    className: "step-n"
  }, i + 1), React.createElement("h3", null, s.t), React.createElement("p", null, s.d)))))));
}
function Pricing() {
  return React.createElement("section", {
    className: "sec"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("p", {
    className: "eyebrow"
  }, "Pricing and pickup"), React.createElement("h2", {
    className: "h2"
  }, "One price. Ready in 2 hours."), React.createElement("div", {
    className: "info-grid"
  }, React.createElement(Card, {
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    className: "info"
  }, React.createElement("div", {
    className: "info-head"
  }, React.createElement("div", {
    className: "info-ic"
  }, React.createElement(Icon, {
    name: "sticker",
    size: 22,
    tone: "brand"
  })), React.createElement("h3", null, "Price")), React.createElement("div", {
    className: "big"
  }, "\u20AC9.80"), React.createElement("p", null, "Per A4 sheet. The design is included."))), React.createElement(Card, {
    style: {
      height: '100%'
    }
  }, React.createElement("div", {
    className: "info"
  }, React.createElement("div", {
    className: "info-head"
  }, React.createElement("div", {
    className: "info-ic"
  }, React.createElement(Icon, {
    name: "shopping-bag",
    size: 22,
    tone: "brand"
  })), React.createElement("h3", null, "Click and collect")), React.createElement("div", {
    className: "big"
  }, "2 hours"), React.createElement("p", null, "Your stickers are ready to collect 2 hours after payment."), React.createElement("div", {
    className: "addr",
    style: {
      alignItems: 'flex-start',
      flexWrap: 'nowrap'
    }
  }, React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    tone: "muted",
    style: {
      marginTop: 2,
      flex: 'none'
    }
  }), React.createElement("span", null, "Pickup: ", React.createElement("a", {
    href: MAPS,
    target: "_blank",
    rel: "noopener",
    style: {
      fontWeight: 600
    }
  }, "2C Grangegorman Lower,", React.createElement("br", null), "Smithfield, D07 K46Y"))))))));
}
function Cuts() {
  return React.createElement("section", {
    className: "sec sec-alt"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("p", {
    className: "eyebrow"
  }, "Cut options"), React.createElement("h2", {
    className: "h2"
  }, "Kiss-cut or die-cut?"), React.createElement("div", {
    className: "cuts"
  }, React.createElement(Card, null, React.createElement("div", {
    className: "cut"
  }, React.createElement("div", {
    className: "diagram"
  }, React.createElement("div", {
    className: "sheet"
  }, React.createElement("div", {
    className: "stk a"
  }), React.createElement("div", {
    className: "stk b"
  }), React.createElement("div", {
    className: "stk c"
  }), React.createElement("div", {
    className: "stk d"
  }))), React.createElement("div", {
    className: "legend"
  }, React.createElement("i", null), "Cut line"), React.createElement("h3", null, "Kiss-cut"), React.createElement("p", null, "We cut through the sticker only, so all your stickers stay together on one backing sheet. Easy to store and hand out."))), React.createElement(Card, null, React.createElement("div", {
    className: "cut"
  }, React.createElement("div", {
    className: "diagram"
  }, React.createElement("div", {
    className: "die"
  }, React.createElement("div", null))), React.createElement("div", {
    className: "legend"
  }, React.createElement("i", null), "Cut line"), React.createElement("h3", null, "Die-cut"), React.createElement("p", null, "We cut all the way through, following the shape of your design. Every sticker comes out on its own."))))));
}
function FinalCta({
  t
}) {
  return React.createElement("section", {
    className: "final"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("h2", null, "Got an idea? Let's make it a sticker."), React.createElement("p", null, "\u20AC9.80 per A4 sheet, design included."), React.createElement(Button, {
    size: "lg",
    variant: t.mood === 'bold' ? 'dark' : 'primary',
    onClick: goContact
  }, "Send us your idea")));
}
function Footer() {
  return React.createElement("footer", {
    className: "ftr",
    id: "contact"
  }, React.createElement("div", {
    className: "wrap"
  }, React.createElement("div", {
    className: "ftr-grid"
  }, React.createElement("div", null, React.createElement("img", {
    src: LOGO,
    alt: "DublinPrint",
    style: {
      width: 152,
      height: 65
    }
  })), React.createElement("div", null, React.createElement("h4", null, "Contact"), React.createElement("ul", null, React.createElement("li", null, React.createElement(Icon, {
    name: "phone",
    size: 16,
    tone: "white"
  }), React.createElement("a", {
    href: "tel:+35316709872",
    style: {
      color: '#fff',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "+353 16709872")), React.createElement("li", null, React.createElement(Icon, {
    name: "mail",
    size: 16,
    tone: "white"
  }), React.createElement("a", {
    href: "mailto:27print27@gmail.com",
    style: {
      color: '#fff',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "27print27@gmail.com")), React.createElement("li", null, React.createElement(Icon, {
    name: "globe",
    size: 16,
    tone: "white"
  }), React.createElement("a", {
    href: "https://Dublinprint.net",
    style: {
      color: '#fff',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, "https://Dublinprint.net")))), React.createElement("div", null, React.createElement("h4", null, "Pickup"), React.createElement("ul", null, React.createElement("li", {
    style: {
      alignItems: 'flex-start',
      flexWrap: 'nowrap'
    }
  }, React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    tone: "white",
    style: {
      marginTop: 2,
      flex: 'none'
    }
  }), React.createElement("a", {
    href: MAPS,
    target: "_blank",
    rel: "noopener",
    style: {
      color: '#fff',
      fontWeight: 600,
      lineHeight: 1.5,
      textDecoration: 'none'
    }
  }, "2C Grangegorman Lower,", React.createElement("br", null), "Smithfield, D07 K46Y")), React.createElement("li", null, React.createElement(Icon, {
    name: "clock",
    size: 16,
    tone: "white"
  }), React.createElement("span", {
    style: {
      color: '#fff',
      fontWeight: 600
    }
  }, "Ready 2 hours after payment"))))), React.createElement("div", {
    className: "ftr-base"
  }, "\xA9 DublinPrint \xB7 ", React.createElement("a", {
    href: "https://Dublinprint.net",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, "https://Dublinprint.net"))));
}
const TWEAK_DEFAULTS = {
  "mood": "playful",
  "hero": "price",
  "density": "regular"
};
function App() {
  const t = TWEAK_DEFAULTS;
  return React.createElement("div", {
    className: `mood-${t.mood} hero-${t.hero} dens-${t.density}`
  }, React.createElement(Header, null), React.createElement("main", null, React.createElement(Hero, {
    t: t
  }), React.createElement(HowItWorks, null), React.createElement(Pricing, null), React.createElement(Cuts, null), React.createElement(FinalCta, {
    t: t
  })), React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App, null));