import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Minimal self-sovereign stack',
    Svg: require('@site/static/img/stack.svg').default,
    description: (
      <>
        Running a bitcoin stack should not be complicated if you properly manage dependencies. Minimalism is the target.
      </>
    ),
  },
  {
    title: 'Focus on what matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Learn how to run the systems, what to look into going forward.
      </>
    ),
  },
  {
    title: 'Open-source is powerful',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We believe in building in the open and sharing the good tools you use yourself with the great community around.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
