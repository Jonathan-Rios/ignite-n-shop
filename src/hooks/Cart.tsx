import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";

interface CartProviderProps {
  children: React.ReactNode;
}

interface CartContextData {
  cart: ISelectedProduct[];
  isCartOpen: boolean;

  productList: IProduct[];
  setProductList: React.Dispatch<React.SetStateAction<IProduct[]>>;

  toggleCart(option?: boolean): void;
  addItemToCart(product: ISelectedProduct): void;
  removeItemToCart(productId: string): void;
}

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
}

export interface ISelectedProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
  unit_amount: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [productList, setProductList] = useState<IProduct[]>([]);

  const [cart, setCart] = useState<ISelectedProduct[]>([]);

  function toggleCart(option?: boolean) {
    setIsCartOpen(option || !isCartOpen);
  }

  function addItemToCart(product: ISelectedProduct) {
    setCart((prevState) => {
      if (prevState.find((item) => item.id === product.id)) {
        toast.error("Esse produto já está no carrinho", {
          position: "bottom-right",
        });
        return prevState;
      }

      toast.success("Produto adicionado no carrinho", {
        position: "bottom-right",
      });

      return [...prevState, product];
    });
  }

  function removeItemToCart(productId: string) {
    setCart((prevState) => {
      if (!prevState.length) {
        return prevState;
      }

      const filteredList = prevState.filter((item) => item.id !== productId);

      return filteredList;
    });
  }

  return (
    <CartContext.Provider
      value={{
        cart,

        productList,
        setProductList,

        isCartOpen,
        toggleCart,
        addItemToCart,
        removeItemToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}

export { CartProvider, useCart };
