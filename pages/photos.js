import Image from "next/image";
import Link from "next/link";
import HeadInfo from "../src/components/HeadInfo";
import styles from "../styles/Photos.module.css";

export default function Photos({ photos }) {
  return (
    <div>
      <HeadInfo title="Photos" />
      <h1>My Photos</h1>
      <ul className={styles.photos}>
        {photos.map((photo) => (
          <li key={photo.id}>
            <Link href={`photos/${photo.id}`}>
              <a>
                <Image //
                  width="100"
                  height="100"
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                />
                <span>{photo.title} &rarr;</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`
  );
  const photos = await res.json();

  return {
    props: {
      photos,
    },
  };
};
