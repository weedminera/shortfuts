import isUserOnPage from './isUserOnPage';

export default function isUserOnSearchResultsPage(): boolean {
  return (
    // English
    isUserOnPage("Search Results") ||
    // French
    isUserOnPage("Résultats") ||
    // Italian
    isUserOnPage("Risultati Ricerca")
  );
}
