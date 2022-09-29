import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Layout from './Layout';

const App = () => {
  // const routeFreshness = useSelector(state => state.routeFreshness);
  const routeFragment = useSelector(state => state.routeFragment);

  useEffect(() => {
    // ovaj ce bit pozvan samo jednom kad se ova komponentamountuje
    // posto se App komponenta samo jednom mountuje i nikad vise ne dismounutuje ondaje ovo idelano da se tu stavi inicijalizacija tj. nesto sto treba da se obavi samo jednom kad se aplikacija pokrene.

    // INIT

  }, []);

  useEffect(() => {
    // ovo ce biti izvrsen osvaki put kada se routeFragment promeni

    if (typeof routeFragment === 'string') {
      window.location.hash = routeFragment; // setujemo fragment deo url-a na primer #contact
    } else {
      window.location.hash = ''; // brisemo fragment deo url-a
    }

  }, [routeFragment]);


  return (
    <div className="App">
      <Layout />
    </div>
  );
}
export default App;
