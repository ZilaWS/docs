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
            to="/docs/intro"
            style={{width: "180px"}}
          >
            Get started
          </Link>
          <Link
            to="/docs/waiters"
            className="button button--secondary button--lg"
            style={{width: "180px"}}
          >
            Async
          </Link>
        </div>
        <div style={{marginTop: "20px"}}>
          Have questions? Join our <Link href='https://discord.gg/Bcwsuz96bb' style={{color: "var(--ifm-hero-text-color)", fontStyle: 'italic'}}>Discord server!</Link>
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
        <div className={styles.sider}>
          <section>
            <h3>Client</h3>
            <div>
              <Codeblock language='bash'>
                npm install zilaws-client@latest
              </Codeblock>
            </div>
          </section>
          <section>
            <h3>Server</h3>
            <div>
              <Codeblock language='bash'>
                npm install zilaws-server@latest
              </Codeblock>
            </div>
          </section>
        </div>
        
        <h2 style={{textAlign: "center"}}>Main features</h2>
        
        <div className={styles.sider}>
          <section>
            <h3>Waiters</h3>
            <div>
              <p>
              ZilaWS has a unique function called <Code>waiter</Code>. Waiters (as their name suggests) can be awaited. They resolve when a <Code>MessageHandler</Code> on the other side of the connection resolves or returns thus making it perfect for retrieving data. However if the client or server does not respond in time, waiters will resolve as <i>undefined</i>.
              </p>
              <Link className={"button button--secondary button--md"} style={{ display: "block", marginInline: "auto", width: "fit-content" }} to={"/docs/waiters"}>Read more here</Link>
            </div>
          </section>
          <section>
            <h3>MessageHandlers</h3>
            <div>
              <p>
                Tired of having to build an event handler system for WS messages every time you start a new project? ZilaWS got you covered with <Code>MessageHandlers</Code>!
              </p>
              <Link className={"button button--secondary button--md"} style={{ display: "block", marginInline: "auto", width: "fit-content" }} to={"/docs/messagehandlers"}>Read more here</Link>
            </div>
          </section>
          <section>
            <h3>Extending</h3>
            <div>
              <p>
                Since ZilaWS is object oriented, you have the ability to extend its classes! For example if you extend the <Code>ZilaClient</Code> class on the server side, you can store your own data on it which will be directly associated with the given ws client. This makes handling user data and sessions so much easier!<br/>
                Also because ZilaWS is written in TypeScript, you'll have full type-support for your extended class.
              </p>
              <Link className={"button button--secondary button--md"} style={{ display: "block", marginInline: "auto", width: "fit-content" }} to={"/docs/server-api/extending"}>Read more here</Link>
            </div>
          </section>
        </div>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
