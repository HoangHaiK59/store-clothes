import React from "react";
import styles from "../../module/styles.module.css";
import "../../styles.css";
import datas from "../../data";

const Category = () => (
  <section className={styles.spacingContent}>
    <div>
      <div>
        <section>
          <div>
            <div>
              <section>
                <div>
                  <h1>Category</h1>
                </div>
                <div className={styles.mainContainer}>
                  {datas.map(data => (
                    <div key={data.id} className={styles.mainContainer__Item}>
                      <img src={data.img.main} alt="" />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
);

export default Category;
