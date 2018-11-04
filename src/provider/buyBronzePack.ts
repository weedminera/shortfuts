import clickElement from './helpers/clickElement';
import confirmConfirmationDialog from './helpers/confirmConfirmationDialog';
import isUserOnPage from './helpers/isUserOnPage';
import { logError } from '../utils/logger';

export default function buyBronzePack() {
  if (
    // English
    isUserOnPage("Store") ||
    // French
    isUserOnPage("BOUTIQUE") ||
    // Italian
    isUserOnPage("NEGOZIO")
  ) {
    // Go to "Bronze" tab of the store.
    // Select the last tab, which contain the bronze packs.
    const packTabButtons = document.getElementsByClassName("tab-menu-item");
    const bronzeTabButton = packTabButtons[packTabButtons.length - 1];
    clickElement(bronzeTabButton);

    setTimeout(() => {
      let packPack = "bronze pack";
      const language = document.getElementsByTagName("html")[0].lang;

      switch (language) {
        case "fr":
          packPack = "Env. Liste transf.";
          break;
        case "it":
          packPack = "PACCHETTO BRONZO";
          break;
      }

      // Ensure we're actually buying a bronze pack...
      const packHeader = document.getElementsByClassName("packHeader")[0];
      const packTitle = packHeader.getElementsByTagName("span")[0];
      if (packTitle.textContent.toLowerCase() !== packPack.toLowerCase()) {
        return;
      }

      // Buy a 400 coin bronze pack.
      const bronzePackButton = document.getElementsByClassName(
        "currency call-to-action coins"
      )[0];
      clickElement(bronzePackButton);

      // Press OK.
      confirmConfirmationDialog();
    }, 250);
  }
}
