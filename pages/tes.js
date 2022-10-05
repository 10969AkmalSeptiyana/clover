export default function Tes({ data }) {
  return <div>{data.name}</div>;
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_HOST}/api/hello`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
