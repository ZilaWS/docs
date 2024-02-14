import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import MDXCode from '@theme/MDXComponents/Code'

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Small',
    Svg: require('@site/static/img/undraw_collecting_re_lp6p.svg').default,
    description: (
      <>
        CommonJS: 13KB <br />
        ESM: 13KB <br />
        UMD: 16KB <br />
        <span style={{ fontSize: "0.8rem" }}>
          On version 2.0.0
        </span>
      </>
    ),
  },
  {
    title: 'Async',
    Svg: require('@site/static/img/undraw_social_interaction_re_dyjh.svg').default,
    description: (
      <>
        You can wait for the other side of the connection to finish its task. <br />
        Simply use the <MDXCode>return</MDXCode> keyword to send back data.
      </>
    ),
  },
  {
    title: 'Easy-to-use',
    Svg: require('@site/static/img/undraw_beach_day_cser.svg').default,
    description: (
      <>
        ZilaWS was design to be easy-to-use and fun to work with.
      </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('@site/static/img/undraw_outer_space_re_u9vd.svg').default,
    description: (
      <>
        <span style={{fontWeight: "bold", display: 'block'}}>Average speed</span>
        Client side waiter: 5 ms <br/>
        Server Side waiter: 6 ms <br/>
        <span style={{ fontSize: "0.8rem" }}>
          On version 2.0.0
        </span>
      </>
    )
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx("row", styles.featureList)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
