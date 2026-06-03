

import Listing from './components/Listing';
import data from './etsy.json'; 
import { prepareDataForListing } from './types/dataPreparation';

function App () {
 
  const preparedItems = prepareDataForListing(data);

  return (
    <>
      <Listing items={preparedItems} />
    </>
  );
};

export default App;