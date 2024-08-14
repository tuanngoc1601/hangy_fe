import useHangyStore from "../lib/useStore"

export default function HomePage() {
  const access_token = useHangyStore((state) => state.access_token);
  console.log(access_token);
  return (
    <div>
      Home Page
    </div>
  )
}