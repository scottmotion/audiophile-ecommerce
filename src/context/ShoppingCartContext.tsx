import { ReactNode, createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { fetchProductById } from "../api/fetchApi";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  slug: string;
  shortName: string;
  price: number;
  quantity: number;
};

type ShoppingCartContext = {
  // getItemQuantity: (id: number) => number;
  addItemToCart: (id: number, quantity: number) => void;
  increaseItemQuantity: (id: number) => void;
  decreaseItemQuantity: (id: number) => void;
  removeItemFromCart: (id: number) => void;
  removeAllFromCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  cartTotal: number;
  cartShipping: number;
  cartVat: number;
};
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    [],
  );

  const cartQuantity = (cartItems as CartItem[]).reduce(
    (quantity, item) => item.quantity + quantity,
    0,
  );

  const cartTotal = (cartItems as CartItem[]).reduce(
    (total, item) => item.quantity * item.price + total,
    0,
  );

  const cartShipping = 50;
  const cartVat = 1079;

  // function getItemQuantity(id: number) {
  //   return cartItems.find((item: CartItem) => item.id === id)?.quantity || 0;
  // }

  // function addItemToCart(id: number, quantity: number) {
  //   setCartItems(async (currItems: CartItem[]) => {
  //     if (currItems.find(item => item.id === id) == null) {
  //       return [...currItems, { id, quantity }];
  //     } else {
  //       return currItems.map(item => {
  //         if (item.id === id) {
  //           return { ...item, quantity: item.quantity + quantity };
  //         } else {
  //           return item;
  //         }
  //       });
  //     }
  //   });
  // }

  async function addItemToCart(id: number, quantity: number) {
    const result = await fetchProductById(id);
    setCartItems((currItems: CartItem[]) => {
      if (currItems.find(item => item.id === id) == null) {
        if (result !== undefined) {
          return [
            ...currItems,
            {
              id: id,
              slug: result.slug,
              shortName: result.shortName,
              price: result.price,
              quantity: quantity,
            },
          ];
        } else {
          return [...currItems];
        }
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  }

  function increaseItemQuantity(id: number) {
    setCartItems((currItems: CartItem[]) => {
      if (currItems.find(item => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseItemQuantity(id: number) {
    setCartItems((currItems: CartItem[]) => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id);
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeItemFromCart(id: number) {
    setCartItems((currItems: CartItem[]) => {
      return currItems.filter(item => item.id !== id);
    });
  }

  function removeAllFromCart() {
    setCartItems([]);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        // getItemQuantity,
        addItemToCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        removeItemFromCart,
        removeAllFromCart,
        cartQuantity,
        cartItems,
        cartTotal,
        cartShipping,
        cartVat,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
