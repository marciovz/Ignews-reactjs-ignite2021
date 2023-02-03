import Head from "next/head";

import styles from "./styles.module.scss";


function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusamus assumenda doloremque ab libero nobis error est quia delectus numquam provident quisquam eligendi corporis, deserunt dolore sapiente mollitia quasi exercitationem?</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusamus assumenda doloremque ab libero nobis error est quia delectus numquam provident quisquam eligendi corporis, deserunt dolore sapiente mollitia quasi exercitationem?</p>
          </a>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus accusamus assumenda doloremque ab libero nobis error est quia delectus numquam provident quisquam eligendi corporis, deserunt dolore sapiente mollitia quasi exercitationem?</p>
          </a>
        </div>
      </main>
    </>
  );
}

export default Posts;