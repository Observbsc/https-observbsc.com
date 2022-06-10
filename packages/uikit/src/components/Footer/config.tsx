import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
import { TwitterIcon, TelegramIcon, RedditIcon, InstagramIcon, GithubIcon, DiscordIcon, MediumIcon } from "../Svg";

export const footerLinks: FooterLinkType[] = [
  {
    label: "About",
    items: [
      {
        label: "Contact",
        href: "https://docs.https://observbsc.com/contact-us",
      },
      {
        label: "White Paper",
        href: "https://observbsc.com/whitepaper",
      },
      {
        label: "Community",
        href: "https://t.me/observbsc",
      },
      {
        label: "Tokenomics",
        href: "https://observbsc.com/tokenomics",
      },
      {
        label: "—",
      },
      {
        label: "Online Store - Coming Soon",
        href: "https://shop.observbsc.com",
        isHighlighted: true,
      },
    ],
  },
  {
    label: "Help",
    items: [
      {
        label: "Email Us",
        href: "mailto: Hello@observbsc.com",
      },
    ],
  },
  {
    label: "Open Sourced",
    items: [
      {
        label: "Github",
        href: "https://github.com/observbsc",
      },
      {
        label: "Documentation - Coming Soon",
        href: "",
      },
    ],
  },
];

export const socials = [
  {
    label: "Twitter",
    icon: TwitterIcon,
    href: "https://twitter.com/observbsc",
  },
  {
    label: "Telegram",
    icon: TelegramIcon,
    items: [
      {
        label: "Official Channel",
        href: "https://t.me/observbsc",
      },
      {
        label: "Vietnam Channel",
        href: "https://t.me/observbscvietnam",
      },
      {
        label: " Shiller Channel",
        href: "https://t.me/observshillers",
      },
    ],
  },
  {
    label: "Github",
    icon: GithubIcon,
    href: "https://github.com/observbsc/",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
