import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Codeblock from '@theme/CodeBlock';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Main Page`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main style={{ padding: "15px" }}>
        <h3 style={{textAlign: "center"}}>In order for ZilaWS to work, both the server side and the client side is needed</h3>
        <p style={{textAlign: "center"}}>Technically it is compatible with a simple WS server or client, however you'll need to take care of the message handling.</p>
        <h2 style={{ textAlign: 'center' }}>Installing</h2>
        
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap'}}>
          <section style={{margin: '30px'}}>
            <h3>Client</h3>
            <Codeblock language='bash'>
              npm install zilaws-client@latest
            </Codeblock>
          </section>
          <section style={{margin: '30px'}}>
            <h3>Server</h3>
            
            <Codeblock language='bash'>
              npm install zilaws-server@latest
            </Codeblock>
          </section>
        </div>
      <HomepageFeatures />
      </main>
    </Layout>
  );
}
