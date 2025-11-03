import { ReactNode } from "react";

interface ProductListProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const ProductList = <T,>(props: ProductListProps<T>) => {
  return <ul>{props.rows.map(row => props.renderRow(row))}</ul>;
};

interface Product {
  id: number;
  title: string;
  price: number;
}

function App() {
  return (
    <div>
      <ProductList<Product> rows={[12, 'egg', 5]} renderRow={(row) => <li>{row.title}</li>} />
      <ProductList<Product> rows={[{ id: 1, title: "egg", price: 20 }, { id: 2, title: "tofu", price: 60 }]} renderRow={row => <li>{row.title}</li>}>
      </ProductList>
    </div>
  );
}

export default App;
