import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  return <p>Conversation: {router.query.slug}</p>;
}
