import {createLazyFileRoute} from '@tanstack/react-router';

export const Route = createLazyFileRoute('/products')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <div>Hello "/products"!</div>
      <br />
      <link to="/product/1"> Go to product 1</link>
      <br />
      <link to="/product/2"> Go to product 2</link>
      <br />
      <link to="/product/3"> Go to product 3</link>
    </div>
  );
}
