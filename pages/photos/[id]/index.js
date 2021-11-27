import Image from "next/image";
import Link from "next/link";

function index({ photo }) {
  return (
    <div>
      <h2>{photo.title}</h2>
      <Image //
        src={photo.url}
        alt={photo.title}
        width="100"
        height="100"
      />
      <Link href="/photos">
        <a>&larr; go back</a>
      </Link>
    </div>
  );
}
export const getStaticPaths = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();

  return {
    // paths: [
    //   { params: { id: "1" } },
    //   { params: { id: "2" } },
    //   { params: { id: "3" } },
    // ],
    paths: photos.map((photo) => ({
      params: {
        id: photo.id.toString(),
      },
    })),
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
  const photo = await res.json();

  return {
    props: {
      photo,
    },
  };
};

export default index;
