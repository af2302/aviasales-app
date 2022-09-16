import React from "react";
import Filters from "../Filters/filters";
import Tabs from "../Tabs/tabs";
import TicketList from "../TicketsList/TicketsList";

import styles from "./main.module.scss"

const Main = () => {
    return (
      <div className={styles.wrapper}>
          <Filters />
        <div className={styles.container}>
          <Tabs />
          <TicketList />
        </div>
      </div>
    )
}

export default Main;