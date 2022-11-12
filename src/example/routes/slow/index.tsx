import { component$, useStore, Resource } from '@builder.io/qwik';

import { useFilmQuery } from '../child/gql/film';

export default component$(() => {
  const storeA = useStore({ id: '0' });
  const filmQuery = useFilmQuery(storeA);

  return (
    <div>
      <Resource
        value={filmQuery}
        onPending={() => <div>Loading...</div>}
        onRejected={() => <div>Error</div>}
        onResolved={(res) => {
          return <>{res.data ? res.data.film.title : 'No results'}</>;
        }}
      />
    </div>
  );
});
