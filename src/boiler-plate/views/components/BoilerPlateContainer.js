import React, { useEffect } from 'react';
import styles from './styles.scss';

function BoilerPlate() {
    useEffect(() => {
        fetch('/api/json')
            .then(data => {
                data.json()
                    .then(json => console.log({ json }));
            });
    }, []);
    console.log({ styles })
  return (
      <div className={styles.container}>
        BoilerPlate
      </div>

  );
}

export default BoilerPlate;

