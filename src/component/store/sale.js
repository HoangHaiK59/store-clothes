import React from 'react';
import styles from '../../module/styles.module.css';
import datas from '../../data';
import { categories } from '../../data/categories';

class Sale extends React.Component {

    createContent = () => {
        let mapContents = [];
        for (let i = 0; i < categories.length; i++) {
            let content = [];
            for (let j = 0; j < datas.length; j++) {
                if (datas[j].category === categories[i]) {
                    content.push(datas[j]);
                }
            }
            mapContents.push(content);
        }
        console.log(mapContents);
        return mapContents;
    }

    render() {
        return (
            <section>
                {
                    this.createContent().map(contents => (
                        <>
                            <div>
                                {
                                    contents[0].category
                                }
                            </div>
                            <div className={styles.mainContainer}>
                                {
                                    contents.map(content => (
                                        <div key={content.id} className={styles.mainContainer__Item}>
                                            <img src={content.img.main} alt="" />
                                        </div>
                                    ))
                                }
                            </div>
                        </>
                    ))
                }
            </section>

        );
    }
}

export default Sale;