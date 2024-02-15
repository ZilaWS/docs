import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Codeblock from '@theme/CodeBlock';
import Code from '@theme/MDXComponents/Code'
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
        <h3 style={{ textAlign: "center" }}>In order for ZilaWS to work, both the server side and the client side is needed</h3>
        <p style={{ textAlign: "center" }}>Technically it is compatible with a simple WS server or client, however you'll need to take care of the message handling.</p>
        <h2 style={{ textAlign: 'center' }}>Installing</h2>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
          <section style={{ margin: '30px' }}>
            <h3 style={{textAlign: "center"}}>Client</h3>
            <Codeblock language='bash'>
              npm install zilaws-client@latest
            </Codeblock>
          </section>
          <section style={{ margin: '30px' }}>
            <h3 style={{textAlign: "center"}}>Server</h3>

            <Codeblock language='bash'>
              npm install zilaws-server@latest
            </Codeblock>
          </section>
        </div>
        <div className={styles.featuresgrid} style={{ display: 'grid', gridTemplateRows: "2fr 1fr", gridTemplateColumns: "1fr 1fr", width: "65%", marginInline: "auto" }}>
          <div style={{ textAlign: "center", gridColumn: "1/2" }}>
            <h2>Waiters</h2>
            <p>
              ZilaWS has a unique function called <Code>waiter</Code>. Waiters (as their name suggests) can be awaited. They resolve when a <Link to={"/docs/client-api/recieving-data#waiting-for-data.mdx"}>Messagehandler</Link> on the other side of the connection resolves or returns thus making it perfect for retrieving data. However if the client or server does not respond in time, waiters will resolve as <i>undefined</i>.
            </p>
          </div>
          <div style={{ gridColumn: "1/2", gridRow: "2/3" }}>
            <Link className={"button button--secondary button--md"} style={{ display: "block", marginInline: "auto", width: "fit-content" }} to={"/docs/waiters"}>Read more here</Link>
          </div>
          <div className={styles.mghandlers} style={{ textAlign: "center", gridColumn: "2/3" }}>
            <h2>Message handlers</h2>
            <p>
              Tired of having to build an event handler system for WS messages every time you start a new project? ZilaWS got you covered with <Code>MessageHandlers</Code>!
            </p>
          </div>
          <div className={styles.mghandlersbtn} style={{ gridColumn: "2/3", gridRow: "2/3" }}>
            <Link className={"button button--secondary button--md"} style={{ display: "block", marginInline: "auto", width: "fit-content" }} to={"/docs/messagehandlers"}>Read more here</Link>
          </div>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
