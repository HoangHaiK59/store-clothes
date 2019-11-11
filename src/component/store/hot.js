import React from 'react';
import styles from '../../module/styles.module.css';
import datas from '../../data';

class Hot extends React.Component {

    createContent = () => {
        let contents = [];
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].status === "hot") {
                contents.push(datas[i])
            }
        }
        return contents;
    }

    render() {
        return (
            <section>
                <div >

                </div>
                <div className={styles.mainContainer}>
                    {
                        this.createContent().map(content => (
                            <div key={content.id} className={styles.mainContainer__Item}>
                                <img src={content.img.main} alt=""/>
                            </div>
                        ))
                    }
                </div>
            </section>
        );
    }
}

export default Hot;