import { GetStaticProps } from "next";
import Head from "next/head";

import { getPrismicClient } from "../../services/prismic";

import styles from "./styles.module.scss";


export default function Posts() {
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.getAllByType("post");

  console.log(JSON.stringify(response, null, 2));

  return {
    props: {},

  };
};

