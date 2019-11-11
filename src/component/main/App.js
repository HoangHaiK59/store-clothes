import React from "react";
import Navigation from "../navigation";
import styles from "../../module/styles.module.css";

class App extends React.Component {
  render() {
    const { title, children, isActiveNav } = this.props;
    if (isActiveNav) {
      return (
        <div className={styles.root}>
          <div className={styles.root__container}>
            <Navigation />
            <div className={styles.root__mainview}>
              <div className={styles.mainviewContainer}>
                <div className={styles.mainviewContainer__scrollnode}>
                  <div className="mainviewContainer__scrollnode__child">
                    <section className={styles.spacingContent}>
                      <h1>{title}</h1>
                      <div>
                        <div>
                          <section>
                            <div>
                              <div>
                              {children}
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.root__footer}>
              <h1>Test</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={styles.root}>
          <div className={styles.root__container}>
            <div className={styles.root__mainview}>
              <div className={styles.mainviewContainer}>
                <div className={styles.mainviewContainer__scrollnode}>
                  <div className="styles.mainviewContainer__scrollnode__child">
                    <h1>{title}</h1>
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default App;
