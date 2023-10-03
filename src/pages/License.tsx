import React from 'react';
import Layout from '@theme/Layout';

export default function MyPage(): JSX.Element {
  return <>
    <Layout>
      <main style={{ marginTop: "2rem", marginLeft: "1rem" }}>
        <h1>
          License
        </h1>

        <h2>ZilaWS uses the <a href="https://opensource.org/license/mit/" target="_blank" rel="noopener noreferrer">MIT License</a></h2>

        <p>
          You can:
          <ul>
            <li>Use</li>
            <li>Copy</li>
            <li>Modify</li>
            <li>Merge</li>
            <li>Publish</li>
            <li>Distribute</li>
            <li>Sublicense</li>
          </ul>
        </p>
      </main>
    </Layout>
  </>
}