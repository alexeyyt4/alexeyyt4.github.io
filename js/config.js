// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "IRS | HL: HECURP";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Бажаю вам гарного РП процесу",
  "Забудьте про Фрімена!",
  "Цікавий факт: В інтернеті доси тривають сварки на рахунок роду військ HECU",
  "Цікавий факт: Цей сервер створено з нуля, не використовуючи злиті збірки",
  "Цікавий факт: Лише ви вирішуєте судьбу вашого персонажа",
  "Цікавий факт: Проект існує понад рік!",
  "Тут не раді кацапам.",
  "Цікавий факт: [ДАНІ ВИДАЛЕНІ]"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 5000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "hecu.jpg";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
