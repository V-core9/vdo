/*jshint esversion: 8 */
const getUsage = require("command-line-usage");
const baseLogoSample = require("./logo/base_logo_sample");

const optionDefinitions = [
  {
    name: "help",
    description: "Display this usage guide.",
    alias: "h",
    type: Boolean,
  },
  {
    name: "src",
    description:
      "The input files to process. This is some additional text existing solely to demonstrate word-wrapping, nothing more, nothing less. And nothing in between.",
    type: String,
    multiple: true,
    defaultOption: true,
    typeLabel: "{underline file} ...",
  },
  {
    name: "timeout",
    description: "Timeout value in ms.",
    alias: "t",
    type: Number,
    typeLabel: "{underline ms}",
  },
];

const sections = [
  {
    header: "<]_V_[>  CLI_app:[ vdo ] ",
    content: {
      options: {
        columns: [
          { name: "one", maxWidth: 40 },
          { name: "two", width: 40, noWrap: true },
        ],
      },
      data: [
        {
          one: "Box-drawing characters, also known as line-drawing characters, are a form of semigraphics widely used in text user interfaces to draw various geometric frames and boxes.\n\noften only ASCII characters that approximate box-drawing characters are used, such as - (hyphen-minus), | (vertical bar), _ (underscore), = (equal sign) and + (plus sign) in a kind of ASCII art fashion.",
          two: baseLogoSample,
        },
      ],
    },
  },
  {
    header: "Installation",
    content: [
      "$ vdo {bold config} {underline create}",
      "$ vdo {bold config} {underline view}",
      //  '$ example [{bold --timeout} {underline ms}] {bold --src} {underline file} ...',
      //  '$ example {bold --help}'
    ],
  },
  {
    header: "Config Options",
    content: {
      options: {
        columns: [
          { name: "one", width: 40 },
          { name: "two", width: 40 },
        ],
      },
      data: [
        {
          one: "$ vdo {bold config} {underline create}",
          two: "Box-drawing characters, also known as line-drawing characters.",
        },
      ],
    },
  },
  {
    content: {
      options: {
        columns: [
          { name: "one", width: 40 },
          { name: "two", width: 40 },
        ],
      },
      data: [
        {
          one: "$ vdo {bold config} {underline view}",
          two: "Box-drawing characters, also known.",
        },
      ],
    },
  },
  {
    content: {
      options: {
        columns: [
          { name: "one", width: 40 },
          { name: "two", width: 40 },
        ],
      },
      data: [
        {
          one: "$ vdo {bold config} {underline remove}",
          two: "Form of semigraphics widely used in text user.",
        },
      ],
    },
  },
  /*{
    header: 'Options',
    optionList: optionDefinitions
  }*/
];

const welcomePageCLI = () => {
  console.log(getUsage(sections));
};

module.exports = welcomePageCLI;
