import { getFigmaData, init } from "./common/app";
import { PostMessage } from "./common/msg";
// Figma Documentation Links:
// https://www.figma.com/plugin-docs/how-plugins-run
// https://www.figma.com/plugin-docs/api/api-reference/

figma.showUI(__html__, { themeColors: true });
figma.ui.resize(500, 800);

(async () => {
  await init();
})();

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = async (msg: PostMessage) => {
  console.log(`"${msg.type}" Message Received!`);

  switch (msg.type) {
    case "refreshFigmaData":
      await getFigmaData();
      break;
    case "log": // Demonstrate UI passing data to code.ts
      console.log("payload:");
      console.log(msg.payload);
      break;
    case "close":
      figma.closePlugin();
      break;
    case "notifiy":
      figma.notify(msg.payload.message, msg.payload.options || {});
      break;
    default:
      console.log("Unknown PostMessage Received");
      console.log({ msg });
  }
};
