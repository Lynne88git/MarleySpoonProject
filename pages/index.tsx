import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Home from "../components/Home/Home";
import { fetchArticle } from "../utils/queries";
import { HomeProps } from "../interfaces";

const Index: NextPage<HomeProps> = (props) => {
  console.log(props);
  return (
    <div>
      <Home {...props} />
    </div>
  );
};

export async function getStaticProps() {
  const homepage = await fetchArticle("home_page");
  const { results } = homepage;
  console.log(results);
  return {
    props: {
      results,
    },
  };
}

export default Index;
