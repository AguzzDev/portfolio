import { PixelArtDataProps } from "types";
import crunchyroll from "./Crunchyroll";
import dashboard from "./Dashboard";
import ddefault from "./Default";
import discord from "./Discord";
import disney from "./Disney";
import ecommerce from "./Ecommerce";
import netflix from "./Netflix";
import paint from "./Paint";
import planet from "./Planet";
import poker from "./Poker";
import sports from "./Sports";
import twitter from "./Twitter";
import whatsapp from "./Whatsapp";
import chess from "./Chess";
import quiz from "./Quiz";

const data: PixelArtDataProps = {
  Quiz: quiz,
  Chess: chess,
  Crunchyroll: crunchyroll,
  Dashboard: dashboard,
  Default: ddefault,
  Discord: discord,
  Disney: disney,
  Ecommerce: ecommerce,
  Netflix: netflix,
  Paint: paint,
  Planet: planet,
  Poker: poker,
  Sports: sports,
  Twitter: twitter,
  Whatsapp: whatsapp,
};

export default data;
