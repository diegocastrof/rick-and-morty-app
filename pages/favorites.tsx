import { Layout, Card, ResultsLayout } from "components";
import { useApi } from "context/context";

export default function FavoritesPage() {
  const { state } = useApi();

  return (
    <Layout>
      <ResultsLayout>
        {state.favorites.map((favorite) => (
          <Card
            key={favorite.id}
            image={favorite.imageSrc}
            name={favorite.name}
            link={favorite.link}
          />
        ))}
      </ResultsLayout>
    </Layout>
  );
}
