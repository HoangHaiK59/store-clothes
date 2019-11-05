import React from "react";
import Navigation from "../navigation";
import styles from "../../module/styles.module.css";

class App extends React.Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className={styles.root__container}>
        <Navigation />
        <div className={styles.root__mainview}>
          <div className={styles.mainviewContainer}>
            <div className={styles.mainviewContainer__scrollnode}>
              <div className={styles.mainviewContainer__scrollnode__child}>
                <h1>{title}</h1>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
