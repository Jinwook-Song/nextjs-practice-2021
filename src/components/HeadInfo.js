import Head from "next/head";

function HeadInfo({ title, name, content }) {
  return (
    <Head>
      <title>My Blog | {title}</title>
      <meta name={name} content={content} />
    </Head>
  );
}

HeadInfo.defaultProps = {
  title: "Home",
  name: "description",
  content: "Blog powered by NestJS",
};

export default HeadInfo;
