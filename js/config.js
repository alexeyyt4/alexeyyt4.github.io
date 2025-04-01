// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "IRS | SCP MilitaryRP.";

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
  "Бажаю вам гарного РП процессу",
  "Охороняти. Утримувати. Захищати.",
  "Цікавий факт: ГОК не тільки знищує аномалії. Вони їх ще досліджують.",
  "Цікавий факт: А... А відділ антимеметики в нас існує?",
  "Цікавий факт: ДЗ за звілнення та захист розумних SCP-об'єктів, а не за усіх дцп аномалій",
  "Цікавий факт: Сірєногаловий не є SCP-об'єктом",
  "Тут не раді кацапам.",
  "Цікавий факт: [ДАНІ ВИДАЛЕНІ]",
  "Українська філія фонду дуже цікава!"
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 3000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "mtf";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
