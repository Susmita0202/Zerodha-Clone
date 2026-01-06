import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  // 🔵 BUY STATE
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [buyStockUID, setBuyStockUID] = useState("");

  // 🔴 SELL STATE
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [sellStockUID, setSellStockUID] = useState("");

  // 🔵 BUY HANDLERS
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setBuyStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setBuyStockUID("");
  };

  // 🔴 SELL HANDLERS
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSellStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSellStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}

      {/* 🔵 BUY WINDOW */}
      {isBuyWindowOpen && <BuyActionWindow uid={buyStockUID} />}

      {/* 🔴 SELL WINDOW */}
      {isSellWindowOpen && <SellActionWindow uid={sellStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
