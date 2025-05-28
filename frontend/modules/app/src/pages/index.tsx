import Catalogue from './catalogue';
import { GetServerSideProps } from 'next';
import { serverFetch } from '@api/server';
import { API_ENDPOINTS } from '@api/endpoints';
import { Product } from '@shared-types/types';
import Header from '@shared-components/Header';

type IndexPageProps = {
  products: Product[];
};

export function Index({ products }: IndexPageProps) {
  return (
    <div>
      <Header />
      <Catalogue products={products} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await serverFetch<Product[]>(API_ENDPOINTS.products);
  return {
    props: {
      products,
    },
  };
};

export default Index;
