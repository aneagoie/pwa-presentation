import React from "react";

import {
  Appear, BlockQuote, Cite, CodePane, ComponentPlayground, Deck, Fill,
  Heading, Image, Layout, Link, ListItem, List, Markdown, MarkdownSlides, Quote, Slide, SlideSet,
  TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table, Text
} from "../../src";

import preloader from "../../src/utils/preloader";

import createTheme from "../../src/themes/default";

import Interactive from "../assets/interactive";

require("normalize.css");
require("../../src/themes/default/index.css");

const images = {
  light1: require("../assets/light1.png"),
  pwa: require("../assets/pwa.png"),
  logo: require("../assets/formidable-logo.svg"),
  light2: require("../assets/light2.png"),
  twitter: require("../assets/twitter.png"),
  housing: require("../assets/housing.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            Progressive Web App in 15min
          </Heading>
          <Link href="https://github.com/aneagoie">
            <Text bold textColor="tertiary">🐦 @andreineagoie</Text>
          </Link>
        </Slide>
        <Slide transition={["slide"]} bgColor="black">
          <Image src={images.pwa.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            Progressive What App??
          </Heading>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="black">
          <Image src={images.twitter.replace("/", "")} margin="0px auto 40px" height="293px"/>
          <Appear fid="1">
            <Text bold textColor="tertiary">
              Lyft
            </Text>
          </Appear>
          <Appear fid="1">
            <Text bold textColor="tertiary">
              Flipkart
            </Text>
          </Appear>
          <Appear fid="1">
            <Text bold textColor="tertiary">
              Alibaba
            </Text>
          </Appear>
        </Slide>
        <Slide bgColor="black">
          <Heading size={1} caps fit textColor="primary" textFont="primary">
            Show this to marketing. You are now a God/Goddess:
          </Heading>
          <Image src={images.housing.replace("/", "")} margin="0px auto 40px" height="293px"/>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Link href="https://github.com/aneagoie/react-training-RoboDex">
            <Text bold textColor="tertiary">https://github.com/aneagoie/react-training-RoboDex</Text>
          </Link>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.light1.replace("/", "")} bgDarken={0.25} >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              44/100
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom", "fade"]} bgColor="primary">
          <Link href="https://aneagoie.github.io/Progressive-Web-App-React/">
            <Text bold textColor="tertiary">https://aneagoie.github.io/Progressive-Web-App-React/</Text>
          </Link>
        </Slide>
        <Slide transition={["slide"]} bgImage={images.light2.replace("/", "")} bgDarken={0.25} >
          <Appear fid="1">
            <Heading size={1} caps fit textColor="primary">
              100/100
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="black">
            To explore more:
          </Heading>
          <Link href="https://github.com/jeffposnick/create-react-pwa/compare/c-r-a-0.6.0...c-r-pwa-0.6.0">
            <Text bold textColor="tertiary">Git Diff To Add PWA Features</Text>
          </Link>
          <Link href="https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12#.umkemaxm7">
            <Text bold textColor="tertiary">Addy Osmani On PWA+React. 4 Part Series</Text>
          </Link>
          <Link href="https://www.smashingmagazine.com/2016/08/a-beginners-guide-to-progressive-web-apps/">
            <Text bold textColor="tertiary">Smashing Magazine On PWA</Text>
          </Link>
          <Link href="https://aneagoie.github.io/Progressive-Web-App-React/">
            <Text bold textColor="tertiary">Our Demo For Today</Text>
          </Link>
        </Slide>
        <Slide transition={["slide"]} bgColor="tertiary">
          <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
            This is the end
          </Heading>
          <Link href="https://twitter.com/AndreiNeagoie">
              <Text bold textColor="black">GitHub: @aneagoie</Text>
            </Link>
            <Link href="https://github.com/aneagoie">
              <Text bold textColor="black">Twitter: @andreineagoie</Text>
            </Link>
        </Slide>
      </Deck>
    );
  }
}
